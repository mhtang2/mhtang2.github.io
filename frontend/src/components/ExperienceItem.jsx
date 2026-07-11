import {
  experienceCompany,
  experienceLogoBrand,
  experienceLogoBrandImage,
  experienceRole,
  experienceRow,
  experienceText,
  getExperienceLogoClass,
  isBrandLogo,
} from '../styles/experience'

export default function ExperienceItem({ company, role, logo, logoLayout }) {
  const brandLogo = isBrandLogo(logoLayout)

  return (
    <div className={`experience-row ${experienceRow}`}>
      {brandLogo ? (
        <div className={experienceLogoBrand}>
          <img src={logo} alt="" className={experienceLogoBrandImage} />
        </div>
      ) : (
        <img src={logo} alt="" className={getExperienceLogoClass(logoLayout)} />
      )}
      <p className={experienceText}>
        <span className={experienceCompany}>{company}</span>
        <span className={experienceRole}> · {role}</span>
      </p>
    </div>
  )
}
