'use client'

import { useTheme } from '@/components/theme/ThemeProvider'
import { ThemeToggle } from '@/components/theme/ThemeToggle'

export default function TestTheme() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-brand-bg text-brand-fg p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Theme Test Page</h1>
          <ThemeToggle />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-xl font-semibold text-brand-gold mb-4">Current Theme</h2>
            <p className="text-brand-fg text-lg">Theme: <span className="font-bold">{theme}</span></p>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-semibold text-brand-gold mb-4">Colors</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-brand-bg border border-brand-gold/20 rounded"></div>
                <span className="text-brand-fg">Background</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-brand-surface border border-brand-gold/20 rounded"></div>
                <span className="text-brand-fg">Surface</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-brand-fg border border-brand-gold/20 rounded"></div>
                <span className="text-brand-fg">Foreground</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-brand-gold border border-brand-gold/20 rounded"></div>
                <span className="text-brand-fg">Gold</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-brand-gold mb-4">Responsive Test</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-brand-surface/50 rounded border border-brand-gold/10">
              <p className="text-brand-fg">Mobile (1 col)</p>
            </div>
            <div className="p-4 bg-brand-surface/50 rounded border border-brand-gold/10">
              <p className="text-brand-fg">Tablet (2 cols)</p>
            </div>
            <div className="p-4 bg-brand-surface/50 rounded border border-brand-gold/10">
              <p className="text-brand-fg">Desktop (3 cols)</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-brand-gold">Buttons Test</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-ghost">Ghost Button</button>
          </div>
        </div>
      </div>
    </div>
  )
}
