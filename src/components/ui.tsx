import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Renders text, highlighting any [bracketed placeholders] so they're easy to spot. */
export function Text({ children }: { children: string }) {
  const parts = children.split(/(\[[^\]]+\])/g)
  return (
    <>
      {parts.map((p, i) =>
        /^\[.+\]$/.test(p) ? (
          <mark key={i} className="placeholder" title="Placeholder — edit src/content/portfolio.ts">
            {p}
          </mark>
        ) : (
          p
        ),
      )}
    </>
  )
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = '',
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-20 py-20 md:py-28 ${className}`}>
      <div className="container">
        <Reveal>
          <p className="font-mono text-sm text-accent">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  )
}

/** Fades content in once when it scrolls into view (disabled for reduced-motion users via CSS). */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return setShown(true)
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${shown ? 'is-shown' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function Tag({ children }: { children: string }) {
  return (
    <li className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
      <Text>{children}</Text>
    </li>
  )
}

/** External link. Empty hrefs are hidden in production and shown as a hint in dev. */
export function ExtLink({
  href,
  children,
  className = '',
  hint,
}: {
  href: string
  children: ReactNode
  className?: string
  hint?: string
}) {
  if (!href) {
    if (!import.meta.env.DEV) return null
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-amber-500/60 px-2 py-1 text-xs text-amber-600 dark:text-amber-400">
        + {hint ?? 'add link'} in portfolio.ts
      </span>
    )
  }
  const external = /^https?:/.test(href)
  return (
    <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}

/* Brand icons (lucide no longer ships brand logos). */
export const GitHubIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
)

export const LinkedInIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)
