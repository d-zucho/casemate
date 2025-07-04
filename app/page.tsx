import Hero from '@/components/Hero'
import Intro from '@/sections/Intro'
import NewsCard from '@/components/NewsCard'
import HomeAbout from '@/sections/HomeAbout'
import HomeExplore from '@/sections/HomeExplore'

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <NewsCard />
      <HomeAbout />
      <HomeExplore />
    </div>
  )
}
