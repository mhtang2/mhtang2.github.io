import { navBar, navLink, navList } from '../styles/ui'

const SECTIONS = [
  { id: 'intro', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Professional Experience' },
]

export default function SiteNav() {
  return (
    <nav className={navBar} aria-label="Sections">
      <ul className={navList}>
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={navLink}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
