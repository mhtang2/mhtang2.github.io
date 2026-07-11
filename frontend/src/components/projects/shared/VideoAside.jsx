export default function VideoAside({ children, video }) {
  return (
    <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start">
      <div className="flex-1">{children}</div>
      {video}
    </div>
  )
}
