import { homeSections } from '../data/home'
import { siteNav, siteNavItem, siteNavLink, siteNavList } from '../styles/nav'

export default function SiteNav() {
  return (
    <nav className={siteNav} aria-label="Sections">
      <ul className={siteNavList}>
        {homeSections.map(({ id, navLabel, navLabelFull }) => (
          <li key={id} className={siteNavItem}>
            <a href={`#${id}`} className={siteNavLink}>
              <span className="sm:hidden">{navLabel}</span>
              <span className="hidden sm:inline">{navLabelFull}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
