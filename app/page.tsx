import Hero from '@/components/Hero'
import Intro from '@/sections/Intro'
import NewsCard from '@/components/NewsCard'
import HomeAbout from '@/sections/HomeAbout'
import HomeExplore from '@/sections/HomeExplore'
import StepCard from '@/components/StepCard'
import { Map } from 'lucide-react'

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
