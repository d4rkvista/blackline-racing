'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'

const statement =
  'We are Blackline Racing — an independent, student-led team from Pakistan. No school budget, no shortcuts. Just six engineers designing, testing and optimizing a miniature Formula 1 car to compete at Race Pakistan in Karachi.'

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  )
}

export function Mission() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.4'] })
  const words = statement.split(' ')

  return (
    <section id="mission" className="relative mx-auto max-w-6xl scroll-mt-16 px-6 py-32 md:py-48">
      <p className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
        <span className="h-px w-10 bg-primary" aria-hidden="true" />
        01 — Who we are
      </p>
      <div ref={ref}>
        <p className="sr-only">{statement}</p>
        <p aria-hidden="true" className="text-balance font-display text-4xl font-extrabold uppercase leading-[1.05] md:text-7xl">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>
      </div>
    </section>
  )
}
