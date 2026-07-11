import { PdfLink } from '../../components/projects/shared'

export default function TransferLearning() {
  return (
    <>
      <h2>Overview</h2>
      <p>
        This research project was done for a graduate course I took on Transfer Learning. While transfer learning is commonly thought of as applying models across domains, it can equivalently be thought of as looking at how models handle shifts in the distribution of their input dataset. In our project we seek to quantify how image data augmentations affect the distribution, and consequently how that distribution shift affects the model performance.
      </p>
      <p>
        While it is know that dataset augmentation will benefit model performance, we are interested in why that is the case. Intuitively it should help model generalization, but we seek to find a more concrete explanation by analyzing the problem through the lens of distribution shift.
      </p>
      <p>The poster and final paper are linked below.</p>
      <h2>Poster</h2>
      <PdfLink href="/resources/transfer_learning_poster.pdf">View poster (PDF)</PdfLink>
      <h2>Final paper</h2>
      <PdfLink href="/resources/transfer_learning_writeup.pdf">View final paper (PDF)</PdfLink>
    </>
  )
}
