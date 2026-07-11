import Button from '../components/Button'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import SiteWrapper, { SiteInner } from '../components/SiteWrapper'
import { usePageTitle } from '../hooks/usePageTitle'
import { usePreload } from '../hooks/usePreload'
import { mainCard, mainSection } from '../styles/ui'

export default function Generic() {
  usePageTitle('Generic')
  usePreload()

  return (
    <SiteWrapper>
      <SiteInner>
        <SiteHeader title="Generic" subtitle="Sample content page" />

        <div className={mainCard}>
          <section className={mainSection}>
            <img src="/images/pic04.jpg" alt="" className="mb-8 w-full rounded" />
            <h2>Magna feugiat lorem</h2>
            <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit.
            </p>
            <p>
              Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Consequat leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit enim turpis lorem ipsum dolor sit amet feugiat.
            </p>
            <Button href="/" inCard>Back Home</Button>
          </section>
        </div>
      </SiteInner>

      <SiteFooter />
    </SiteWrapper>
  )
}
