const SECTIONS = [
  { id: 'intro', label: 'About', labelFull: 'About Me' },
  { id: 'projects', label: 'Projects', labelFull: 'Projects' },
  { id: 'experience', label: 'Experience', labelFull: 'Professional Experience' },
]

export default function SiteNav() {
  return (
    <nav
      className="sticky top-0 z-20 border-b border-[#ebebeb] bg-white/90 backdrop-blur-md"
      aria-label="Sections"
    >
      <ul className="m-0 flex list-none items-center justify-center gap-0.5 px-2 py-1.5 sm:gap-1 sm:px-4">
        {SECTIONS.map(({ id, label, labelFull }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="site-nav-link inline-flex h-9 items-center rounded-md px-3 text-[13px] font-medium text-[#525252] no-underline transition-colors hover:bg-[#f4f4f5] hover:text-[#18181b] sm:h-10 sm:px-4 sm:text-sm"
            >
              <span className="sm:hidden">{label}</span>
              <span className="hidden sm:inline">{labelFull}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
