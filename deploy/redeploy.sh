#!/usr/bin/env bash
# Deploy portfolio na VPS: build obrazu + podmiana kontenera.
# Kod aktualizuje wcześniej workflow (git fetch/reset) albo ręcznie (git pull).
set -euo pipefail

cd "$(dirname "$0")/.."

echo ">> building image..."
docker build -t portfolio .

echo ">> recreating container..."
docker rm -f portfolio 2>/dev/null || true
docker run -d --name portfolio --restart unless-stopped \
  -p 80:3000 --env-file .env portfolio

docker image prune -f >/dev/null 2>&1 || true
echo ">> done."
