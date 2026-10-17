'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'

const values = [
  {
    title: 'Precision',
    body: 'Every surface is modelled, simulated and measured. We treat tenths of a millimetre the way real F1 teams treat thousandths of a second.',
  },
  {
    title: 'Independence',
    body: 'We are not backed by a school or institution. Every tool, test and trip is earned — which makes every partner a genuine part of the team.',
  },
  {
    title: 'Iteration',
    body: 'Design, simulate, build, test, repeat. CFD and track data drive our decisions, not guesswork.',
  },
  {
    title: 'Integrity',
    body: 'We deliver what we promise to our sponsors — visibility, transparent reporting and a team that represents your brand with pride.',
  },
]

export function Values() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const img2Y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <section id="values" ref={ref} className="relative scroll-mt-16 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div className="lg:sticky lg:top-24 lg:h-[calc(100svh-8rem)]">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            03 — What drives us
          </p>
          <h2 className="mb-10 font-display text-5xl font-extrabold uppercase leading-none md:text-7xl">
            Our values
          </h2>
          <div className="relative grid h-80 grid-cols-5 gap-3 lg:h-[60%]">
            <div className="relative col-span-3 overflow-hidden">
              <motion.div className="absolute inset-[-15%_0]" style={{ y: imgY }}>
                <Image src="/images/workshop.png" alt="Team members hand-finishing the car body in the workshop" fill sizes="(min-width: 1024px) 30vw, 60vw" className="object-cover" />
              </motion.div>
            </div>
            <div className="relative col-span-2 mt-12 overflow-hidden">
              <motion.div className="absolute inset-[-15%_0]" style={{ y: img2Y }}>
                <Image src="/images/aero.png" alt="CFD airflow simulation over the car body" fill sizes="(min-width: 1024px) 20vw, 40vw" className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>

        <ol className="flex flex-col">
          {values.map((v, i) => (
            <motion.li
              key={v.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group flex min-h-[50svh] flex-col justify-center border-t border-border py-12 last:border-b"
            >
              <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-display text-5xl font-extrabold uppercase md:text-6xl">{v.title}</h3>
              <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">{v.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
