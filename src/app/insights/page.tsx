import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Pill } from '@/components/ui/Pill'
import Link from 'next/link'

export const metadata = {
  title: "Insights",
  description: "Construction tips, real estate insights, and industry analysis by Kagimu Billz.",
}

// Sample insights data - in a real app, this would come from MDX files
const insightsData = [
  {
    slug: "how-to-read-boq",
    title: "How to Read a BOQ Before You Sign",
    excerpt: "Understanding Bill of Quantities is crucial for any construction project. Learn to decode the numbers, spot potential issues, and negotiate better terms.",
    date: "2024-01-15",
    tags: ["construction", "project-management", "costs"],
    cover: "/images/insights/boq-guide.jpg"
  },
  {
    slug: "site-mistakes-budget",
    title: "Top Site Mistakes That Blow Your Budget",
    excerpt: "Avoid these common construction site errors that can derail your project timeline and inflate costs beyond recognition.",
    date: "2023-12-20",
    tags: ["construction", "budget", "project-management"],
    cover: "/images/insights/site-mistakes.jpg"
  },
  {
    slug: "land-to-plots-process",
    title: "From Raw Land to Ready Plots: Permits, Surveying, Marketing",
    excerpt: "A comprehensive guide to transforming undeveloped land into market-ready residential plots, covering legal requirements, surveying, and marketing strategies.",
    date: "2023-11-10",
    tags: ["real-estate", "development", "permits", "marketing"],
    cover: "/images/insights/land-development.jpg"
  }
]

export default function Insights() {
  return (
    <Section size="lg">
      <Container>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="headline">Insights</h1>
            <p className="subhead max-w-3xl mx-auto">
              Practical insights, industry analysis, and expert advice on construction, 
              real estate development, and business strategy.
            </p>
            <div className="hairline w-24 mx-auto" />
          </div>

          {/* Featured Articles */}
          <div className="space-y-8">
            <h2 className="text-2xl font-display font-semibold text-brand-fg text-center">
              Latest Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insightsData.map((article, index) => (
                <Card key={index} className="h-full">
                  <div className="aspect-video bg-brand-surface/50 mb-4" />
                  
                  <CardHeader>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, idx) => (
                          <Pill key={idx} variant="outline" size="sm">
                            {tag}
                          </Pill>
                        ))}
                      </div>
                      <h2 className="text-xl font-semibold text-brand-fg">
                        {article.title}
                      </h2>
                      <p className="text-brand-mute text-sm">
                        {article.excerpt}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-mute">
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="text-brand-gold hover:text-brand-fg transition-colors text-sm font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="space-y-8">
            <h2 className="text-2xl font-display font-semibold text-brand-fg text-center">
              Topics We Cover
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Construction Advisory",
                "Project Management", 
                "Cost Optimization",
                "Quality Control",
                "Real Estate Development",
                "Land Evaluation",
                "Marketing Strategy",
                "Business Development"
              ].map((topic, index) => (
                <Card key={index} className="text-center p-4">
                  <div className="text-brand-fg font-medium text-sm">
                    {topic}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="text-center py-12 border-t border-brand-gold/20">
            <h2 className="text-2xl font-display font-semibold text-brand-fg mb-4">
              Stay Informed
            </h2>
            <p className="text-brand-mute mb-6 max-w-2xl mx-auto">
              Get the latest insights delivered to your inbox. We share practical tips, 
              industry updates, and behind-the-scenes content from our projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-brand-surface/50 border border-brand-gold/20 rounded-lg text-brand-fg placeholder-brand-mute focus:outline-none focus:border-brand-gold transition-colors duration-300"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
            <p className="text-brand-mute text-xs mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
