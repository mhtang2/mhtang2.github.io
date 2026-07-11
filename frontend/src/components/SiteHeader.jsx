import { cn } from '../utils/classNames'
import {
  heroHeader,
  heroHeaderHome,
  heroSubtitle,
  heroTitle,
  siteInner,
  socialRow,
} from '../styles/ui'
import SocialLinks from './SocialLinks'

export default function SiteHeader({ variant = 'page', title, subtitle, children }) {
  const isHome = variant === 'home'

  return (
    <header className={cn(siteInner, isHome ? heroHeaderHome : heroHeader)}>
      <h1 className={cn(isHome && heroTitle)}>{title}</h1>
      {subtitle && (
        <p className={cn(heroSubtitle, 'mb-4')}>
          {subtitle}
        </p>
      )}
      {children}
      {isHome && <SocialLinks className={socialRow} />}
    </header>
  )
}
