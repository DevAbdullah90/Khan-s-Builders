import Hero from '@/components/layout/Hero'
import Features from '@/components/sections/Features'
import ProjectsSection from '@/components/sections/ProjectsSection'
import VideoSlider from '@/components/sections/VideoSlider'
import GallerySection from '@/components/sections/GallerySection'
import ContactSection from '@/components/sections/ContactSection'
import { client } from '@/sanity/lib/client'
import { announcementsQuery } from '@/sanity/lib/queries'

export default async function Home() {
  const sanityAnnouncements = await client.fetch(announcementsQuery)
  
  // Fallback defaults if Sanity is empty
  const announcements = sanityAnnouncements?.length > 0 ? sanityAnnouncements : [
    { text: "New Launch: Khan Heights II - Bookings Open Now!" },
    { text: "Special Offer: 10% Discount on Lump Sum Payments this Month" },
    { text: "Construction Update: Civic Center Project is 85% Complete" }
  ]

  return (
    <article>
      <Hero announcements={announcements} />
      <Features />
      <ProjectsSection />
      <VideoSlider />
      <GallerySection />
      <ContactSection />
    </article>
  )
}
