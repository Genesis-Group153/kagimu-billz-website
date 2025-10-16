import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata = {
  title: "Portfolio",
  description: "Featured construction and real estate development projects by Kagimu Billz.",
}

export default function Portfolio() {
  const projects = [
    {
      title: "Residential Build",
      location: "Kampala, Uganda",
      year: "2023",
      type: "Residential Development",
      highlights: ["BOQ optimization", "Contractor oversight", "Quality assurance"],
      description: "Complete residential development project featuring modern design and sustainable construction practices."
    },
    {
      title: "Land Acquisition & Marketing",
      location: "Entebbe, Uganda", 
      year: "2023",
      type: "Real Estate Development",
      highlights: ["Drone photography", "Plot subdivision", "Marketing strategy"],
      description: "Comprehensive land development project including surveying, subdivision, and successful marketing campaign."
    },
    {
      title: "Commercial Complex",
      location: "Jinja, Uganda",
      year: "2022", 
      type: "Commercial Development",
      highlights: ["Site evaluation", "Project scoping", "Material optimization"],
      description: "Multi-phase commercial development with focus on cost optimization and quality standards."
    }
  ]

  return (
    <Section size="lg">
      <Container>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="headline">Portfolio</h1>
            <p className="subhead max-w-3xl mx-auto">
              Featured projects showcasing our expertise in construction advisory, 
              real estate development, and strategic project management.
            </p>
            <div className="hairline w-24 mx-auto" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="space-y-2">
                    <h2 className="text-xl font-display font-semibold text-brand-gold">
                      {project.title}
                    </h2>
                    <div className="text-brand-mute text-sm">
                      {project.location} • {project.year}
                    </div>
                    <div className="text-brand-fg font-medium">
                      {project.type}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-brand-mute text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-brand-fg mb-2">
                      Key Highlights:
                    </h3>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-brand-mute text-sm flex items-center">
                          <span className="text-brand-gold mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note */}
          <div className="text-center py-8">
            <div className="bg-brand-surface/30 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-brand-gold mb-2">
                More Projects Coming Soon
              </h3>
              <p className="text-brand-mute text-sm">
                We're currently updating our portfolio with recent projects. 
                Contact us to discuss your specific project requirements and 
                see how we can help bring your vision to life.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-brand-gold/20">
            <h2 className="text-2xl font-display font-semibold text-brand-fg mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-brand-mute mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific needs and 
              create a tailored approach that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Start a Project
              </a>
              <a href="/services" className="btn-ghost">
                View Services
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
