import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Mission } from '@/components/mission'
import { CarShowcase } from '@/components/car-showcase'
import { Values } from '@/components/values'
import { Team } from '@/components/team'
import { Sponsorship } from '@/components/sponsorship'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Mission />
        <CarShowcase />
        <Values />
        <Team />
        <Sponsorship />
        <Contact />
      </main>
    </>
  )
}
