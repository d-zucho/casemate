// import { LucideIcon } from 'lucide-react'

import { LucideIcon } from 'lucide-react'
import { ReactPortal } from 'react'

export type IntroStat = {
  number: number
  label: string
}

export type NavLink = {
  label: string
  href: string
}

export type NewsLogo = {
  label: string
  src: string
  width?: number
  height?: number
}

export type HowItWorksStep = {
  icon: LucideIcon
  title: string
  step: number
  description: string
}

export type AwardIcon = {
  img: string
  label: string
}

// tags for reasons mistakes occurred
export enum CaseTags {
  WITNESS_TAMPERING = 'Witness Tampering',
  FALSE_TESTIMONY = 'False Testimony',
  MISCONDUCT = 'Misconduct',
  FALSE_CONFESSION = 'False Confession',
  MISIDENTIFICATION = 'Misidentification',
  OTHER = 'Other',
}

export type CaseInfo = {
  title: string
  description: string
  location: string
  yearsServed: number
  imageUrl: string
  tags: CaseTags[]
}
