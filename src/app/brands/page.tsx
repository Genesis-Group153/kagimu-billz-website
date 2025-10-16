import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import brandsData from '@/data/brands.json'

export const metadata = {
  title: "Brands",
  description: "Explore the Billz umbrella of companies and entities, including BILLZ GROUP International, Billz Contractors Ltd, and Billz World Company Ltd.",
}

export default function Brands() {
  return (
    <Section size="lg">
      <Container>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="headline">Our Brands</h1>
            <p className="subhead max-w-3xl mx-auto">
              The Billz umbrella connects disciplined execution with clear storytelling. 
              Each entity serves a specific purpose while maintaining our core values of 
              quality, transparency, and client success.
            </p>
            <div className="hairline w-24 mx-auto" />
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {brandsData.map((brand, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <h2 className="text-2xl font-display font-semibold text-brand-gold mb-2">
                    {brand.name}
                  </h2>
                  <p className="text-brand-mute">
                    {brand.summary}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    {/* Services */}
                    <div>
                      <h3 className="text-lg font-semibold text-brand-fg mb-3">
                        Services
                      </h3>
                      <ul className="space-y-2">
                        {brand.services.map((service, idx) => (
                          <li key={idx} className="text-brand-fg text-sm flex items-start">
                            <span className="text-brand-gold mr-2 mt-1">•</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="text-lg font-semibold text-brand-fg mb-3">
                        Highlights
                      </h3>
                      <ul className="space-y-2">
                        {brand.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-brand-fg text-sm flex items-start">
                            <span className="text-brand-gold mr-2 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Verification Notes */}
                    {brand.verification && (
                      <div className="bg-brand-surface/30 p-3 rounded-lg">
                        <p className="text-xs text-brand-mute">
                          Note: {brand.verification.registration || brand.verification.ownership}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter>
                  <div className="flex gap-3 w-full">
                    <Button variant="primary" className="flex-1">
                      View Profile
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Request Info
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center py-12 border-t border-brand-gold/20">
            <h2 className="text-2xl font-display font-semibold text-brand-fg mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-brand-mute mb-6 max-w-2xl mx-auto">
              Each brand offers specialized expertise while maintaining our commitment 
              to excellence and client satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get in Touch
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
