import { profile } from '../../data/home'
import { spotlight, spotlightContent, spotlightImage, spotlightImageWrap } from '../../styles/ui'
import Button from '../Button'
import HomeSection from './HomeSection'

export default function AboutSection({ section }) {
  return (
    <HomeSection id={section.id} heading={section.heading}>
      <div className={spotlight}>
        <div className={`${spotlightContent} spotlight-content`}>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Button href={profile.resumeHref}>Resume</Button>
        </div>
        <span className={spotlightImageWrap}>
          <img src={profile.profileImage} alt={profile.name} className={spotlightImage} />
        </span>
      </div>
    </HomeSection>
  )
}
