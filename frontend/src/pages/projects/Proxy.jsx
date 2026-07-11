import PdfPreview from '../../components/PdfPreview'
import { ProjectVideo } from '../../components/projects/shared'

export default function Proxy() {
  return (
    <>
      <h2>Background</h2>
      <p>
        This is a semester project for Honors System Programming. The project was to write a proxy server in <strong>C</strong>. Our proxy server can redirect network traffic using the builtin networking code of the C standard library.{' '}
        <a href="https://github.com/mhtang2/296Proxy" target="_blank" rel="noreferrer">[Link to repo]</a>
      </p>
      <p>Features</p>
      <ul>
        <li>Handles multiple clients using multithreading</li>
        <li>Handles secure connections (HTTPS) using OpenSSL</li>
        <li>Whitelisting and blacklisting domains</li>
      </ul>
      <h2>Demo</h2>
      <ProjectVideo
        src="https://www.youtube.com/embed/VgEg_6u5XuA?si=-WRHO87gtuhRMGF0"
        className="mb-8 aspect-video w-full max-w-4xl"
      />
      <h2>Presentation</h2>
      <PdfPreview href="/resources/proxy_slides.pdf" scale={0.8}>View presentation (PDF)</PdfPreview>
    </>
  )
}
