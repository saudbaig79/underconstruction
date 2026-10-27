import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="Still Building, back to top">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </span>
        <span className="brand-copy">
          <span className="brand-title">STILL BUILDING</span>
          <span className="brand-subtitle">A WORK IN PROGRESS</span>
        </span>
      </a>

      <a className="top-status" href="#status">
        <span className="status-dot" aria-hidden="true" />
        <span>Opening soon</span>
        <span className="top-status-arrow" aria-hidden="true">
          <ArrowDownRight />
        </span>
      </a>
    </header>
  )
}

function BuildIllustration() {
  return (
    <figure className="build-figure">
      <div className="build-figure-frame">
        <Image
          src="/construction-workshop.png"
          alt="A miniature house taking shape on an architect’s drafting table"
          fill
          priority
          sizes="(max-width: 760px) 92vw, 44vw"
          className="build-image"
        />
        <div className="figure-kicker">
          <span className="figure-kicker-mark" aria-hidden="true" />
          <span>BUILD LOG / 001</span>
        </div>
        <div className="figure-note">
          <span>THE WORKSHOP</span>
          <strong>Good things take shape.</strong>
        </div>
      </div>
      <figcaption className="figure-caption">
        <span>DRAWING BOARD</span>
        <span className="figure-caption-line" aria-hidden="true" />
        <span>IN PROGRESS</span>
      </figcaption>
    </figure>
  )
}

function ProjectStatus() {
  return (
    <section className="status-section" id="status" aria-labelledby="status-title">
      <div className="status-heading">
        <p className="section-eyebrow">
          <span className="status-dot" aria-hidden="true" />
          CURRENT STATUS
        </p>
        <h2 id="status-title">Putting the final pieces in place.</h2>
      </div>

      <div className="status-details">
        <p>
          We&apos;re building something new with a little extra care. Thanks for your patience — we
          can&apos;t wait to share it with you.
        </p>
        <div className="status-detail-row">
          <span className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            In progress
          </span>
          <span className="status-note">More to come. Check back soon.</span>
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Thanks for stopping by.</p>
      <a href="#top">
        Back to the top
        <ArrowUpRight aria-hidden="true" />
      </a>
    </footer>
  )
}

export default function UnderConstructionPage() {
  return (
    <div className="construction-page" id="top">
      <SiteHeader />
      <main>
        <section className="hero-layout" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              <span className="status-dot" aria-hidden="true" />
              A LITTLE UPDATE FROM THE BUILD SITE
            </p>
            <h1 className="hero-title" id="page-title">
              <span>Under</span>
              <span className="hero-title-accent">
                construction<span className="hero-title-period">.</span>
              </span>
            </h1>
            <p className="hero-description">
              We&apos;re putting the finishing touches on something new. Check back soon — it&apos;ll be
              worth the wait.
            </p>
            <a className="primary-action" href="#status">
              <span>See what&apos;s happening</span>
              <span className="action-icon" aria-hidden="true">
                <ArrowDownRight />
              </span>
            </a>
          </div>

          <BuildIllustration />
        </section>

        <ProjectStatus />
      </main>
      <SiteFooter />
    </div>
  )
}
