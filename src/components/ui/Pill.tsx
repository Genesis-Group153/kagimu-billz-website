import React from 'react'
import { cn } from '@/lib/utils'

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: 'default' | 'gold' | 'outline'
  size?: 'sm' | 'md'
}

export function Pill({ 
  variant = 'default', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: PillProps) {
  const variants = {
    default: 'bg-brand-surface text-brand-fg border border-brand-gold/20',
    gold: 'bg-brand-gold text-brand-bg',
    outline: 'bg-transparent text-brand-gold border border-brand-gold/40'
  }
  
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm'
  }

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
