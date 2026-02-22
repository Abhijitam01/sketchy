# Deployment Plan (Free Tier)

This plan deploys the app with **zero cost to start** using Render free services.

## Target Architecture
- `web` (Next.js frontend): Render Web Service
- `http-backend` (Express API): Render Web Service
- `ws-backend` (WebSocket server): Render Web Service
- `PostgreSQL`: Render free Postgres

## Important Free-Tier Notes
- Free services can sleep/spin down when idle.
- Cold starts can add delay on first request.
- Free quotas can change; verify current limits in provider pricing before go-live.

## Prerequisites
- GitHub repo connected to Render
- Render account
- One shared `JWT_SECRET` value for HTTP + WS backends

## Step 1: Database
1. Create a Postgres database in Render.
2. Copy the `Internal Database URL`.
3. Run migrations once using:
```bash
pnpm --dir packages/db exec prisma migrate deploy
pnpm --dir packages/db exec prisma generate
```

## Step 2: Deploy `http-backend`
- Root Directory: `apps/http-backend`
- Build Command: `pnpm --dir ../.. install --frozen-lockfile=false && pnpm run build`
- Start Command: `pnpm run start`
- Environment variables:
  - `NODE_ENV=production`
  - `PORT=10000` (or let Render inject `PORT`)
  - `DATABASE_URL=<render-postgres-url>`
  - `JWT_SECRET=<same-secret-used-everywhere>`
  - `JWT_EXPIRES_IN=7d`
  - `CORS_ORIGINS=https://<frontend-domain>`

Health check path: `/health` is recommended; if not configured, keep Render default port health checks.

## Step 3: Deploy `ws-backend`
- Root Directory: `apps/ws-backend`
- Build Command: `pnpm --dir ../.. install --frozen-lockfile=false && pnpm run build`
- Start Command: `pnpm run start`
- Environment variables:
  - `NODE_ENV=production`
  - `PORT=10000` (or let Render inject `PORT`)
  - `DATABASE_URL=<render-postgres-url>`
  - `JWT_SECRET=<same-secret-as-http-backend>`

Health check path: `/health`

## Step 4: Deploy `web` (frontend)
- Root Directory: `apps/excelidraw-frontend`
- Build Command: `pnpm --dir ../.. install --frozen-lockfile=false && pnpm run build`
- Start Command: `pnpm run start`
- Environment variables:
  - `NEXT_PUBLIC_HTTP_URL=https://<http-backend-domain>`
  - `NEXT_PUBLIC_WS_URL=wss://<ws-backend-domain>`
  - `NEXT_PUBLIC_ENABLE_LIVE_DEMO=false`

## Step 5: Final Wiring
1. Update HTTP backend `CORS_ORIGINS` with final frontend URL.
2. Redeploy HTTP service.
3. Open frontend and test signup/signin/room creation/realtime drawing.

## Step 6: Smoke Test Checklist
- `GET https://<http-backend-domain>/user` returns `401` without token.
- `POST /signup` and `POST /signin` work.
- Room creation works from dashboard.
- Two clients in same room receive realtime draw updates.
- WS health endpoint responds:
  - `GET https://<ws-backend-domain>/health` -> `{"ok":true}`

## Rollback Plan
- Keep previous successful deploy in Render.
- If latest deploy fails, roll back to previous deploy and revert env changes.

## Current Readiness Status
After local verification:
- `pnpm lint`: pass
- `pnpm test`: pass
- `pnpm build`: pass

Deployment compatibility fixes already applied:
- `PORT` env support added for HTTP/WS backends.
- WS service now exposes `/health`.
- Env example files updated for production-safe defaults.
