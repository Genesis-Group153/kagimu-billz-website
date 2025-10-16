import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

export const metadata = {
  title: "Legal",
  description: "Privacy Policy and Terms of Service for Kagimu Billz website.",
}

export default function Legal() {
  return (
    <Section size="lg">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="headline">Legal Information</h1>
            <p className="text-brand-mute">
              Privacy Policy and Terms of Service
            </p>
            <div className="hairline w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Privacy Policy */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-display font-semibold text-brand-gold" id="privacy">
                  Privacy Policy
                </h2>
                <p className="text-brand-mute text-sm">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-brand-fg mb-3">Information We Collect</h3>
                  <p className="text-brand-mute text-sm leading-relaxed">
                    We collect information you provide directly to us, such as when you fill out our contact form, 
                    subscribe to our newsletter, or communicate with us. This may include your name, email address, 
                    phone number, and any messages you send.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-fg mb-3">How We Use Information</h3>
                  <p className="text-brand-mute text-sm leading-relaxed">
                    We use the information we collect to respond to your inquiries, provide our services, 
                    improve our website, and communicate with you about our services and updates.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-fg mb-3">Information Sharing</h3>
                  <p className="text-brand-mute text-sm leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as required by law or to provide our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-fg mb-3">Data Security</h3>
                  <p className="text-brand-mute text-sm leading-relaxed">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-fg mb-3">Your Rights</h3>
                  <p className="text-brand-mute text-sm leading-relaxed">
                    You have the right to access, update, or delete your personal information. 
                    You may also opt out of communications from us at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-fg mb-3">Contact Us</h3>
                  <p className="text-brand-mute text-sm leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:contact@kagimubillz.com" className="text-brand-gold hover:text-brand-fg transition-colors">
                      contact@kagimubillz.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Terms of Service */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-display font-semibold text-brand-gold" id="terms">
                  Terms of Service
                </h2>
                <p className="text-brand-mute text-sm">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-brand-fg mb-3">Acceptance of Terms</h3>
                  <p className="text-brand-mute text-sm leading-relaxed">
                    By accessing and using this website, you accept and agree to be bound by the terms 
                    and provision of this agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-fg mb-3">Use License</h3>
                  <p className="text-brand-mute text-sm leading-relaxed">
                    Permission is granted to temporarily download one copy of the materials on this website 
                    for personal, non-commercial transitory viewing only.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-fg mb-3">Disclaimer</h3>
                  <p className="text-brand-mute text-sm leading-relaxed">
                    The materials on this website are provided on an 'as is' basis. Kagimu Billz makes no 
                    warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-fg mb-3">Limitations</h3>
                  <p className="text-brand-mute text-sm leading-relaxed">
                    In no event shall Kagimu Billz or its suppliers be liable for any damages arising out 
                    of the use or inability to use the materials on this website.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-fg mb-3">Accuracy of Materials</h3>
                  <p className="text-brand-mute text-sm leading-relaxed">
                    The materials appearing on this website could include technical, typographical, or 
                    photographic errors. We do not warrant that any of the materials are accurate, 
                    complete, or current.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-fg mb-3">Modifications</h3>
                  <p className="text-brand-mute text-sm leading-relaxed">
                    We may revise these terms of service for this website at any time without notice. 
                    By using this website, you are agreeing to be bound by the then current version 
                    of these terms.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  )
}
