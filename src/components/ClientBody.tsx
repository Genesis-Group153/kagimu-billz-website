'use client'

import { useEffect } from 'react'

interface ClientBodyProps {
  children: React.ReactNode
  className?: string
}

export function ClientBody({ children, className }: ClientBodyProps) {
  useEffect(() => {
    // Suppress hydration warnings for browser extensions
    const suppressHydrationWarning = () => {
      // This is intentionally left empty to suppress hydration warnings
      // caused by browser extensions like Grammarly that modify the DOM
    }
    
    // Add a small delay to ensure extensions have finished modifying the DOM
    const timer = setTimeout(suppressHydrationWarning, 0)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <body className={`${className} dark`} suppressHydrationWarning={true}>
      {children}
    </body>
  )
}
