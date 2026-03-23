import React from 'react'
import Container from '@/components/shared/Container'
import ProjectCard from '@/components/shared/ProjectCard'
import ProjectsHero from '@/components/sections/ProjectsHero'
import { client } from '@/sanity/lib/client'
import { projectsQuery } from '@/sanity/lib/queries'
import { FALLBACK_PROJECTS } from '@/lib/fallback-data'

export default async function ProjectsPage() {
  let projects = []
  
  try {
    projects = await client.fetch(projectsQuery)
  } catch (error) {
    console.error('Failed to fetch projects:', error)
  }

  // Use fallback if no projects returned
  const displayProjects = projects.length > 0 ? projects : FALLBACK_PROJECTS

  return (
    <main className="min-h-screen">      
      <ProjectsHero />

      <section className="py-24 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                Featured <span className="text-gold italic">Landmarks</span>
              </h2>
              <p className="text-lg text-gray-500 font-medium">
                Transforming visions into concrete realities across the capital's finest locations.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayProjects.map((project: any) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
