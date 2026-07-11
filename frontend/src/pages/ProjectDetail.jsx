import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import ProjectBody from '../components/ProjectBody'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import SiteWrapper from '../components/SiteWrapper'
import { getProjectBySlug } from '../data/projects'
import { mainCard, mainSection } from '../styles/ui'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    document.title = project?.pageTitle ?? 'Matthew Tang'
  }, [project?.pageTitle])

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <SiteWrapper>
      <SiteHeader title={project.title} subtitle={project.subtitle} />

      <div className={mainCard}>
        <section className={mainSection}>
          <ProjectBody slug={project.slug} />
          <div className="mt-8">
            <Button href="/#projects" primary inCard>
              Back to All Projects
            </Button>
          </div>
        </section>
      </div>

      <SiteFooter />
    </SiteWrapper>
  )
}
