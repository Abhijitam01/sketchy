/** Match `env.example`. Override with `NEXT_PUBLIC_*` in production. */
export const DEFAULT_PUBLIC_HTTP_URL = "http://localhost:3001"
export const DEFAULT_PUBLIC_WS_URL = "ws://localhost:8080"

export function getPublicHttpUrl(): string {
  const v = process.env.NEXT_PUBLIC_HTTP_URL?.trim()
  return v || DEFAULT_PUBLIC_HTTP_URL
}

export function getPublicWsUrl(): string {
  const v = process.env.NEXT_PUBLIC_WS_URL?.trim()
  return v || DEFAULT_PUBLIC_WS_URL
}
