export default function SiteWrapper({ children }) {
  return (
    <div className="min-h-screen">
      <div className="site-inner">{children}</div>
    </div>
  )
}
