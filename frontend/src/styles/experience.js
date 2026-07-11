/** Experience list layout tokens. */

export const LOGO_LAYOUTS = {
  ICON: 'icon',
  WORDMARK: 'wordmark',
  BRAND: 'brand',
}

export const experienceList =
  'm-0 mx-auto flex max-w-xl list-none flex-col gap-3 p-0'

export const experienceRow =
  'flex items-center gap-4 rounded-xl border border-[#e4e4e7] bg-white px-5 py-4 text-left'

export const experienceLogoIcon = 'h-10 w-10 shrink-0 object-contain'

export const experienceLogoWordmark = 'h-8 w-[7.5rem] shrink-0 object-contain object-left'

export const experienceLogoBrand =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#5f4d93] via-[#6b8fd4] to-[#e37682] p-1.5'

export const experienceLogoBrandImage = 'h-full w-full object-contain'

export const experienceCompany = 'text-base font-semibold text-[#18181b]'

export const experienceRole = 'text-sm text-[#525252]'

export function getExperienceLogoClass(logoLayout = LOGO_LAYOUTS.ICON) {
  if (logoLayout === LOGO_LAYOUTS.WORDMARK) return experienceLogoWordmark
  return experienceLogoIcon
}

export function isBrandLogo(logoLayout = LOGO_LAYOUTS.ICON) {
  return logoLayout === LOGO_LAYOUTS.BRAND
}
