'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { siteConfig } from '@/lib/siteConfig'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    consent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Client-only form handling - simulate success
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
        consent: false
      })
    }, 1000)
  }

  const handleMailto = () => {
    const subject = encodeURIComponent('Inquiry from Website')
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Topic: ${formData.topic}

Message:
${formData.message}
    `)
    
    window.open(`mailto:${siteConfig.social.email}?subject=${subject}&body=${body}`)
  }

  return (
    <Section size="lg">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="headline">Get in Touch</h1>
            <p className="subhead max-w-2xl mx-auto">
              Ready to discuss your project? We'd love to hear from you. 
              Whether it's construction advisory, real estate development, 
              or branding partnerships, let's start the conversation.
            </p>
            <div className="hairline w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-display font-semibold text-brand-fg">
                    Send a Message
                  </h2>
                  <p className="text-brand-mute">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </CardHeader>

                <CardContent>
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                      <p className="text-green-400 text-sm">
                        Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <Input
                        label="Email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Phone (Optional)"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-brand-fg">
                          Topic
                        </label>
                        <select
                          className="w-full px-4 py-3 bg-brand-surface/50 border border-brand-gold/20 rounded-lg text-brand-fg focus-ring transition-all duration-300 hover:border-brand-gold/30 focus:border-brand-gold"
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          required
                        >
                          <option value="">Select a topic</option>
                          <option value="partnerships">Partnerships</option>
                          <option value="media">Media Inquiry</option>
                          <option value="projects">Construction Projects</option>
                          <option value="real-estate">Real Estate Development</option>
                          <option value="branding">Branding & Marketing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <Textarea
                      label="Message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project or inquiry..."
                    />

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 h-4 w-4 text-brand-gold border-brand-gold/20 rounded focus:ring-brand-gold/50"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-brand-mute">
                        I consent to the processing of my personal data for the purpose of responding to this inquiry. 
                        <a href="/legal#privacy" className="text-brand-gold hover:text-brand-fg transition-colors">
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="flex-1"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={handleMailto}
                        className="flex-1"
                      >
                        Use Email
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-display font-semibold text-brand-fg">
                    Direct Contact
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-brand-gold mb-2">General Inquiries</h3>
                    <a
                      href={`mailto:${siteConfig.social.email}`}
                      className="text-brand-fg hover:text-brand-gold transition-colors"
                    >
                      {siteConfig.social.email}
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-brand-gold mb-2">Press & Media</h3>
                    <a
                      href={`mailto:${siteConfig.social.press}`}
                      className="text-brand-fg hover:text-brand-gold transition-colors"
                    >
                      {siteConfig.social.press}
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-brand-gold mb-2">Partnerships</h3>
                    <a
                      href={`mailto:${siteConfig.social.partnerships}`}
                      className="text-brand-fg hover:text-brand-gold transition-colors"
                    >
                      {siteConfig.social.partnerships}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-xl font-display font-semibold text-brand-fg">
                    Follow Along
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-brand-fg hover:text-brand-gold transition-colors"
                    >
                      Instagram: @brayobillz
                    </a>
                    <a
                      href={siteConfig.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-brand-fg hover:text-brand-gold transition-colors"
                    >
                      YouTube: Brayo Bills
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-brand-surface/30 p-6 rounded-lg">
                <h3 className="font-semibold text-brand-gold mb-2">Privacy Notice</h3>
                <p className="text-brand-mute text-sm">
                  We do not sell or share personal data. See our{' '}
                  <a href="/legal#privacy" className="text-brand-gold hover:text-brand-fg transition-colors">
                    Privacy Policy
                  </a>{' '}
                  for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
