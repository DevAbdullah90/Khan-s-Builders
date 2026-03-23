import React from 'react'
import Container from '@/components/shared/Container'
import ProjectHero from '@/components/sections/ProjectHero'
import ProjectSidebar from '@/components/sections/ProjectSidebar'
import ProjectAmenities from '@/components/sections/ProjectAmenities'
import ProjectGallery from '@/components/sections/ProjectGallery'
import ProjectUnits from '@/components/sections/ProjectUnits'
import { client } from '@/sanity/lib/client'
import { projectBySlugQuery } from '@/sanity/lib/queries'
import { Project } from '@/types'
import { FALLBACK_PROJECT } from '@/lib/fallback-data'
import { motion } from 'framer-motion'
import { Check, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default async function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  // Try to fetch from Sanity
  let project: Project | null = null
  try {
    project = await client.fetch(projectBySlugQuery, { slug: params.slug })
  } catch (error) {
    console.error('Error fetching project from Sanity:', error)
  }

  // Use fallback if not found in Sanity
  if (!project) {
    // If it is the fallback slug, use fallback data
    if (params.slug === 'town-icon') {
      project = FALLBACK_PROJECT
    } else {
      // For any other slug that's not in Sanity, we can still show the fallback for demo purposes or 404
      // In a real app, you'd probably return notFound() or show a specific demo project
      project = FALLBACK_PROJECT 
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      <ProjectHero project={project} />

      <section className="py-24">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            {/* Left Content */}
            <div className="lg:w-[60%] space-y-16">
              {/* About Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">About This Project</h2>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {/* Gallery Section */}
              <ProjectGallery images={project.images} />

              {/* Highlights Section */}
              {project.highlights && (
                <div className="py-12 border-t border-gray-100">
                  <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Key Highlights</h3>
                  <div className="space-y-4">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                          <Check className="w-3 h-3 text-gold group-hover:text-white" />
                        </div>
                        <p className="font-bold text-gray-600 group-hover:text-gray-900 transition-colors">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Amenities Section */}
              <ProjectAmenities amenities={project.amenities || []} />

              {/* Units / Payment Plans Section */}
              <ProjectUnits paymentPlans={project.paymentPlans || []} />
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-[40%]">
              <ProjectSidebar 
                projectDetails={project.projectDetails} 
                whatsappNumber={project.whatsappNumber}
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
