import Hero from '@/components/Hero'
import Intro from '@/sections/Intro'
import NewsCard from '@/components/NewsCard'
import HomeAbout from '@/sections/HomeAbout'
import HomeExplore from '@/sections/HomeExplore'
import AwardsSection from '@/sections/AwardsSection'
import FeaturedCases from '@/sections/FeaturedCases'
import HomeGetFacts from '@/sections/HomeGetFacts'

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <NewsCard />
      <HomeAbout />
      <HomeExplore />
      <AwardsSection />
      <FeaturedCases />
      <HomeGetFacts />
    </div>
  )
}
