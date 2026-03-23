import Container from '@/components/shared/Container'
import Section from '@/components/shared/Section'
import Heading from '@/components/shared/Heading'
import { Button } from '@/components/ui/button'
import { notFound } from 'next/navigation'
import { Project } from '@/types'

// This would be replaced by Sanity fetch
async function getProject(slug: string): Promise<Project | null> {
  const projects: Project[] = [
    {
      _id: '1',
      title: 'Modern Office Complex',
      slug: { current: 'modern-office-complex' },
      images: [],
      description: 'A state-of-the-art office complex featuring sustainable design and ultra-modern amenities. This project marks a milestone in eco-friendly corporate infrastructure, with smart energy systems and biophilic architectural elements that enhance employee well-being.',
      status: 'Completed',
      location: 'Downtown Silicon Valley',
      client: 'Tech Corp Inc.',
      completionDate: 'December 2025'
    }
  ]
  return projects.find(p => p.slug.current === slug) || null
}

export default async function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <article>
      <Section className="bg-muted pt-24 pb-16">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <Heading level={1} className="mb-4">{project.title}</Heading>
              <p className="text-xl text-muted-foreground">{project.location}</p>
            </div>
            <div className="bg-background border rounded px-6 py-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Status</p>
              <p className="text-lg font-semibold">{project.status}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-muted aspect-video rounded-2xl flex items-center justify-center text-muted-foreground text-xl">
                Main Project Image Placeholder
              </div>
              
              <div className="space-y-6">
                <Heading level={3}>Project Overview</Heading>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="border rounded-2xl p-8 space-y-6">
                <Heading level={4}>Project Details</Heading>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase font-bold text-muted-foreground">Client</p>
                    <p className="font-medium">{project.client || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-muted-foreground">Completion Date</p>
                    <p className="font-medium">{project.completionDate || 'Ongoing'}</p>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <a href="/contact">Inquire About Similar Projects</a>
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </article>
  )
}
