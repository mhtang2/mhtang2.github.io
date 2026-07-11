import { useEffect } from 'react'

/** Remove preload class after mount to trigger hero fade-in. */
export function usePreload() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      document.body.classList.remove('is-preload')
    }, 100)
    return () => window.clearTimeout(timer)
  }, [])
}
