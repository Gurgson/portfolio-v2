#!/usr/bin/env bash
# Deploy na VPS przez docker compose: Caddy (HTTPS) + portfolio (Next).
# Kod aktualizuje wcześniej workflow (git fetch/reset) albo ręcznie (git pull).
set -euo pipefail

cd "$(dirname "$0")" # -> deploy/

# Usuń stary, samodzielny kontener z fazy bez Caddy (trzymał port 80), jeśli jest.
docker rm -f portfolio 2>/dev/null || true

echo ">> compose up (build)..."
docker compose up -d --build

docker image prune -f >/dev/null 2>&1 || true
echo ">> deployed."
