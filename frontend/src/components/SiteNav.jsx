import { siteNav, siteNavItem, siteNavLink, siteNavList } from '../styles/nav'

const SECTIONS = [
  { id: 'intro', label: 'About', labelFull: 'About Me' },
  { id: 'projects', label: 'Projects', labelFull: 'Projects' },
  { id: 'experience', label: 'Experience', labelFull: 'Professional Experience' },
]

export default function SiteNav() {
  return (
    <nav className={siteNav} aria-label="Sections">
      <ul className={siteNavList}>
        {SECTIONS.map(({ id, label, labelFull }) => (
          <li key={id} className={siteNavItem}>
            <a href={`#${id}`} className={siteNavLink}>
              <span className="sm:hidden">{label}</span>
              <span className="hidden sm:inline">{labelFull}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
