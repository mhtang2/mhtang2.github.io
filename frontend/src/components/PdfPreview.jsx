import { useState } from 'react'
import {
  pdfPreview,
  pdfPreviewCaption,
  pdfPreviewFallback,
  pdfPreviewFrame,
  pdfPreviewImage,
  pdfPreviewPlaceholder,
} from '../styles/pdfPreview'
import { pdfPreviewSrc } from '../utils/pdfPreviewPath'

export default function PdfPreview({ href, children, maxWidth = 720, scale = 1 }) {
  const [status, setStatus] = useState('loading')
  const previewWidth = maxWidth * scale
  const previewSrc = pdfPreviewSrc(href)

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
      style={{ width: previewWidth, maxWidth: '100%' }}
      aria-label={typeof children === 'string' ? children : 'Open PDF'}
    >
      <div className={pdfPreviewFrame}>
        {status === 'loading' ? (
          <div className={pdfPreviewPlaceholder}>Loading preview…</div>
        ) : null}
        <img
          src={previewSrc}
          alt=""
          className={pdfPreviewImage}
          style={{ display: status === 'ready' ? 'block' : 'none' }}
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('error')}
        />
      </div>
      {children ? <p className={pdfPreviewCaption}>{children}</p> : null}
    </a>
  )
}
