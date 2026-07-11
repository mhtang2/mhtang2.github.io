import { Navigate, useParams } from 'react-router-dom'
import BackLink from '../components/BackLink'
import { backLinkFloat } from '../styles/backLink'
import ProjectBody from './projects/ProjectBody'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import SiteWrapper from '../components/SiteWrapper'
import MainContentCard from '../components/layout/MainContentCard'
import { getProjectBySlug, projectPageTitle } from '../data/projects'
import { profile } from '../data/home'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { mainSection } from '../styles/layout'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useDocumentTitle(project ? projectPageTitle(project) : profile.name)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <SiteWrapper>
      <div className="relative">
        <div className={backLinkFloat}>
          <BackLink href="/#projects" variant="header">
            Projects
          </BackLink>
        </div>

        <SiteHeader title={project.title} subtitle={project.subtitle} />

        <MainContentCard>
          <section className={mainSection}>
            <ProjectBody slug={project.slug} />
            <BackLink href="/#projects" className="mt-8">
              Projects
            </BackLink>
          </section>
        </MainContentCard>

        <SiteFooter />
      </div>
    </SiteWrapper>
  )
}
