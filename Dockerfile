# syntax=docker/dockerfile:1

# ---- deps: instalacja zależności ----
FROM node:22-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- build: kompilacja Next (output: standalone) ----
FROM node:22-slim AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- runner: lekki obraz produkcyjny ----
FROM node:22-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# standalone zawiera zminimalizowany node_modules + server.js
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public

# sharp (natywne, linux-x64/glibc) dla optymalizacji next/image — kopiujemy
# jawnie z build stage, żeby na pewno był w runnerze (tracing standalone bywa
# zawodny dla natywnych zależności).
COPY --from=build --chown=node:node /app/node_modules/sharp ./node_modules/sharp
COPY --from=build --chown=node:node /app/node_modules/@img ./node_modules/@img

USER node
EXPOSE 3000
CMD ["node", "server.js"]
