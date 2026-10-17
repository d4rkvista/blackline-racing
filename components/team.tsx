'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { User } from 'lucide-react'
import { team } from '@/lib/site'

export function Team() {
  return (
    <section id="team" className="relative scroll-mt-16 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              04 — The crew
            </p>
            <h2 className="font-display text-5xl font-extrabold uppercase leading-none md:text-7xl">Meet the team</h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Six students, each owning a critical part of the programme — from CAD to the pit wall.
          </p>
        </div>

        <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <motion.li
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-background"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-card">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={`Portrait of ${m.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 border border-dashed border-border text-muted-foreground">
                    <User className="size-12" strokeWidth={1} aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Photo coming soon</span>
                  </div>
                )}
                <span className="absolute left-4 top-4 font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-extrabold uppercase">{m.name}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-primary">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.about}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
