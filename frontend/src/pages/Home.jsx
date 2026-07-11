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
            MLE @ TikTok | UIUC 2024 | Interested in Deep Learning Theory and Applications
            <br />
            mhtang2@illinois.edu
          </>
        }
      />

      <div className="card-surface overflow-hidden rounded-t-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        <SiteNav />

        <div>
          <section id="intro" className={mainSection}>
            <div className={spotlight}>
              <div className={spotlightContent}>
                <SectionHeading>About Me</SectionHeading>
                <p>
                  Hi! I&apos;m Matthew. I&apos;m a Machine Learning Engineer on TikTok&apos;s social recommendation team.
                  I work on social network building, which includes friend recommendation and social content recommendation.
                  I graduated in 2024 from the University of Illinois at Urbana-Champaign with my Bachelors and Masters degrees in Computer Science.
                  Here are some really cool projects that I have been working on:
                </p>
                <Button href="/resources/Matthew Tang Resume.pdf">Resume</Button>
              </div>
              <span className={spotlightImageWrap}>
                <img src="/images/profile2.jpg" alt="Matthew Tang" className={spotlightImage} />
              </span>
            </div>
          </section>

          <section id="projects" className={mainSection}>
            <SectionHeading centered>Projects</SectionHeading>
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
