// types dont need to be imported because they are in a file that is a .d.ts which means it is a typescript declaration file
// and typescript will automatically include it in the project

import {
  AwardIcon,
  CaseInfo,
  CaseTags,
  HowItWorksStep,
  IntroStat,
  NavLink,
  NewsLogo,
  TFactCard,
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

export const CASES: CaseInfo[] = [
  {
    title: 'Case 1',
    description:
      'In this case, the defendant was wrongfully convicted due to witness tampering and false testimony.',
    location: 'Location 1',
    yearsServed: 5,
    imageUrl: '/images/H_About.png',
    tags: [CaseTags.WITNESS_TAMPERING, CaseTags.FALSE_TESTIMONY],
  },
  {
    title: 'Case 2',
    description:
      'In this case, the defendant was wrongfully convicted due to police misconduct and a false confession.',
    location: 'Location 2',
    yearsServed: 10,
    imageUrl: '/images/H_About.png',
    tags: [CaseTags.MISCONDUCT, CaseTags.FALSE_CONFESSION],
  },
  {
    title: 'Case 3',
    description:
      'In this case, the defendant was wrongfully convicted due to misidentification and other factors. Then was exonerated after serving 8 years. He is now an advocate for criminal justice reform.',
    location: 'Location 3',
    yearsServed: 8,
    imageUrl: '/images/H_About.png',
    tags: [CaseTags.MISIDENTIFICATION, CaseTags.OTHER],
  },
]

export const GET_THE_FACTS: TFactCard[] = [
  {
    title: 'Comprehensive Database',
    description:
      'Search and filter through hundreds of wrongful conviction cases by state, race, crime type, and cause of error.',
  },
  {
    title: 'Insightful Statistics',
    description:
      'Visualize patterns and trends in wrongful convictions through interactive charts and geographic data.',
  },
  {
    title: 'Educational Resources',
    description:
      'Access research, articles, and organizations working to prevent wrongful convictions and support exonerees.',
  },
]
