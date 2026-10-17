'use client'

import { motion } from 'motion/react'
import { Check, Minus, Sparkles } from 'lucide-react'
import { benefits, sponsorMailto, tiers, type TierId } from '@/lib/site'
import { cn } from '@/lib/utils'

const tierAccent: Record<TierId, string> = {
  diamond: 'from-sky-200 to-white',
  gold: 'from-amber-300 to-amber-100',
  silver: 'from-zinc-300 to-zinc-100',
  bronze: 'from-orange-400 to-orange-200',
  product: 'from-primary to-red-300',
}

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto size-5 text-primary" aria-label="Included" />
  if (value === false) return <Minus className="mx-auto size-4 text-muted-foreground/40" aria-label="Not included" />
  return <span className="text-sm">{value}</span>
}

export function Sponsorship() {
  return (
    <section id="sponsor" className="relative scroll-mt-16 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            05 — Partnership
          </p>
          <h2 className="text-balance font-display text-5xl font-extrabold uppercase leading-none md:text-7xl">
            Put your brand on the grid
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Your support funds materials, manufacturing, testing and travel to Karachi. In return, your brand races with us —
            on the car, in the pits and across every channel we own.
          </p>
        </div>

        <ul className="mb-16 grid grid-cols-2 gap-px bg-border md:grid-cols-5">
          {tiers.map((t, i) => (
            <motion.li
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={cn('group relative flex flex-col bg-background p-6', t.id === 'product' && 'col-span-2 md:col-span-1')}
            >
              <span className={cn('mb-6 block h-1 w-12 bg-gradient-to-r', tierAccent[t.id])} aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{t.tagline}</span>
              <h3
                className={cn(
                  'mt-1 bg-gradient-to-r bg-clip-text font-display text-4xl font-extrabold uppercase text-transparent',
                  tierAccent[t.id],
                )}
              >
                {t.name}
              </h3>
              <a
                href={sponsorMailto(t.name)}
                className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              >
                Enquire →
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="overflow-x-auto border border-border">
          <table className="w-full min-w-[820px] border-collapse text-left">
            <caption className="sr-only">Sponsorship tier comparison</caption>
            <thead>
              <tr className="border-b border-border bg-card">
                <th scope="col" className="p-5 font-mono text-xs font-normal uppercase tracking-[0.2em] text-muted-foreground">
                  Benefit
                </th>
                {tiers.map((t) => (
                  <th key={t.id} scope="col" className="p-5 text-center">
                    <span
                      className={cn(
                        'bg-gradient-to-r bg-clip-text font-display text-xl font-extrabold uppercase text-transparent',
                        tierAccent[t.id],
                      )}
                    >
                      {t.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {benefits.map((b) => (
                <tr key={b.label} className="border-b border-border transition-colors last:border-0 hover:bg-card/60">
                  <th scope="row" className="p-5 text-sm font-normal">
                    {b.label}
                  </th>
                  {tiers.map((t) => (
                    <td key={t.id} className="p-5 text-center text-muted-foreground">
                      <CellValue value={b.values[t.id]} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-card/40">
                <th scope="row" className="p-5 text-sm font-normal">
                  <span className="flex items-center gap-2">
                    <Sparkles className="size-4 text-primary" aria-hidden="true" />
                    Exclusive perks
                  </span>
                </th>
                {tiers.map((t) => (
                  <td key={t.id} className="p-5 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Coming soon
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Packages are flexible — we&apos;ll tailor a partnership to your goals.
        </p>
      </div>
    </section>
  )
}
