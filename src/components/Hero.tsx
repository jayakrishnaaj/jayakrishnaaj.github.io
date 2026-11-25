import { ArrowDown, ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { contact, hero, site } from '../content/portfolio'
import { isPlaceholder } from '../lib/placeholder'
import { ExtLink, GitHubIcon, LinkedInIcon, Text } from './ui'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92svh] items-center overflow-hidden pt-16">
      {/* soft background glow + grid */}
      <div aria-hidden="true" className="hero-bg pointer-events-none absolute inset-0" />

      <div className="container relative">
        <div className="max-w-3xl">
          <p className="hero-in flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              {site.location}
            </span>
            {site.availability && !isPlaceholder(site.availability) && (
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {site.availability}
              </span>
            )}
          </p>

          <h1 className="hero-in mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl" style={{ animationDelay: '80ms' }}>
            <span className="block text-2xl font-normal text-muted sm:text-3xl">{hero.greeting}</span>
            {site.name}
          </h1>

          <p className="hero-in mt-5 font-display text-xl text-accent sm:text-2xl" style={{ animationDelay: '160ms' }}>
            {site.role}
          </p>

          <p className="hero-in mt-6 max-w-2xl text-lg leading-relaxed text-muted" style={{ animationDelay: '240ms' }}>
            <Text>{hero.intro}</Text>
          </p>

          <div className="hero-in mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: '320ms' }}>
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail className="h-4 w-4" aria-hidden="true" /> Contact Me
            </a>
            <ExtLink href={hero.cvUrl} className="btn-ghost" hint="CV link">
              <Download className="h-4 w-4" aria-hidden="true" /> Download CV
            </ExtLink>
            <div className="ml-1 flex items-center gap-1">
              <ExtLink href={contact.socials.github} className="icon-btn" hint="GitHub">
                <GitHubIcon />
                <span className="sr-only">GitHub</span>
              </ExtLink>
              <ExtLink href={contact.socials.linkedin} className="icon-btn" hint="LinkedIn">
                <LinkedInIcon />
                <span className="sr-only">LinkedIn</span>
              </ExtLink>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-muted transition-colors hover:text-fg sm:block"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-5 w-5 animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  )
}
