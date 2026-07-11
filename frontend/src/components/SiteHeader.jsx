import SocialLinks from './SocialLinks'

export default function SiteHeader({ title, subtitle, showSocial = false }) {
  return (
    <header className="px-8 pt-28 pb-16 text-center max-md:px-4 max-md:pt-16 max-md:pb-8">
      <h1 className={showSocial ? 'mb-1 text-[3.25em] leading-[1.2] max-md:text-[2.5em]' : ''}>
        {title}
      </h1>
      {subtitle && (
        <p className="mb-4 text-[1.25em] tracking-tight max-md:text-base max-md:tracking-normal">
          {subtitle}
        </p>
      )}
      {showSocial && (
        <ul className="mt-4 flex list-none items-center justify-center gap-3 p-0">
          <SocialLinks />
        </ul>
      )}
    </header>
  )
}
