/** Project card layout tokens and image display variants. */

export const IMAGE_LAYOUTS = {
  INSET: 'inset',
  FRAMED: 'framed',
  FULL: 'full',
}

export const projectCardGrid =
  'm-0 grid list-none grid-cols-1 gap-7 p-0 md:grid-cols-2 lg:grid-cols-3'

export const projectCardItem = 'flex'

export const projectCardLink =
  'project-card group flex w-full flex-col rounded-xl border border-[#e4e4e7] bg-white text-left no-underline transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#d4d4d8] hover:shadow-[0_10px_28px_rgba(0,0,0,0.09)] active:translate-y-0 active:shadow-[0_4px_14px_rgba(0,0,0,0.06)]'

export const projectCardImageBase = 'aspect-[3/2] w-full overflow-hidden bg-[#f4f4f5]'

export const projectCardBody = 'flex flex-1 flex-col'

export const projectCardTitle = 'mb-2 text-base font-semibold leading-snug text-[#18181b]'

export const projectCardBlurb = 'flex-1 text-sm leading-relaxed text-[#71717a]'

const imageLayoutVariants = {
  [IMAGE_LAYOUTS.INSET]: {
    card: 'gap-5 p-5',
    image: `${projectCardImageBase} rounded-lg`,
    body: '',
  },
  [IMAGE_LAYOUTS.FRAMED]: {
    card: 'gap-5 p-5',
    image: `${projectCardImageBase} rounded-lg ring-1 ring-[#ebebeb]`,
    body: '',
  },
  [IMAGE_LAYOUTS.FULL]: {
    card: 'gap-0 overflow-hidden p-0',
    image: projectCardImageBase,
    body: 'p-5',
  },
}

export function getProjectCardLayout(imageLayout = IMAGE_LAYOUTS.INSET) {
  return imageLayoutVariants[imageLayout] ?? imageLayoutVariants[IMAGE_LAYOUTS.INSET]
}
