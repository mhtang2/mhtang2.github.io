/** Experience list layout tokens. */

export const LOGO_LAYOUTS = {
  ICON: 'icon',
  WORDMARK: 'wordmark',
  BRAND: 'brand',
}

export const experienceList =
  'experience-timeline relative m-0 mx-auto max-w-xl list-none space-y-2 p-0'

export const experienceTimelineItem = 'relative flex items-stretch gap-3'

export const experienceTimelineMarker =
  'relative flex w-6 shrink-0 flex-col items-center pt-2.5'

export const experienceTimelineDot =
  'h-2.5 w-2.5 shrink-0 rounded-full bg-white ring-2 ring-[#8cc9f0]'

export const experienceTimelineArrow =
  'mb-1 text-[#c4c4c8]'

export const experienceRow =
  'flex min-w-0 flex-1 items-center gap-2.5 rounded-lg border border-[#e4e4e7] bg-white px-3 py-2.5 text-left'

export const experienceLogoIcon = 'h-8 w-8 shrink-0 object-contain'

export const experienceLogoWordmark = 'h-7 w-[6.5rem] shrink-0 object-contain object-left'

export const experienceLogoBrand =
  'flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#5f4d93] via-[#6b8fd4] to-[#e37682] p-1'

export const experienceLogoBrandImage = 'h-full w-full object-contain'

export const experienceText = 'mb-0 min-w-0 text-sm leading-snug'

export const experienceCompany = 'font-semibold text-[#18181b]'

export const experienceRole = 'text-[#71717a]'

export function getExperienceLogoClass(logoLayout = LOGO_LAYOUTS.ICON) {
  if (logoLayout === LOGO_LAYOUTS.WORDMARK) return experienceLogoWordmark
  return experienceLogoIcon
}

export function isBrandLogo(logoLayout = LOGO_LAYOUTS.ICON) {
  return logoLayout === LOGO_LAYOUTS.BRAND
}
