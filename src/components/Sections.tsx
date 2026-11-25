import { Award, ArrowUpRight, BookOpen, Briefcase, ExternalLink, GraduationCap, Mail } from 'lucide-react'
import {
  about,
  certifications,
  contact,
  education,
  experience,
  projects,
  publications,
  site,
  skills,
  type TimelineItem,
} from '../content/portfolio'
import { ExtLink, GitHubIcon, LinkedInIcon, Reveal, Section, Tag, Text } from './ui'

export function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-5 md:gap-14">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted md:col-span-3">
          {about.paragraphs.map((p, i) => (
            <p key={i}>
              <Text>{p}</Text>
            </p>
          ))}
        </Reveal>
        <Reveal delay={100} className="md:col-span-2">
          <dl className="card divide-y divide-border p-0">
            {about.facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">{f.label}</dt>
                <dd className="text-sm font-medium sm:text-right">
                  <Text>{f.value}</Text>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 / Skills" title="What I work with" className="bg-surface/50">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 60}>
            <div className="card h-full">
              <h3 className="font-display text-lg font-semibold">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 / Projects" title="Selected work">
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.title + i} className={p.image ? 'md:col-span-2' : ''}>
            <Reveal delay={(i % 2) * 80} className="h-full">
              <article
                className={`card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 ${
                  p.image ? 'p-0 md:flex-row' : ''
                }`}
              >
                {p.image && (
                  <a
                    href={p.image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block shrink-0 overflow-hidden border-b border-border bg-surface md:w-2/5 md:border-b-0 md:border-r"
                    aria-label={`Open full-size image: ${p.image.alt}`}
                  >
                    <img
                      src={p.image.src}
                      alt={p.image.alt}
                      loading="lazy"
                      className="aspect-[4/3] h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] md:aspect-auto"
                    />
                  </a>
                )}
                <div className={`flex flex-1 flex-col ${p.image ? 'p-6 md:p-8' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {p.tagline && (
                      <p className="font-mono text-xs text-accent">
                        <Text>{p.tagline}</Text>
                      </p>
                    )}
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
                      <Text>{p.title}</Text>
                    </h3>
                  </div>
                  {p.status && (
                    <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">{p.status}</span>
                  )}
                </div>

                <p className="mt-4 leading-relaxed text-muted">
                  <Text>{p.description}</Text>
                </p>

                {p.highlights && p.highlights.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>
                          <Text>{h}</Text>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-6">
                  <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                    {p.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </ul>
                  {(p.demo || p.source || import.meta.env.DEV) && (
                  <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-sm font-medium">
                    <ExtLink href={p.demo} className="link-arrow" hint="demo/paper link">
                      <ExternalLink className="h-4 w-4" aria-hidden="true" /> {p.demoLabel ?? 'Live demo'}
                      <span className="sr-only"> for {p.title}</span>
                    </ExtLink>
                    <ExtLink href={p.source} className="link-arrow" hint="source link">
                      <GitHubIcon className="h-4 w-4" /> Source code
                      <span className="sr-only"> for {p.title}</span>
                    </ExtLink>
                  </div>
                  )}
                </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6">
      {items.map((it, i) => (
        <li key={it.title + i} className="relative">
          <span aria-hidden="true" className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
          <Reveal delay={i * 60}>
            <p className="font-mono text-xs text-muted">
              <Text>{it.period}</Text>
            </p>
            <h4 className="mt-1 font-display text-lg font-semibold">
              <Text>{it.title}</Text>
            </h4>
            <p className="text-sm text-accent">
              <Text>{it.org}</Text>
              {it.location && (
                <span className="text-muted">
                  {' · '}
                  <Text>{it.location}</Text>
                </span>
              )}
            </p>
            {it.points.length > 0 && (
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                {it.points.map((pt) => (
                  <li key={pt}>
                    <Text>{pt}</Text>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  )
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="04 / Experience & Education" title="Where I've been" className="bg-surface/50">
      <div className="grid gap-14 md:grid-cols-2 md:gap-10">
        <div>
          <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold">
            <Briefcase className="h-5 w-5 text-accent" aria-hidden="true" /> Experience
          </h3>
          <Timeline items={experience} />
        </div>
        <div>
          <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold">
            <GraduationCap className="h-5 w-5 text-accent" aria-hidden="true" /> Education
          </h3>
          <Timeline items={education} />
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card h-full">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
              <Award className="h-5 w-5 text-accent" aria-hidden="true" /> Certifications
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <Text>{c}</Text>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="card h-full">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
              <BookOpen className="h-5 w-5 text-accent" aria-hidden="true" /> Publications
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              {publications.map((pub) => (
                <li key={pub.title}>
                  {pub.href ? (
                    <a href={pub.href} target="_blank" rel="noopener noreferrer" className="link-arrow font-medium leading-snug">
                      {pub.title}
                    </a>
                  ) : (
                    <p className="font-medium leading-snug">{pub.title}</p>
                  )}
                  <p className="mt-0.5 text-muted italic">{pub.venue}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export function Contact() {
  const socials = [
    { label: 'GitHub', href: contact.socials.github, icon: <GitHubIcon /> },
    { label: 'LinkedIn', href: contact.socials.linkedin, icon: <LinkedInIcon /> },
    ...contact.other.map((o) => ({ label: o.label, href: o.href, icon: <ArrowUpRight className="h-5 w-5" /> })),
  ]
  return (
    <Section id="contact" eyebrow="05 / Contact" title="Let's talk">
      <Reveal>
        <div className="card relative overflow-hidden p-8 md:p-12">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
          <p className="relative max-w-2xl text-lg leading-relaxed text-muted">
            <Text>{contact.blurb}</Text>
          </p>
          <div className="relative mt-8 flex flex-wrap items-center gap-3">
            {contact.email ? (
              <a href={`mailto:${contact.email}`} className="btn-primary">
                <Mail className="h-4 w-4" aria-hidden="true" /> {contact.email}
              </a>
            ) : (
              <span className="btn-primary pointer-events-none opacity-90">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <Text>[Add your email in portfolio.ts]</Text>
              </span>
            )}
            {socials.map((s) => (
              <ExtLink key={s.label} href={s.href} className="btn-secondary" hint={`${s.label} URL`}>
                {s.icon} {s.label}
              </ExtLink>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {YEAR} {site.name}
        </p>
        <div className="flex items-center gap-1">
          <ExtLink href={contact.socials.github} className="icon-btn" hint="GitHub">
            <GitHubIcon />
            <span className="sr-only">GitHub</span>
          </ExtLink>
          <ExtLink href={contact.socials.linkedin} className="icon-btn" hint="LinkedIn">
            <LinkedInIcon />
            <span className="sr-only">LinkedIn</span>
          </ExtLink>
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="icon-btn" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          )}
          <a href="#top" className="ml-3 hover:text-fg">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
