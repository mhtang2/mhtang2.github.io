import { useEffect, useRef, useState } from 'react'
import {
  pdfPreview,
  pdfPreviewCaption,
  pdfPreviewFallback,
  pdfPreviewFrame,
  pdfPreviewImage,
  pdfPreviewPlaceholder,
} from '../styles/pdfPreview'
import { renderPdfFirstPage } from '../utils/renderPdfFirstPage'

export default function PdfPreview({ href, children, maxWidth = 720, scale = 1 }) {
  const [status, setStatus] = useState('loading')
  const [preview, setPreview] = useState(null)
  const renderIdRef = useRef(0)
  const renderWidth = maxWidth * scale

  useEffect(() => {
    const renderId = ++renderIdRef.current
    setStatus('loading')
    setPreview(null)

    renderPdfFirstPage(href, { maxWidth: renderWidth })
      .then((result) => {
        if (renderId !== renderIdRef.current) return
        setPreview(result)
        setStatus('ready')
      })
      .catch(() => {
        if (renderId !== renderIdRef.current) return
        setStatus('error')
      })
  }, [href, renderWidth])

  if (status === 'error') {
    return (
      <p className={pdfPreviewFallback}>
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      </p>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={pdfPreview}
      style={{ width: renderWidth, maxWidth: '100%' }}
      aria-label={typeof children === 'string' ? children : 'Open PDF'}
    >
      <div className={pdfPreviewFrame}>
        {status === 'loading' ? (
          <div className={pdfPreviewPlaceholder}>Loading preview…</div>
        ) : null}
        {preview ? (
          <img
            src={preview.src}
            alt=""
            className={pdfPreviewImage}
            width={preview.width}
            height={preview.height}
            style={{ display: status === 'ready' ? 'block' : 'none' }}
          />
        ) : null}
      </div>
      {children ? <p className={pdfPreviewCaption}>{children}</p> : null}
    </a>
  )
}
