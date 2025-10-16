import React from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'

interface HeroProps {
  headline: string
  subhead: string
  ctas?: Array<{
    text: string
    href: string
    variant?: 'primary' | 'ghost'
  }>
  backgroundImage?: string
}

export function Hero({ headline, subhead, ctas = [], backgroundImage }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-bg">
        {backgroundImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-surface to-brand-bg" />
        )}
        <div className="absolute inset-0 bg-brand-bg/80" />
        <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="headline text-balance">
            {headline}
          </h1>
          <p className="subhead max-w-2xl mx-auto text-balance">
            {subhead}
          </p>
          
          {ctas.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {ctas.map((cta, index) => (
                <Link key={index} href={cta.href}>
                  <Button 
                    variant={cta.variant || 'primary'}
                    size="lg"
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {cta.text}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
