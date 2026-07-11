import SectionHeading from '../SectionHeading'
import { mainSection } from '../../styles/layout'

export default function HomeSection({ id, heading, centered = false, children }) {
  return (
    <section id={id} className={mainSection}>
      <SectionHeading centered={centered}>{heading}</SectionHeading>
      {children}
    </section>
  )
}
