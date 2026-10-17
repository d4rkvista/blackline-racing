'use client'

import { useEffect, useState } from 'react'
import { RACE_DATE } from '@/lib/site'

const target = new Date(RACE_DATE).getTime()

function diff(now: number) {
  const ms = Math.max(0, target - now)
  return {
    days: Math.floor(ms / 86_400_000),
    hrs: Math.floor((ms / 3_600_000) % 24),
    min: Math.floor((ms / 60_000) % 60),
    sec: Math.floor((ms / 1000) % 60),
  }
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const t = now ? diff(now) : null
  const units = [
    ['Days', t?.days],
    ['Hrs', t?.hrs],
    ['Min', t?.min],
    ['Sec', t?.sec],
  ] as const

  return (
    <div aria-label="Countdown to race day" className="flex gap-px border border-border bg-border">
      {units.map(([label, value]) => (
        <div key={label} className="flex min-w-16 flex-col items-center bg-background/70 px-3 py-3 backdrop-blur md:min-w-20">
          <span className="font-mono text-2xl tabular-nums md:text-3xl">
            {value === undefined ? '--' : String(value).padStart(2, '0')}
          </span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  )
}
