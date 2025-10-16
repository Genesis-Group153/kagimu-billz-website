import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/lib/siteConfig'

export const metadata = {
  title: "Services",
  description: "Construction advisory, real estate development, and lifestyle branding services by Kagimu Billz.",
}

export default function Services() {
  return (
    <Section size="lg">
      <Container>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="headline">Our Services</h1>
            <p className="subhead max-w-3xl mx-auto">
              Comprehensive solutions across construction, real estate, and branding. 
              We combine technical expertise with strategic thinking to deliver results 
              that exceed expectations.
            </p>
            <div className="hairline w-24 mx-auto" />
          </div>

          {/* Services Grid */}
          <div className="space-y-12">
            {siteConfig.services.map((service, index) => (
              <Card key={index} className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <CardHeader className="p-0 mb-6">
                      <h2 className="text-2xl font-display font-semibold text-brand-gold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-brand-fg leading-relaxed">
                        {service.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-brand-fg">
                          What We Deliver:
                        </h3>
                        <ul className="space-y-3">
                          {getServiceDetails(service.title).map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-brand-gold mr-3 mt-1">✓</span>
                              <span className="text-brand-fg">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>

                  <div className="flex flex-col justify-center">
                    <CardFooter className="p-0">
                      <div className="w-full space-y-4">
                        <div className="bg-brand-surface/30 p-6 rounded-lg">
                          <h4 className="font-semibold text-brand-gold mb-2">
                            Typical Timeline
                          </h4>
                          <p className="text-brand-fg text-sm">
                            {getServiceTimeline(service.title)}
                          </p>
                        </div>
                        
                        <div className="bg-brand-surface/30 p-6 rounded-lg">
                          <h4 className="font-semibold text-brand-gold mb-2">
                            Investment Range
                          </h4>
                          <p className="text-brand-fg text-sm">
                            {getServiceInvestment(service.title)}
                          </p>
                        </div>

                        <Button 
                          variant="primary" 
                          size="lg" 
                          className="w-full"
                        >
                          Request Estimate
                        </Button>
                      </div>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Process Overview */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-display font-semibold text-brand-fg mb-4">
                Our Process
              </h2>
              <p className="text-brand-mute">
                Structured approach ensuring quality and transparency at every step
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your needs and objectives" },
                { step: "02", title: "Planning", desc: "Developing strategy and timeline" },
                { step: "03", title: "Execution", desc: "Implementing with regular updates" },
                { step: "04", title: "Delivery", desc: "Final handover and ongoing support" }
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-3xl font-display font-bold text-brand-gold">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-brand-fg">
                        {item.title}
                      </h3>
                      <p className="text-brand-mute text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center py-12 border-t border-brand-gold/20">
            <h2 className="text-2xl font-display font-semibold text-brand-fg mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-brand-mute mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific needs and 
              create a tailored approach that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Start a Project
              </a>
              <a href="/portfolio" className="btn-ghost">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

// Helper functions for service details
function getServiceDetails(serviceTitle: string): string[] {
  switch (serviceTitle) {
    case "Construction Advisory & Project Scoping":
      return [
        "Detailed site analysis and feasibility studies",
        "Comprehensive Bill of Quantities (BOQ) preparation",
        "Material specifications and sourcing recommendations",
        "Contractor evaluation and selection assistance",
        "Quality control and progress monitoring",
        "Cost optimization strategies"
      ]
    case "Real Estate Development & Marketing":
      return [
        "Land evaluation and due diligence",
        "Development feasibility analysis",
        "Marketing strategy and campaign development",
        "Sales collateral and presentation materials",
        "Off-plan sales and marketing support",
        "Investment analysis and ROI projections"
      ]
    case "Brand Partnerships & Ambassador Work":
      return [
        "Lifestyle content creation and curation",
        "Social media strategy and management",
        "Event appearances and speaking engagements",
        "Brand collaboration and partnership development",
        "Short-form promotional content",
        "Influencer and ambassador program management"
      ]
    default:
      return []
  }
}

function getServiceTimeline(serviceTitle: string): string {
  switch (serviceTitle) {
    case "Construction Advisory & Project Scoping":
      return "2-4 weeks for initial scoping, ongoing support throughout project lifecycle"
    case "Real Estate Development & Marketing":
      return "4-8 weeks for strategy development, 3-12 months for marketing campaigns"
    case "Brand Partnerships & Ambassador Work":
      return "Flexible timelines based on campaign scope, typically 1-6 months"
    default:
      return "Timeline varies based on project scope and requirements"
  }
}

function getServiceInvestment(serviceTitle: string): string {
  switch (serviceTitle) {
    case "Construction Advisory & Project Scoping":
      return "Starting from $2,500 for initial consultation and scoping"
    case "Real Estate Development & Marketing":
      return "Starting from $5,000 for marketing strategy, percentage-based for sales"
    case "Brand Partnerships & Ambassador Work":
      return "Project-based pricing, starting from $1,500 for content packages"
    default:
      return "Contact us for a customized quote based on your needs"
  }
}
