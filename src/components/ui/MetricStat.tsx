import React from 'react'
import { cn } from '@/lib/utils'

interface MetricStatProps {
  value: string | number
  label: string
  description?: string
  className?: string
}

export function MetricStat({ value, label, description, className }: MetricStatProps) {
  return (
    <div className={cn('text-center space-y-2', className)}>
      <div className="text-4xl md:text-5xl font-bold text-brand-gold font-display">
        {value}
      </div>
      <div className="text-lg font-semibold text-brand-fg">
        {label}
      </div>
      {description && (
        <div className="text-sm text-brand-mute max-w-xs mx-auto">
          {description}
        </div>
      )}
    </div>
  )
}
