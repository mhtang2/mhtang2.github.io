import ProjectCardGrid from '../components/ProjectCardGrid'
import SiteFooter from '../components/SiteFooter'
import SiteNav from '../components/SiteNav'
import SiteWrapper from '../components/SiteWrapper'
import AboutSection from '../components/home/AboutSection'
import HomeHeader from '../components/home/HomeHeader'
import HomeSection from '../components/home/HomeSection'
import MainContentCard from '../components/layout/MainContentCard'
import ExperienceList from '../components/ExperienceList'
import { experience } from '../data/experience'
import { homeSections, profile } from '../data/home'
import { projects } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const [introSection, projectsSection, experienceSection] = homeSections

export default function Home() {
  useDocumentTitle(profile.name)

  return (
    <SiteWrapper>
      <HomeHeader />

      <MainContentCard variant="home">
        <SiteNav />
        <AboutSection section={introSection} />
        <HomeSection
          id={projectsSection.id}
          heading={projectsSection.heading}
          centered={projectsSection.centered}
        >
          <ProjectCardGrid projects={projects} />
        </HomeSection>
        <HomeSection
          id={experienceSection.id}
          heading={experienceSection.heading}
          centered={experienceSection.centered}
        >
          <ExperienceList items={experience} />
        </HomeSection>
      </MainContentCard>

      <SiteFooter />
    </SiteWrapper>
  )
}
