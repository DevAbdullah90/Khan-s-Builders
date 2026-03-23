import React from 'react'
import TeamHero from '@/components/sections/TeamHero'
import TeamShowcase from '@/components/sections/TeamShowcase'
import LifeAtKhans from '@/components/sections/LifeAtKhans'

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#050b18]">      
      <TeamHero />
      <TeamShowcase />
      <LifeAtKhans />
    </main>
  )
}
