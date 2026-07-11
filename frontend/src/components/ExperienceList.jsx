import { experience } from '../data/experience'
import {
  experienceList,
  experienceTimelineArrow,
  experienceTimelineDot,
  experienceTimelineItem,
  experienceTimelineMarker,
} from '../styles/experience'
import ExperienceItem from './ExperienceItem'

function FlowArrow() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3 fill-none stroke-current" aria-hidden="true">
      <path d="M6 10.5V3M6 3 3.5 5.5M6 3 8.5 5.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ExperienceList({ items = experience }) {
  return (
    <ul className={experienceList} aria-label="Career timeline, most recent first">
      {items.map((job, index) => (
        <li
          key={`${job.company}-${job.role}`}
          className={experienceTimelineItem}
          aria-label={`${job.company}, ${job.role}`}
        >
          <div className={experienceTimelineMarker}>
            {index > 0 && (
              <span className={experienceTimelineArrow}>
                <FlowArrow />
              </span>
            )}
            <span className={experienceTimelineDot} />
          </div>
          <ExperienceItem
            company={job.company}
            role={job.role}
            logo={job.logo}
            logoLayout={job.logoLayout}
          />
        </li>
      ))}
    </ul>
  )
}
