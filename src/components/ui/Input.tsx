import React from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ className, label, error, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-brand-fg">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-3 bg-brand-surface/50 border border-brand-gold/20 rounded-lg text-brand-fg placeholder-brand-mute focus-ring transition-all duration-300 hover:border-brand-gold/30 focus:border-brand-gold',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/50',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}
