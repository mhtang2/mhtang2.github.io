import { Link } from 'react-router-dom'
import {
  IMAGE_LAYOUTS,
  getProjectCardLayout,
  projectCardBlurb,
  projectCardBody,
  projectCardLink,
  projectCardTitle,
} from '../styles/projectCard'

export default function ProjectCard({
  title,
  blurb,
  image,
  href,
  imageLayout = IMAGE_LAYOUTS.INSET,
}) {
  const layout = getProjectCardLayout(imageLayout)

  return (
    <Link to={href} className={`${projectCardLink} ${layout.card}`}>
      <div className={layout.image}>
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className={`${projectCardBody} ${layout.body}`}>
        <h3 className={projectCardTitle}>{title}</h3>
        <p className={projectCardBlurb}>{blurb}</p>
      </div>
    </Link>
  )
}
