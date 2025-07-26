// import { LucideIcon } from 'lucide-react'

import { LucideIcon } from 'lucide-react'
import { ReactPortal } from 'react'

type IntroStat = {
  number: number
  label: string
}

type NavLink = {
  label: string
  href: string
}

type NewsLogo = {
  label: string
  src: string
  width?: number
  height?: number
}

type HowItWorksStep = {
  icon: LucideIcon
  title: string
  step: number
  description: string
}

type AwardIcon = {
  img: string
  label: string
}
