'use client'

import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { Button } from '@/components/ui/Button'

export function SiteFooter() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Client-only placeholder - console log for now
    console.log('Newsletter subscription placeholder - would integrate with email service')
  }

  return (
    <footer className="bg-brand-surface border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 text-brand-gold font-display font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center">
                <span className="text-brand-bg font-bold text-sm">KB</span>
              </div>
              <span>Kagimu Billz</span>
            </div>
            <p className="text-brand-mute mb-6 max-w-md">
              {siteConfig.shortBio}
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h3 className="font-semibold text-brand-fg">Stay Updated</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-brand-bg/50 border border-brand-gold/20 rounded-lg text-brand-fg placeholder-brand-mute focus:outline-none focus:border-brand-gold transition-colors duration-300"
                />
                <Button size="sm" type="submit">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-brand-mute">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-brand-fg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.navigation.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-brand-mute hover:text-brand-gold transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-brand-fg mb-4">Contact</h3>
            <div className="space-y-2">
              <div>
                <p className="text-brand-mute">Email</p>
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="text-brand-gold hover:text-brand-fg transition-colors duration-300"
                >
                  {siteConfig.social.email}
                </a>
              </div>
              <div>
                <p className="text-brand-mute">Press</p>
                <a
                  href={`mailto:${siteConfig.social.press}`}
                  className="text-brand-gold hover:text-brand-fg transition-colors duration-300"
                >
                  {siteConfig.social.press}
                </a>
              </div>
              <div className="pt-4">
                <div className="flex space-x-4">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-mute hover:text-brand-gold transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-mute hover:text-brand-gold transition-colors duration-300"
                    aria-label="YouTube"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-gold/10 mt-8 pt-8 text-center">
          <p className="text-brand-mute text-sm mb-4">
            © {new Date().getFullYear()} Kagimu Billz. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              href="/legal#privacy"
              className="text-brand-mute hover:text-brand-gold transition-colors duration-300 text-sm"
            >
              Privacy
            </Link>
            <Link
              href="/legal#terms"
              className="text-brand-mute hover:text-brand-gold transition-colors duration-300 text-sm"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
