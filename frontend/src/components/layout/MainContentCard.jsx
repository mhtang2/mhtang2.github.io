import { mainCard, mainCardHome } from '../../styles/layout'

const variants = {
  home: mainCardHome,
  full: mainCard,
}

export default function MainContentCard({ variant = 'full', children }) {
  return <div className={variants[variant]}>{children}</div>
}
