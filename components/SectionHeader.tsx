import { cn } from '@/lib/utils'
import React from 'react'

interface SectionHeaderProps {
  label: string
  children: React.ReactNode
  className?: string
}

const SectionHeader = ({ label, className, children }: SectionHeaderProps) => {
  return (
    <>
      <h3 className='uppercase font-bold text-sm text-my-orange-500 text-center md:text-left'>
        {label}
      </h3>
      <h2
        className={cn(
          className,
          'text-3xl lg:text-4xl text-my-title-2 font-bold text-center md:text-left'
        )}
      >
        {children}
      </h2>
    </>
  )
}

export default SectionHeader
