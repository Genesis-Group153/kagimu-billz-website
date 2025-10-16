import { Hero } from '@/components/hero/Hero'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { MetricStat } from '@/components/ui/MetricStat'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/lib/siteConfig'
import { JsonLd } from '@/components/seo/JsonLd'
import Link from 'next/link'

// Import data
import brandsData from '@/data/brands.json'
import pressData from '@/data/press.json'
import socialData from '@/data/social.json'

export default function Home() {
  const latestPress = pressData.slice(0, 2)
  const latestSocial = socialData.instagram.slice(0, 3)

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Kagimu Billz",
          "alternateName": "Brayo Bills",
          "jobTitle": "Entrepreneur",
          "nationality": "Ugandan",
          "url": siteConfig.site.url,
          "sameAs": [
            siteConfig.social.instagram,
            siteConfig.social.youtube
          ],
          "worksFor": [
            {"@type": "Organization", "name": "Billz Contractors Ltd"},
            {"@type": "Organization", "name": "BILLZ GROUP International"}
          ]
        }}
      />
      
      {/* Hero Section */}
      <Hero
        headline={siteConfig.site.tagline}
        subhead={siteConfig.shortBio}
        ctas={[
          { text: "View Brands", href: "/brands", variant: "primary" },
          { text: "See Services", href: "/services", variant: "ghost" },
          { text: "Contact", href: "/contact", variant: "ghost" }
        ]}
      />

      {/* Brands Strip */}
      <Section size="sm" background="surface">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-semibold text-brand-fg mb-2">
              Our Brands
            </h2>
            <p className="text-brand-mute">
              The Billz umbrella connects disciplined execution with clear storytelling
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandsData.map((brand, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-brand-gold">
                    {brand.name}
                  </h3>
                  <p className="text-brand-mute text-sm">
                    {brand.summary}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {brand.services.slice(0, 3).map((service, idx) => (
                      <div key={idx} className="text-sm text-brand-fg">
                        {service}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/brands">
              <Button variant="outline">
                View All Brands
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Impact Stats */}
      <Section size="md">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <MetricStat
              value="50+"
              label="Projects Scoped"
              description="Residential and commercial projects across Uganda"
            />
            <MetricStat
              value="15%"
              label="Material Savings"
              description="Average cost reduction through optimization"
            />
            <MetricStat
              value="95%"
              label="Client Referrals"
              description="Repeat business and referrals from satisfied clients"
            />
          </div>
        </Container>
      </Section>

      {/* Latest Updates */}
      <Section size="lg" background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Latest Press */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-brand-fg mb-6">
                Latest Press
              </h2>
              <div className="space-y-6">
                {latestPress.map((article, index) => (
                  <Card key={index}>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm text-brand-gold font-medium">
                          {article.publisher}
                        </div>
                        <h3 className="text-lg font-semibold text-brand-fg">
                          {article.title}
                        </h3>
                        <p className="text-brand-mute text-sm">
                          {article.excerpt}
                        </p>
                        <div className="text-xs text-brand-mute">
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/media">
                  <Button variant="outline">
                    View All Press
                  </Button>
                </Link>
              </div>
            </div>

            {/* Social Highlights */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-brand-fg mb-6">
                Social Highlights
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {latestSocial.map((post, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-brand-surface rounded-lg flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-brand-fg text-sm line-clamp-2">
                          {post.caption}
                        </p>
                        <div className="mt-2 text-xs text-brand-mute">
                          Instagram
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/social">
                  <Button variant="outline">
                    View All Social
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section size="lg">
        <Container>
          <div className="text-center space-y-6">
            <div className="hairline-thick w-24 mx-auto" />
            <h2 className="text-3xl font-display font-semibold text-brand-fg">
              Ready to Build Smart?
            </h2>
            <p className="text-brand-mute max-w-2xl mx-auto">
              {siteConfig.site.signature}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="ghost" size="lg">
                  View Our Work
                </Button>
              </Link>
            </div>
    </div>
        </Container>
      </Section>
    </>
  )
}
