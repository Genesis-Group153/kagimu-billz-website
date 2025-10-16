import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Pill } from '@/components/ui/Pill'
import { JsonLd } from '@/components/seo/JsonLd'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    return {
      title: 'Article Not Found'
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
  }
}

// Sample article data - in a real app, this would come from MDX files
const articles = [
  {
    slug: "how-to-read-boq",
    title: "How to Read a BOQ Before You Sign",
    excerpt: "Understanding Bill of Quantities is crucial for any construction project. Learn to decode the numbers, spot potential issues, and negotiate better terms.",
    date: "2024-01-15",
    tags: ["construction", "project-management", "costs"],
    cover: "/images/insights/boq-guide.jpg",
    content: `
      <h2>What is a BOQ?</h2>
      <p>A Bill of Quantities (BOQ) is more than just a list of materials and costs—it's your project's financial blueprint. Understanding how to read and analyze a BOQ can save you thousands and prevent costly surprises down the line.</p>
      
      <h2>Key Sections to Review</h2>
      <h3>1. Preliminaries</h3>
      <p>This section covers project setup costs, temporary facilities, and general requirements. Look for:</p>
      <ul>
        <li>Site preparation costs</li>
        <li>Temporary utilities</li>
        <li>Project management fees</li>
        <li>Insurance and permits</li>
      </ul>
      
      <h3>2. Measured Works</h3>
      <p>The heart of the BOQ, this section breaks down all construction activities:</p>
      <ul>
        <li><strong>Excavation and earthworks</strong> - Verify soil conditions match assumptions</li>
        <li><strong>Concrete works</strong> - Check mix specifications and quantities</li>
        <li><strong>Masonry</strong> - Review material types and quality standards</li>
        <li><strong>Finishes</strong> - Confirm quality levels match your expectations</li>
      </ul>
      
      <h2>Red Flags to Watch For</h2>
      <h3>Underestimated Quantities</h3>
      <ul>
        <li>Compare quantities with your site conditions</li>
        <li>Check if excavation volumes match actual soil conditions</li>
        <li>Verify material quantities against architectural drawings</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Reading a BOQ thoroughly before signing can prevent costly disputes and ensure your project stays on budget. Take the time to understand each section, ask questions, and don't hesitate to seek professional advice if needed.</p>
      
      <blockquote>
        <p>"The devil is in the details—and nowhere more so than in a well-prepared BOQ." — Construction Industry Expert</p>
      </blockquote>
    `
  },
  {
    slug: "site-mistakes-budget",
    title: "Top Site Mistakes That Blow Your Budget",
    excerpt: "Avoid these common construction site errors that can derail your project timeline and inflate costs beyond recognition.",
    date: "2023-12-20",
    tags: ["construction", "budget", "project-management"],
    cover: "/images/insights/site-mistakes.jpg",
    content: `
      <h2>Common Budget-Killing Mistakes</h2>
      <p>Construction projects are complex endeavors where small mistakes can have massive financial implications. Here are the most common site errors that can blow your budget and how to avoid them.</p>
      
      <h2>1. Poor Site Preparation</h2>
      <h3>The Problem</h3>
      <p>Rushing into construction without proper site preparation leads to:</p>
      <ul>
        <li>Inadequate drainage causing foundation issues</li>
        <li>Poor access roads delaying material delivery</li>
        <li>Insufficient storage areas leading to material damage</li>
      </ul>
      
      <h3>The Solution</h3>
      <ul>
        <li>Conduct thorough site surveys before starting</li>
        <li>Install proper drainage systems</li>
        <li>Create adequate storage and access areas</li>
        <li>Plan for weather contingencies</li>
      </ul>
      
      <h2>2. Inadequate Material Management</h2>
      <p>Poor material handling and storage leads to theft, vandalism, weather damage, and wastage from improper handling.</p>
      
      <h2>Conclusion</h2>
      <p>Most budget overruns are preventable with proper planning, systems, and oversight. The key is to invest in prevention rather than paying for expensive corrections later.</p>
    `
  },
  {
    slug: "land-to-plots-process",
    title: "From Raw Land to Ready Plots: Permits, Surveying, Marketing",
    excerpt: "A comprehensive guide to transforming undeveloped land into market-ready residential plots, covering legal requirements, surveying, and marketing strategies.",
    date: "2023-11-10",
    tags: ["real-estate", "development", "permits", "marketing"],
    cover: "/images/insights/land-development.jpg",
    content: `
      <h2>Transforming Raw Land into Market-Ready Plots</h2>
      <p>Transforming raw land into market-ready residential plots is a complex process that requires careful planning, legal compliance, and strategic marketing.</p>
      
      <h2>Phase 1: Legal and Regulatory Compliance</h2>
      <h3>Land Title Verification</h3>
      <p>Before any development begins, ensure you have clear title to the land:</p>
      <ul>
        <li><strong>Title Search</strong>: Conduct a comprehensive title search to verify ownership</li>
        <li><strong>Boundary Disputes</strong>: Resolve any boundary issues with neighboring properties</li>
        <li><strong>Encumbrances</strong>: Check for liens, mortgages, or other encumbrances</li>
        <li><strong>Planning Permission</strong>: Verify the land is zoned for residential development</li>
      </ul>
      
      <h2>Phase 2: Site Surveying and Preparation</h2>
      <h3>Professional Surveying</h3>
      <p>Hire a licensed surveyor to:</p>
      <ul>
        <li><strong>Boundary Survey</strong>: Establish precise property boundaries</li>
        <li><strong>Topographic Survey</strong>: Map existing features, elevations, and drainage</li>
        <li><strong>Subdivision Survey</strong>: Create individual plot boundaries</li>
        <li><strong>Beacon Installation</strong>: Place permanent boundary markers</li>
      </ul>
      
      <h2>Phase 3: Infrastructure Development</h2>
      <p>Develop essential infrastructure including roads, utilities, and community facilities.</p>
      
      <h2>Phase 4: Marketing and Sales</h2>
      <p>Create professional marketing materials and implement a strategic sales approach.</p>
      
      <h2>Conclusion</h2>
      <p>Successfully developing raw land into market-ready plots requires careful planning, professional execution, and strategic marketing. By following this comprehensive process and addressing challenges proactively, you can create a successful residential development that meets market needs and regulatory requirements.</p>
    `
  }
]

function getArticleBySlug(slug: string) {
  return articles.find(article => article.slug === slug)
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    notFound()
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": article.excerpt,
          "datePublished": article.date,
          "author": {
            "@type": "Person",
            "name": "Kagimu Billz"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Kagimu Billz"
          },
          "image": article.cover,
          "url": `https://kagimubillz.com/insights/${article.slug}`
        }}
      />
      
      <Section size="lg">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Article Header */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, idx) => (
                  <Pill key={idx} variant="outline" size="sm">
                    {tag}
                  </Pill>
                ))}
              </div>
              
              <h1 className="headline text-balance">
                {article.title}
              </h1>
              
              <div className="flex items-center gap-4 text-brand-mute text-sm">
                <span>By Kagimu Billz</span>
                <span>•</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              
              <div className="hairline" />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-brand-fg leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-12 border-t border-brand-gold/20">
              <Link 
                href="/insights"
                className="text-brand-gold hover:text-brand-fg transition-colors font-medium"
              >
                ← Back to Insights
              </Link>
              
              <div className="flex gap-4">
                <a
                  href={`mailto:contact@kagimubillz.com?subject=Question about: ${article.title}`}
                  className="text-brand-gold hover:text-brand-fg transition-colors font-medium"
                >
                  Have Questions? →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
