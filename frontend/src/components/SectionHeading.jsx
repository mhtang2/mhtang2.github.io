export default function SectionHeading({ children, centered = false }) {
  return (
    <header
      className={`section-heading mb-10 max-md:mb-6${centered ? ' section-heading-centered' : ''}`}
    >
      <h2 className="m-0 text-2xl font-semibold tracking-tight max-md:text-xl">{children}</h2>
    </header>
  )
}
