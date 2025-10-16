import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/lib/siteConfig'
import pressData from '@/data/press.json'

export const metadata = {
  title: "Media",
  description: "Press coverage and media resources for Kagimu Billz.",
}

export default function Media() {
  return (
    <Section size="lg">
      <Container>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="headline">Media</h1>
            <p className="subhead max-w-3xl mx-auto">
              Press coverage, media resources, and downloadable materials 
              for journalists and media professionals.
            </p>
            <div className="hairline w-24 mx-auto" />
          </div>

          {/* Press Coverage */}
          <div className="space-y-8">
            <h2 className="text-2xl font-display font-semibold text-brand-fg text-center">
              Recent Press Coverage
            </h2>
            
            <div className="space-y-6">
              {pressData.map((article, index) => (
                <Card key={index}>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="md:col-span-1">
                        <div className="text-sm text-brand-gold font-medium mb-1">
                          {article.publisher}
                        </div>
                        <div className="text-xs text-brand-mute">
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <div className="md:col-span-3">
                        <h3 className="text-lg font-semibold text-brand-fg mb-2">
                          {article.title}
                        </h3>
                        <p className="text-brand-mute text-sm mb-4">
                          {article.excerpt}
                        </p>
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-gold hover:text-brand-fg transition-colors text-sm font-medium"
                        >
                          Read Full Article →
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Media Kit */}
          <div className="space-y-8">
            <h2 className="text-2xl font-display font-semibold text-brand-fg text-center">
              Media Kit
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-brand-gold">
                    Bio (40 words)
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-mute text-sm mb-4">
                    {siteConfig.mediaKit.bios["40w"]}
                  </p>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-brand-gold">
                    Bio (120 words)
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-mute text-sm mb-4">
                    {siteConfig.mediaKit.bios["120w"]}
                  </p>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-brand-gold">
                    Bio (300 words)
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-mute text-sm mb-4">
                    {siteConfig.mediaKit.bios["300w"]}
                  </p>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Press Contact */}
          <div className="text-center py-12 border-t border-brand-gold/20">
            <h2 className="text-2xl font-display font-semibold text-brand-fg mb-4">
              Press Inquiries
            </h2>
            <p className="text-brand-mute mb-6 max-w-2xl mx-auto">
              For media inquiries, interview requests, or additional information, 
              please contact our press team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${siteConfig.social.press}`}
                className="btn-primary"
              >
                Contact Press Team
              </a>
              <a href="/contact" className="btn-ghost">
                General Contact
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
