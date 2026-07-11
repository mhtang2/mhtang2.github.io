import SocialLinks from './SocialLinks'
import { siteHeaderDetail, siteHeaderMeta, siteHeaderRole } from '../styles/ui'

export default function SiteHeader({ title, subtitle, showSocial = false }) {
  return (
    <header className="px-8 pt-20 pb-8 text-center max-md:px-4 max-md:pt-14 max-md:pb-6">
      <h1 className={showSocial ? 'mb-3 text-5xl font-bold tracking-tight max-md:text-4xl' : 'text-3xl font-semibold tracking-tight'}>
        {title}
      </h1>
      {subtitle && (
        <div className={siteHeaderMeta}>
          {typeof subtitle === 'string' ? (
            <p className={siteHeaderDetail}>{subtitle}</p>
          ) : (
            subtitle
          )}
        </div>
      )}
      {showSocial && (
        <ul className="flex list-none items-center justify-center gap-3 p-0">
          <SocialLinks />
        </ul>
      )}
    </header>
  )
}
