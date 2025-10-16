'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { cn } from '@/lib/utils'
import { ThemeToggleWrapper } from '@/components/theme/ThemeToggleWrapper'

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-brand-bg/80 backdrop-blur-md border-b border-brand-gold/10' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 text-brand-gold font-display font-bold text-lg sm:text-xl"
          >
            <Image 
              src="/billz-logo.png" 
              alt="Kagimu Billz Logo" 
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              priority
            />
            <span className="hidden sm:block">Kagimu Billz</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'relative text-brand-fg hover:text-brand-gold transition-colors duration-300 font-medium',
                  pathname === item.href && 'text-brand-gold'
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand-gold" />
                )}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand-gold/0 hover:bg-brand-gold/100 transition-all duration-300" />
              </Link>
            ))}
            <ThemeToggleWrapper />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggleWrapper />
            <button
              onClick={toggleMenu}
              className="p-2 text-brand-fg hover:text-brand-gold transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-brand-gold/10 bg-brand-bg/95 backdrop-blur-md">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300',
                    pathname === item.href 
                      ? 'text-brand-gold bg-brand-gold/10' 
                      : 'text-brand-fg hover:text-brand-gold hover:bg-brand-gold/5'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-brand-gold/10">
                <div className="px-4 py-2 text-sm text-brand-mute">Theme</div>
                <div className="px-4">
                  <ThemeToggleWrapper />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
