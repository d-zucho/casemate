// types dont need to be imported because they are in a file that is a .d.ts which means it is a typescript declaration file
// and typescript will automatically include it in the project

import {
  AwardIcon,
  HowItWorksStep,
  IntroStat,
  NavLink,
  NewsLogo,
} from '@/types'
import { Filter, Map, Search, TriangleAlert } from 'lucide-react'

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Explore Cases',
    href: '/cases',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const INTRO_STATS: IntroStat[] = [
  {
    number: 2315,
    label: 'Total exonerations',
  },
  {
    number: 27300,
    label: 'Total years lost',
  },
]

export const NEWS_LOGOS: NewsLogo[] = [
  {
    label: 'The New York Times',
    src: 'icons/ny-times.svg',
    width: 150,
    height: 75,
  },
  {
    label: 'Bloomberg',
    src: 'icons/bloomberg.svg',
    width: 100,
    height: 75,
  },
  {
    label: 'Newsweek',
    src: 'icons/Newsweek.svg',
    width: 100,
    height: 75,
  },
  {
    label: 'Politico',
    src: 'icons/politico.svg',
    width: 100,
    height: 75,
  },
  {
    label: 'Time',
    src: 'icons/time.svg',
    width: 75,
    height: 75,
  },

  {
    label: 'Washington Post',
    src: 'icons/washington-post.svg',
    width: 150,
    height: 75,
  },
]

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    icon: Filter,
    title: 'Apply Filters',
    description:
      'Narrow down search results by applying filters such as location, date, and case type.',
  },
  {
    step: 2,
    icon: Search,
    title: 'Search Cases',
    description:
      'Use our powerful search to find specific cases or browse through the comprehensive database.',
  },
  {
    step: 3,
    icon: Map,
    title: 'Explore Details',
    description:
      'Dive deep into case timelines, evidence and the path to exoneration.',
  },
  {
    step: 4,
    icon: TriangleAlert,
    title: 'Share Stories',
    description:
      'Help raise awareness by sharing stories of wrongful convictions and exonerations.',
  },
]

export const AWARD_ICONS: AwardIcon[] = [
  {
    img: 'icons/Award01.svg',
    label: 'Best Research',
  },
  {
    img: 'icons/Award02.svg',
    label: 'Most Innovative',
  },
  {
    img: 'icons/Award03.svg',
    label: "People's Choice",
  },
  {
    img: 'icons/Award04.svg',
    label: 'Most Impactful',
  },
]
