import Container from '@/components/shared/Container'
import Section from '@/components/shared/Section'
import Heading from '@/components/shared/Heading'
import ProjectCard from '@/components/shared/ProjectCard'
import { Project } from '@/types'

export default async function ProjectsPage() {
  // Mock data for project list
  const projects: Project[] = [
    {
      _id: '1',
      title: 'Modern Office Complex',
      slug: { current: 'modern-office-complex' },
      images: [],
      description: 'A state-of-the-art office complex featuring sustainable design and ultra-modern amenities.',
      status: 'Completed',
      location: 'Downtown Silicon Valley'
    },
    {
      _id: '2',
      title: 'Luxury Residential Tower',
      slug: { current: 'luxury-residential-tower' },
      images: [],
      description: 'High-rise residential building with panoramic city views and premium interior finishes.',
      status: 'In Progress',
      location: 'Metropolis North'
    },
    {
      _id: '3',
      title: 'Industrial Logistics Hub',
      slug: { current: 'industrial-logistics-hub' },
      images: [],
      description: 'A massive logistics center designed for efficiency and high-volume operations.',
      status: 'Planned',
      location: 'Gateway Port'
    }
  ]

  return (
    <Section className="py-24">
      <Container>
        <div className="mb-16">
          <Heading level={1} className="mb-4">Our Projects</Heading>
          <p className="text-muted-foreground text-lg">A showcase of our engineering and construction excellence.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
