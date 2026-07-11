import Button from '../components/Button'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import SiteWrapper, { SiteInner } from '../components/SiteWrapper'
import { usePageTitle } from '../hooks/usePageTitle'
import { usePreload } from '../hooks/usePreload'
import { mainCard, mainSection } from '../styles/ui'

export default function ElementTemplates() {
  usePageTitle('Elements')
  usePreload()

  return (
    <SiteWrapper>
      <SiteInner>
        <SiteHeader title="Elements" subtitle="UI component reference" />

        <div className={mainCard}>
          <section className={mainSection}>
            <h2>Text</h2>
            <p>
              This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
              This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u> and this is code: <code>for (;;) {'{ ... }'}</code>. Finally, <a href="#">this is a link</a>.
            </p>
            <hr className="my-8 border-[#dddddd]" />
            <h2>Headings</h2>
            <h3>Heading Level 3</h3>
            <h4>Heading Level 4</h4>
            <blockquote className="my-6 border-l-4 border-[#dddddd] pl-6 italic">
              Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod.
            </blockquote>
            <h2>Buttons</h2>
            <div className="mb-8 flex flex-wrap gap-4">
              <Button inCard>Default</Button>
              <Button variant="primary" inCard>Primary</Button>
            </div>
            <Button href="/" inCard>Back Home</Button>
          </section>
        </div>
      </SiteInner>

      <SiteFooter />
    </SiteWrapper>
  )
}
