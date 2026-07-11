import {
  experienceCompany,
  experienceLogoBrand,
  experienceLogoBrandImage,
  experienceRole,
  experienceRow,
  getExperienceLogoClass,
  isBrandLogo,
} from '../styles/experience'

export default function ExperienceItem({ company, role, logo, logoLayout }) {
  const brandLogo = isBrandLogo(logoLayout)

  return (
    <li className={`experience-row ${experienceRow}`}>
      {brandLogo ? (
        <div className={experienceLogoBrand}>
          <img src={logo} alt={company} className={experienceLogoBrandImage} />
        </div>
      ) : (
        <img src={logo} alt={company} className={getExperienceLogoClass(logoLayout)} />
      )}
      <div>
        <h2 className={experienceCompany}>{company}</h2>
        <p className={`${experienceRole} mb-0`}>{role}</p>
      </div>
    </li>
  )
}
