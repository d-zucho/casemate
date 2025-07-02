import Image from 'next/image'
import Hero from '@/components/Hero'
import Intro from '@/sections/Intro'
import NewsCard from '@/components/NewsCard'

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <NewsCard />
    </div>
  )
}
