import { cn } from '../utils/classNames'
import { sectionHeading, sectionHeadingCentered } from '../styles/ui'

export default function SectionHeading({ children, centered = false, className }) {
  return (
    <header className={cn(sectionHeading, centered && sectionHeadingCentered, className)}>
      <h2 className="m-0">{children}</h2>
    </header>
  )
}
