/** Strip trailing slash; React Router wants `/sub`, not `/sub/`. Returns undefined at root. */
export function getRouterBasename() {
  const base = import.meta.env.BASE_URL ?? '/'
  if (base === '/') return undefined
  return base.replace(/\/$/, '')
}
