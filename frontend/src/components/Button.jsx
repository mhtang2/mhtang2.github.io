import { Link } from 'react-router-dom'
import { cn } from '../utils/classNames'
import { btn, btnCard, btnOutline, btnPrimary } from '../styles/ui'

export default function Button({
  children,
  href,
  variant = 'outline',
  inCard = false,
  className,
  ...props
}) {
  const classes = cn(
    btn,
    variant === 'primary' ? btnPrimary : inCard ? btnCard : btnOutline,
    className,
  )

  if (href) {
    const isExternal =
      href.startsWith('http') || href.endsWith('.pdf') || href.startsWith('mailto:')

    if (!isExternal) {
      return (
        <Link to={href} className={classes} {...props}>
          {children}
        </Link>
      )
    }

    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
