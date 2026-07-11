import { useEffect } from 'react'
import Button from '../components/Button'
import ProjectCardGrid from '../components/ProjectCardGrid'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import SiteNav from '../components/SiteNav'
import SiteWrapper from '../components/SiteWrapper'
import ExperienceList from '../components/ExperienceList'
import { projects } from '../data/projects'
import {
  mainSection,
  siteHeaderDetail,
  siteHeaderRole,
  spotlight,
  spotlightContent,
  spotlightImage,
  spotlightImageWrap,
} from '../styles/ui'

export default function Home() {
  useEffect(() => {
    document.title = 'Matthew Tang'
  }, [])

  return (
    <SiteWrapper>
      <SiteHeader
        showSocial
        title="Matthew Tang"
        subtitle={
          <>
            <p className={siteHeaderRole}>Agent SWE @ Decagon</p>
            <p className={siteHeaderDetail}>UIUC CS &apos;24</p>
            <p className={siteHeaderDetail}>Interested in deep learning theory and applications</p>
          </>
        }
      />

      <div className="card-surface overflow-hidden rounded-t-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        <SiteNav />

        <div>
          <section id="intro" className={mainSection}>
            <div className={spotlight}>
              <div className={`${spotlightContent} spotlight-content`}>
                <SectionHeading>About Me</SectionHeading>
                <p>
                  Hi! I&apos;m Matthew. I graduated from the University of Illinois at Urbana-Champaign in 2024 with my Bachelors and Masters in Computer Science.
                  I&apos;m currently an Agent SWE at Decagon, where I build CX agents. Before that, I founded Sublingual AI, which was backed by Y Combinator. We pivoted a bunch and built some really cool stuff along the way.
                  Earlier, I was a Machine Learning Engineer at TikTok on the social recommendation team, working on friend recommendation and social content recommendation.
                </p>
                <Button href="/resources/Matthew Tang Resume.pdf">Resume</Button>
              </div>
              <span className={spotlightImageWrap}>
                <img src="/images/profile2.jpg" alt="Matthew Tang" className={spotlightImage} />
              </span>
            </div>
          </section>

          <section id="projects" className={mainSection}>
            <SectionHeading centered>Some Cool Projects</SectionHeading>
            <ProjectCardGrid projects={projects} />
          </section>

          <section id="experience" className={mainSection}>
            <SectionHeading centered>Professional Experience</SectionHeading>
            <ExperienceList />
          </section>
        </div>
      </div>

      <SiteFooter />
    </SiteWrapper>
  )
}
