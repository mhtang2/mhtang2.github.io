import { experience } from '../data/experience'
import { experienceList } from '../styles/experience'
import ExperienceItem from './ExperienceItem'

export default function ExperienceList({ items = experience }) {
  return (
    <ul className={experienceList}>
      {items.map((job) => (
        <ExperienceItem
          key={`${job.company}-${job.role}`}
          company={job.company}
          role={job.role}
          logo={job.logo}
          logoLayout={job.logoLayout}
        />
      ))}
    </ul>
  )
}
