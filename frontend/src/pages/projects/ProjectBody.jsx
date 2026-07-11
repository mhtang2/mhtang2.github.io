import { projectContentBySlug } from './index'

export default function ProjectBody({ slug }) {
  const Content = projectContentBySlug[slug]

  return (
    <div className="content-prose">
      {Content ? <Content /> : <p>Project not found.</p>}
    </div>
  )
}
