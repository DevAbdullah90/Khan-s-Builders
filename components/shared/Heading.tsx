import { cn } from '@/lib/utils'
import React from 'react'

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

export default function Heading({ level = 2, children, className }: HeadingProps) {
  const Tag = `h${level}` as any
  
  const styles = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight',
    2: 'text-3xl md:text-4xl font-bold tracking-tight',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-medium',
    6: 'text-base md:text-lg font-medium',
  }

  return (
    <Tag className={cn(styles[level], 'text-foreground', className)}>
      {children}
    </Tag>
  )
}
