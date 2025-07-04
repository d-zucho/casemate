// import { LucideIcon } from 'lucide-react'

import { LucideIcon } from 'lucide-react'

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
  icon: SVGAElement | LucideIcon
  title: string
  step: number
  description: string
}
