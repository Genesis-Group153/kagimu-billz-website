'use client'

import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border transition-all duration-300 focus-ring"
      style={{
        borderColor: 'rgba(212, 175, 55, 0.2)',
        backgroundColor: 'transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)'
        e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.05)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'
        e.currentTarget.style.backgroundColor = 'transparent'
      }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
      ) : (
        <Moon className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
      )}
    </button>
  )
}

// Fallback component for SSR
export function ThemeToggleSSR() {
  return (
    <button
      className="p-2 rounded-lg border border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 hover:bg-brand-gold/5 focus-ring"
      aria-label="Theme toggle"
    >
      <Sun className="w-5 h-5 text-brand-gold" />
    </button>
  )
}
