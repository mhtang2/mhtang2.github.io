import { backLinkCard, backLinkHeader } from '../styles/backLink'

export default function BackLink({ href, children, className = '', variant = 'card' }) {
  const style = variant === 'header' ? backLinkHeader : backLinkCard

  return (
    <a href={href} className={`${style} ${className}`.trim()}>
      <span aria-hidden="true">←</span>
      {children}
    </a>
  )
}
