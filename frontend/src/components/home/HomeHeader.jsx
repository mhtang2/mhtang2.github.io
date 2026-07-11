import { profile } from '../../data/home'
import { siteHeaderDetail, siteHeaderRole } from '../../styles/header'
import SiteHeader from '../SiteHeader'

export default function HomeHeader() {
  const { role, details } = profile.header

  return (
    <SiteHeader
      showSocial
      title={profile.name}
      subtitle={
        <>
          <p className={siteHeaderRole}>{role}</p>
          {details.map((detail) => (
            <p key={detail} className={siteHeaderDetail}>
              {detail}
            </p>
          ))}
        </>
      }
    />
  )
}
