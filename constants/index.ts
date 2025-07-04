// types dont need to be imported because they are in a file that is a .d.ts which means it is a typescript declaration file
// and typescript will automatically include it in the project

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
