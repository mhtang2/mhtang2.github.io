import { videoEmbed } from '../../../styles/ui'

export default function ProjectVideo({ src, className }) {
  return (
    <iframe
      src={src}
      title="Video"
      className={className ?? videoEmbed}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
