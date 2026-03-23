import Container from '@/components/shared/Container'
import Section from '@/components/shared/Section'
import Heading from '@/components/shared/Heading'

export default function AboutPage() {
  return (
    <article>
      <Section className="bg-muted pb-24 pt-16">
        <Container>
          <Heading level={1} className="mb-6 text-center">About Khans Builder</Heading>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            A vision-driven construction and technology firm dedicated to engineering the future of infrastructure.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Heading level={2} className="mb-6">Our Mission</Heading>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  To provide cutting-edge solutions that bridge the gap between traditional engineering and modern technology. 
                  We believe in excellence, precision, and building structures that stand the test of time.
                </p>
                <p>
                  Our mission is driven by a commitment to sustainability, innovation, and client success. 
                  Every project we undertake is a testament to our dedication to quality.
                </p>
              </div>
            </div>
            <div className="bg-muted aspect-square rounded-2xl flex items-center justify-center text-muted-foreground">
              Mission Image Placeholder
            </div>
          </div>
        </Container>
      </Section>
    </article>
  )
}
