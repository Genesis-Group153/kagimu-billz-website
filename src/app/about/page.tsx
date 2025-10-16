import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { siteConfig } from '@/lib/siteConfig'

export const metadata = {
  title: "About",
  description: "Learn about Kagimu Billz, a Ugandan entrepreneur focused on construction advisory, real estate development, and lifestyle branding.",
}

export default function About() {
  return (
    <Section size="lg">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="headline">About Kagimu Billz</h1>
            <div className="hairline w-24 mx-auto" />
          </div>

          {/* Full Bio */}
          <div className="prose prose-lg max-w-none">
            <div className="text-brand-fg leading-relaxed space-y-6">
              <p>{siteConfig.fullBio}</p>
            </div>
          </div>

          {/* Pullquote */}
          <div className="text-center py-12">
            <blockquote className="text-2xl md:text-3xl font-display font-medium text-brand-gold italic">
              &ldquo;{siteConfig.pullquote}&rdquo;
            </blockquote>
            <cite className="block mt-4 text-brand-mute">— Kagimu Billz</cite>
          </div>

          {/* Fast Facts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold text-brand-gold mb-3">Focus Areas</h3>
                <p className="text-brand-fg">{siteConfig.fastFacts.focus}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold text-brand-gold mb-3">Base of Operations</h3>
                <p className="text-brand-fg">{siteConfig.fastFacts.base}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold text-brand-gold mb-3">Key Interests</h3>
                <p className="text-brand-fg">{siteConfig.fastFacts.interests}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold text-brand-gold mb-3">Education</h3>
                <p className="text-brand-fg">{siteConfig.fastFacts.education}</p>
              </CardContent>
            </Card>
          </div>

          {/* Services Overview */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-display font-semibold text-brand-fg mb-4">
                Service Areas
              </h2>
              <p className="text-brand-mute">
                Comprehensive solutions across construction, real estate, and branding
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.services.map((service, index) => (
                <Card key={index}>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-brand-gold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-brand-fg text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center py-12 border-t border-brand-gold/20">
            <h2 className="text-2xl font-display font-semibold text-brand-fg mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-brand-mute mb-6 max-w-2xl mx-auto">
              Ready to discuss your construction, real estate, or branding needs? 
              Get in touch to explore how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="btn-primary"
              >
                Send Email
              </a>
              <a
                href="/contact"
                className="btn-ghost"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
