import { useEffect } from 'react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import SiteNav from '../components/SiteNav'
import SiteWrapper from '../components/SiteWrapper'
import { experience } from '../data/experience'
import { projects } from '../data/projects'
import {
  experienceLogo,
  featureGrid,
  featureImage,
  featureItem,
  mainCard,
  mainSection,
  mainSectionSpecial,
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

      <SiteNav />

      <div className={mainCard}>
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

        <section id="projects" className={mainSectionSpecial}>
          <SectionHeading centered>Projects</SectionHeading>
          <ul className={featureGrid}>
            {projects.map((project) => (
              <li key={project.slug} className={featureItem}>
                <span className={featureImage}>
                  <img
                    src={project.image}
                    alt={project.cardTitle}
                    style={project.imageWidth ? { width: project.imageWidth } : undefined}
                  />
                </span>
                <h3>{project.cardTitle}</h3>
                <p>{project.blurb}</p>
                <Button href={`/projects/${project.slug}`} inCard>
                  Learn More
                </Button>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className={mainSectionSpecial}>
          <SectionHeading centered>Professional Experience</SectionHeading>
          <ul className={featureGrid}>
            {experience.map((job) => (
              <li key={`${job.company}-${job.dates}`} className={featureItem}>
                <span className={featureImage}>
                  <img src={job.logo} alt={job.company} className={experienceLogo} />
                </span>
                <h2 className="text-[1.5em]">{job.company}</h2>
                <span className="block">{job.role}</span>
                <p>{job.dates}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <SiteFooter />
    </SiteWrapper>
  )
}
