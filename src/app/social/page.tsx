import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { siteConfig } from '@/lib/siteConfig'
import socialData from '@/data/social.json'

export const metadata = {
  title: "Social",
  description: "Follow Kagimu Billz on social media for construction insights, real estate tips, and lifestyle content.",
}

export default function Social() {
  return (
    <Section size="lg">
      <Container>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="headline">Social Media</h1>
            <p className="subhead max-w-3xl mx-auto">
              Follow along for construction insights, real estate tips, project updates, 
              and behind-the-scenes content from our work across Uganda.
            </p>
            <div className="hairline w-24 mx-auto" />
          </div>

          {/* Instagram Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-display font-semibold text-brand-fg">
                Instagram Highlights
              </h2>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-brand-fg transition-colors font-medium"
              >
                Follow @brayobillz →
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialData.instagram.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square bg-brand-surface/50 mb-4" />
                  <CardContent>
                    <p className="text-brand-fg text-sm mb-3 line-clamp-3">
                      {post.caption}
                    </p>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gold hover:text-brand-fg transition-colors text-xs font-medium"
                    >
                      View on Instagram →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* YouTube Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-display font-semibold text-brand-fg">
                YouTube Channel
              </h2>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-brand-fg transition-colors font-medium"
              >
                Subscribe to Brayo Bills →
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialData.youtube.map((video, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-brand-surface/50 mb-4" />
                  <CardContent>
                    <h3 className="text-lg font-semibold text-brand-fg mb-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-brand-mute text-sm">
                        {video.duration}
                      </span>
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-gold hover:text-brand-fg transition-colors text-sm font-medium"
                      >
                        Watch Now →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center py-12 border-t border-brand-gold/20">
            <h2 className="text-2xl font-display font-semibold text-brand-fg mb-6">
              Connect With Us
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Follow on Instagram
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Subscribe on YouTube
              </a>
            </div>
            <p className="text-brand-mute text-sm mt-6">
              Stay updated with our latest projects, insights, and industry updates
            </p>
          </div>

          {/* Note */}
          <div className="bg-brand-surface/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-brand-gold mb-2">
              Note on Content
            </h3>
            <p className="text-brand-mute text-sm">
              Social media content is regularly updated with real project insights, 
              construction tips, and behind-the-scenes content. Content shown here 
              represents recent highlights and may be updated as new projects are completed.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
