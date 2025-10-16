'use client'

import React, { useState, useEffect } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Sun } from 'lucide-react'

export function ThemeToggleWrapper() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg border transition-all duration-300 focus-ring"
        style={{
          borderColor: 'rgba(212, 175, 55, 0.2)',
          backgroundColor: 'transparent',
        }}
        aria-label="Theme toggle"
      >
        <Sun className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
      </button>
    )
  }

  return <ThemeToggle />
}
