import { PdfLink } from '../../components/projects/shared'

export default function R3() {
  return (
    <>
      <h2>Overview</h2>
      <p>
        This hackathon was a 2 day long event hosted by Nextdoor during my Summer internship. The purpose was to demo technology which I thought was novel, interesting, and relevant to our product. There currently exists a feature which uses LLMs to detect aggressive or offensive comments and suggest changes to the user before they post the comment. My idea was to have something similar, but for visual features like images or videos instead.
      </p>
      <p>This project utilizes YOLO and DALLE inpainting to demonstrate that such a project is viable.</p>
      <PdfLink href="/resources/R3_hack_slides.pdf">View slides (PDF)</PdfLink>
    </>
  )
}
