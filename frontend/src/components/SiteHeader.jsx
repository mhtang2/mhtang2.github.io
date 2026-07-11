import SocialLinks from './SocialLinks'

export default function SiteHeader({ title, subtitle, showSocial = false }) {
  return (
    <header className="px-8 pt-28 pb-16 text-center max-md:px-4 max-md:pt-16 max-md:pb-8">
      <h1 className={showSocial ? 'mb-2 text-5xl font-bold tracking-tight max-md:text-4xl' : 'text-3xl font-semibold tracking-tight'}>
        {title}
      </h1>
      {subtitle && (
        <p className="mb-4 text-base font-normal text-white/75 max-md:text-sm">
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
