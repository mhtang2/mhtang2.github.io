export default function SectionHeading({ children, centered = false }) {
  return (
    <header
      className={`section-heading mb-12 text-[2em] max-md:mb-0 max-md:text-[1.5em]${centered ? ' section-heading-centered' : ''}`}
    >
      <h2 className="m-0">{children}</h2>
    </header>
  )
}
