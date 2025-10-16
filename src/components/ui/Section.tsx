import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'surface' | 'transparent'
}

export function Section({ 
  size = 'lg', 
  background = 'default',
  className, 
  children, 
  ...props 
}: SectionProps) {
  const sizes = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-24',
    xl: 'py-24 md:py-32'
  }

  const backgrounds = {
    default: 'bg-brand-bg',
    surface: 'bg-brand-surface/50',
    transparent: 'bg-transparent'
  }

  return (
    <section
      className={cn(
        sizes[size],
        backgrounds[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
