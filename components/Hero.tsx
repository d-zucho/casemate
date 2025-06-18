import MaxWidthWrapper from '@/components/MaxWidthComponent'
import HeroBadge from '@/components/HeroBadge'

const Hero = () => {
  return (
    <section className={'h-[calc(100vh_-_60px)]  bg-[url("/images/hero-bg.png")] w-full bg-cover bg-center overflow-hidden'}>
      <MaxWidthWrapper>
        <HeroBadge />


      </MaxWidthWrapper>
    </section>
  )
}
export default Hero
