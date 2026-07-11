import { Link } from 'react-router-dom'
import { btn, btnCard, btnOutline, btnPrimary } from '../styles/ui'

export default function Button({ children, href, primary = false, inCard = false, className = '' }) {
  const style = primary ? btnPrimary : inCard ? btnCard : btnOutline
  const classes = `${btn} ${style} ${className}`.trim()

  if (!href) {
    return (
      <button type="button" className={classes}>
        {children}
      </button>
    )
  }

  const isExternal = href.startsWith('http') || href.endsWith('.pdf')
  const isHash = href.includes('#')

  if (isExternal || isHash) {
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  )
}
