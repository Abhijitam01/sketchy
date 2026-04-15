/** Server-side / build default when `NEXT_PUBLIC_HTTP_URL` is unset. */
export const DEFAULT_PUBLIC_HTTP_URL = "http://127.0.0.1:3000/api/backend"
export const DEFAULT_PUBLIC_WS_URL = "ws://localhost:8080"

/** REST base: absolute Railway URL when NEXT_PUBLIC_HTTP_URL is set; falls back to same-origin proxy in dev. */
export function getPublicHttpUrl(): string {
  const v = process.env.NEXT_PUBLIC_HTTP_URL?.trim()
  if (v) return v
  if (typeof window !== "undefined") {
    return "/api/backend"
  }
  return DEFAULT_PUBLIC_HTTP_URL
}

export function getPublicWsUrl(): string {
  const v = process.env.NEXT_PUBLIC_WS_URL?.trim()
  return v || DEFAULT_PUBLIC_WS_URL
}
