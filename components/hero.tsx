'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { Countdown } from './countdown'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.5])
  const imgOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const letterSpacing = useTransform(scrollYProgress, [0, 0.6], ['-0.02em', '0.12em'])
  const metaOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <section id="top" ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: imgScale, opacity: imgOpacity }}>
          <Image
            src="/images/hero-car.png"
            alt="Blackline Racing miniature Formula 1 car under dramatic lighting"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/10 to-background" />
        </motion.div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-16 pt-28">
          <motion.p
            style={{ opacity: metaOpacity }}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            Race Pakistan · Karachi · 30–31 Jan 2027
          </motion.p>

          <motion.h1
            style={{ y: titleY, opacity: titleOpacity, letterSpacing }}
            className="font-display text-[22vw] font-black uppercase leading-[0.8] md:text-[16vw]"
          >
            Black<span className="text-primary">line</span>
            <span className="sr-only"> Racing</span>
          </motion.h1>

          <motion.div
            style={{ opacity: metaOpacity }}
            className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Six independent student engineers. One miniature Formula 1 car. Every millisecond engineered out.
            </p>
            <Countdown />
          </motion.div>
        </div>

        <motion.a
          href="#mission"
          style={{ opacity: metaOpacity }}
          className="relative z-10 mx-auto mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          Scroll <ArrowDown className="size-3 animate-bounce" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  )
}
