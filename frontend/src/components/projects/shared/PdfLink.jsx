export default function PdfLink({ href, children }) {
  return (
    <p>
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </p>
  )
}
