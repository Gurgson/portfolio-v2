# Deploy — VPS (Docker + Caddy + Postgres)

Domeny:

- `jstapinski.eu` → portfolio (Next)
- `czytnik.jstapinski.eu` → .NET (Czytnik)

## 0. Serwer

- Zainstaluj Docker + plugin `compose`.
- **Swap (ważne na 2 GB RAM)** — poduszka na szczyty (np. buildy):
  ```bash
  fallocate -l 3G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile
  echo '/swapfile none swap sw 0 0' >> /etc/fstab
  ```
- Firewall: otwórz **22, 80, 443**. Postgresa **nie** otwieraj publicznie.

## 1. DNS (u rejestratora domeny)

| Typ | Nazwa | Wartość |
| --- | --- | --- |
| A | jstapinski.eu | IP VPS |
| A | www.jstapinski.eu | IP VPS |
| A | czytnik.jstapinski.eu | IP VPS |

## 2. Kod + sekrety

```bash
# na VPS
git clone <repo> && cd portfolio-v2
cp deploy/.env.example deploy/.env      # ustaw DB_PASSWORD
# w deploy/Caddyfile podmień email
```

## 3. Start

```bash
cd deploy
docker compose up -d --build
```

Caddy sam pobierze certyfikaty HTTPS, gdy DNS już wskazuje na VPS.

## 4. Migracje + seed (z Twojego Windowsa przez tunel SSH)

Postgres jest tylko na `127.0.0.1:5432` VPS-a. Łączysz się tunelem:

```bash
# terminal 1
ssh -L 5432:localhost:5432 user@IP_VPS
```

```bash
# terminal 2 (w repo lokalnie)
# .env.local: DATABASE_URL=postgresql://portfolio:HASLO@localhost:5432/portfolio
npm run db:push     # utwórz tabele wg schema.ts
npm run db:seed     # zasil danymi z obecnych plików TS
npm run db:studio   # GUI do edycji tłumaczeń/treści (przez tunel)
```

## 5. Aktualizacja portfolio

```bash
git pull && cd deploy && docker compose up -d --build portfolio
```

## 6. Czytnik (.NET) — druga baza w tym samym Postgresie

```bash
docker compose exec postgres psql -U portfolio -c "CREATE USER czytnik WITH PASSWORD 'haslo';"
docker compose exec postgres psql -U portfolio -c "CREATE DATABASE czytnik OWNER czytnik;"
```

Potem odkomentuj serwis `czytnik` w `docker-compose.yml`, ustaw `image`/`build`, i `docker compose up -d`.

## Backup

```bash
docker compose exec postgres pg_dump -U portfolio portfolio > backup_$(date +%F).sql
```

(+ masz 28-dniowy backup VPS w cyber_Folks jako druga warstwa.)
