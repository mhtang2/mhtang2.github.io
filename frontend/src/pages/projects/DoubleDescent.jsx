import { PdfLink } from '../../components/projects/shared'

export default function DoubleDescent() {
  return (
    <>
      <h2>Background:</h2>
      <p>
        My final project was to find an open topic in Deep Learning theory literature, and attempt to find a solution.
        Our group chose the the topic of providing a theoretical backing to the phenomenon of double descent.
        There is not a lot of existing strong literature on why deep networks work so well in an overparameterized setting.
        We read the paper of Li et al which attempts to bound an overparameterized shallow network (more nodes than datapoints).
        Among other restrictions like fixed random first layer, the class of networks analyzed do not have biases.
        In our research, we attempt to adjust their proof to account for networks with biases, thus allowing them to represent a larger class of fuctions.
      </p>
      <h2>Overview</h2>
      <PdfLink href="/resources/dlt_poster.pdf">View poster (PDF)</PdfLink>
    </>
  )
}
