'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { CONTACT_EMAIL, sponsorMailto } from '@/lib/site'

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1])
  const lineScale = useTransform(scrollYProgress, [0.2, 1], [0, 1])

  const copy = async () => {
    await navigator.clipboard.writeText(CONTACT_EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={ref} id="contact" className="relative overflow-hidden border-t border-border">
      <motion.div style={{ scale }} className="mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-6 py-32">
        <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-10 bg-primary" aria-hidden="true" />
          Lights out in Karachi
        </p>
        <h2 className="text-balance font-display text-6xl font-black uppercase leading-[0.85] md:text-[9vw]">
          Race with <span className="text-primary">us.</span>
        </h2>
        <motion.div style={{ scaleX: lineScale }} className="my-12 h-px origin-left bg-border" aria-hidden="true" />
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Interested in sponsoring Blackline Racing? Drop us an email and we&apos;ll send our full sponsorship deck.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={sponsorMailto()}
              className="group inline-flex items-center justify-between gap-6 bg-primary px-6 py-4 font-mono text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              {CONTACT_EMAIL}
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center justify-center gap-2 border border-border px-5 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:border-foreground"
            >
              {copied ? <Check className="size-4 text-primary" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
              <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </motion.div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:justify-between">
          <span>© 2026 Blackline Racing · Independent student team</span>
          <span>Race Pakistan · Karachi · 30–31 Jan 2027</span>
        </div>
      </footer>
    </section>
  )
}
