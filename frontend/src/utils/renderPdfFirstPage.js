export async function renderPdfFirstPage(href, { maxWidth = 720 } = {}) {
  const { pdfjs } = await import('./pdfjs')
  const loadingTask = pdfjs.getDocument(href)
  const pdf = await loadingTask.promise

  try {
    const page = await pdf.getPage(1)
    const baseViewport = page.getViewport({ scale: 1 })
    const pixelRatio = window.devicePixelRatio || 1
    const scale = (maxWidth * pixelRatio) / baseViewport.width
    const viewport = page.getViewport({ scale })

    const offscreen = document.createElement('canvas')
    offscreen.width = viewport.width
    offscreen.height = viewport.height

    const context = offscreen.getContext('2d')
    if (!context) {
      throw new Error('Canvas context unavailable')
    }

    const renderTask = page.render({ canvas: offscreen, canvasContext: context, viewport })
    await renderTask.promise

    return {
      src: offscreen.toDataURL('image/jpeg', 0.92),
      width: viewport.width / pixelRatio,
      height: viewport.height / pixelRatio,
    }
  } finally {
    pdf.destroy()
  }
}
