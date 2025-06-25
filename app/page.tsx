import Image from 'next/image'
import Hero from '@/components/Hero'
import Intro from '@/sections/Intro'

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
    </div>
  )
}
