import Hero from '@/components/layout/Hero'
import Features from '@/components/sections/Features'
import ProjectsSection from '@/components/sections/ProjectsSection'
import GallerySection from '@/components/sections/GallerySection'
import ContactSection from '@/components/sections/ContactSection'

export default async function Home() {
  return (
    <article>
      <Hero />
      <Features />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
    </article>
  )
}
