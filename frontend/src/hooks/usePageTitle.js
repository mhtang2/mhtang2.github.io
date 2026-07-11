import { useEffect } from 'react'

/** Set document title per route. */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}
