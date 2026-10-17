'use client'

import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { sponsorMailto } from '@/lib/site'
import { cn } from '@/lib/utils'

const links = [
  { href: '#mission', label: 'Mission' },
  { href: '#car', label: 'The Car' },
  { href: '#values', label: 'Values' },
  { href: '#team', label: 'Team' },
  { href: '#sponsor', label: 'Sponsor' },
]

export function SiteNav() {
  const { scrollY, scrollYProgress } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled || open ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6" aria-label="Main">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold uppercase tracking-wider">
          <span className="block h-4 w-1.5 -skew-x-12 bg-primary" aria-hidden="true" />
          Blackline<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={sponsorMailto()}
          className="hidden bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
        >
          Partner with us
        </a>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="flex flex-col gap-1 border-t border-border px-6 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-3xl font-extrabold uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={sponsorMailto()}
              className="mt-3 block bg-primary px-5 py-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground"
            >
              Partner with us
            </a>
          </li>
        </ul>
      )}

      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-primary"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
    </header>
  )
}
