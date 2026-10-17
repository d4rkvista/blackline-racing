'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'

const specs = [
  { value: '6', label: 'Engineers' },
  { value: '1', label: 'Car' },
  { value: '2', label: 'Race days' },
  { value: '01.27', label: 'Karachi' },
]

export function CarShowcase() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const carX = useTransform(scrollYProgress, [0, 0.55, 1], ['-110%', '0%', '120%'])
  const carBlur = useTransform(scrollYProgress, [0, 0.45, 0.6, 1], ['blur(6px)', 'blur(0px)', 'blur(0px)', 'blur(8px)'])
  const streakX = useTransform(scrollYProgress, [0, 1], ['-100%', '100%'])
  const bgTextX = useTransform(scrollYProgress, [0, 1], ['20%', '-60%'])
  const specsOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.7, 0.8], [0, 1, 1, 0])
  const specsY = useTransform(scrollYProgress, [0.35, 0.5], [40, 0])

  return (
    <section id="car" ref={ref} className="relative h-[300vh] scroll-mt-16">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <motion.p
          aria-hidden="true"
          style={{ x: bgTextX }}
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[28vw] font-black uppercase leading-none text-foreground/[0.04]"
        >
          Engineered for speed
        </motion.p>

        <div className="relative mx-auto w-full max-w-7xl px-6">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            02 — The machine
          </p>
          <h2 className="max-w-2xl text-balance font-display text-5xl font-extrabold uppercase leading-none md:text-7xl">
            Small car. Formula 1 discipline.
          </h2>
        </div>

        <div className="relative my-8 md:my-4">
          <motion.div
            aria-hidden="true"
            style={{ x: streakX }}
            className="absolute inset-x-0 top-[58%] h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          />
          <motion.div style={{ x: carX, filter: carBlur }} className="relative mx-auto aspect-[1584/672] w-full max-w-6xl">
            <Image
              src="/images/car-side.png"
              alt="Side profile of the Blackline Racing car with red pinstripe"
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-contain mix-blend-lighten"
            />
          </motion.div>
        </div>

        <motion.dl
          style={{ opacity: specsOpacity, y: specsY }}
          className="relative mx-auto grid w-full max-w-7xl grid-cols-2 gap-px px-6 md:grid-cols-4"
        >
          {specs.map((s) => (
            <div key={s.label} className="border-l border-border py-2 pl-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.label}</dt>
              <dd className="font-display text-4xl font-extrabold md:text-5xl">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
