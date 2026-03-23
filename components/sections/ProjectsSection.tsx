'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from '../shared/Container'
import ProjectCard from '../shared/ProjectCard'
import { client } from '@/sanity/lib/client'
import { Project } from '@/types'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

// GROQ Query for featured projects
const FEATURED_PROJECTS_QUERY = `*[_type == "project" && featured == true][0...4] {
  _id,
  title,
  subheading,
  slug,
  status,
  images,
  description
}`

// DUMMY DATA FOR INITIAL VISUALIZATION
const DUMMY_PROJECTS: Project[] = [
  {
    _id: 'dummy-1',
    title: 'Grand Royal Residency',
    subheading: 'A 24-story luxury residential tower with panoramic ocean views and bespoke interior architecture.',
    slug: { current: 'grand-royal-residency' },
    status: 'Completed',
    location: 'Karachi, Pakistan',
    images: ["/images/p-1.avif"],
    description: 'Detailed description about the high-end materials and structural engineering used.'
  },
  {
    _id: 'dummy-2',
    title: 'The Nexus Business Hub',
    subheading: 'Premium corporate office space featuring smart-glass technology and sustainable energy systems.',
    slug: { current: 'nexus-business-hub' },
    status: 'In Progress',
    location: 'Lahore, Pakistan',
    images: ["/images/p-2.jpg"],
    description: 'Modern workspace designed for peak productivity and environmental responsibility.'
  },
  {
    _id: 'dummy-3',
    title: 'Skyline Wellness Resort',
    subheading: 'A unique architectural marvel blending nature with modern luxury, featuring vertical gardens.',
    slug: { current: 'skyline-wellness-resort' },
    status: 'Planned',
    location: 'Islamabad, Pakistan',
    images: ["/images/p-3.jpg"],
    description: 'An oasis in the heart of the city, focusing on health, wellness, and serenity.'
  },
]

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(FEATURED_PROJECTS_QUERY)
        if (data && data.length > 0) {
          setProjects(data)
        } else {
          setProjects(DUMMY_PROJECTS)
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
        setProjects(DUMMY_PROJECTS) // Fallback on error too
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) return (
    <div className="py-24 bg-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
    </div>
  )

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase text-gold bg-gold/10 rounded-full"
            >
              Our Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Our Featured <span className="text-gold">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-gray-500 font-medium"
            >
              Over 1,500 successful premium residential and commercial projects delivered nationwide with architectural excellence.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white rounded-full px-8 h-12 group" asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
