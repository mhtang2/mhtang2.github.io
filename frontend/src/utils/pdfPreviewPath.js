/** Map a PDF href to its static first-page preview image. */
export function pdfPreviewSrc(href) {
  const filename = href.split('/').pop() ?? ''
  const baseName = filename.replace(/\.pdf$/i, '')
  return `/images/pdf-previews/${baseName}.png`
}
