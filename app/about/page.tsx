import AboutHero from '@/components/sections/AboutHero'
import AboutStory from '@/components/sections/AboutStory'
import MissionVision from '@/components/sections/MissionVision'
import CoreValues from '@/components/sections/CoreValues'
import TeamSection from '@/components/sections/TeamSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen">      
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <CoreValues />
      <TeamSection />
    </main>
  )
}
