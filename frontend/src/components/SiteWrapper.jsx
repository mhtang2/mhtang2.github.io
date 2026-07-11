import { siteInner, siteWrapper } from '../styles/ui'

export default function SiteWrapper({ children }) {
  return <div className={siteWrapper}>{children}</div>
}

export function SiteInner({ children, className }) {
  return <div className={`${siteInner} ${className ?? ''}`.trim()}>{children}</div>
}
