import { projectCardTitle } from '../data/projects'
import { projectCardGrid, projectCardItem } from '../styles/projectCard'
import ProjectCard from './ProjectCard'

export default function ProjectCardGrid({ projects }) {
  return (
    <ul className={projectCardGrid}>
      {projects.map((project) => (
        <li key={project.slug} className={projectCardItem}>
          <ProjectCard
            title={projectCardTitle(project)}
            blurb={project.blurb}
            image={project.image}
            href={`/projects/${project.slug}`}
            imageLayout={project.imageLayout}
          />
        </li>
      ))}
    </ul>
  )
}
