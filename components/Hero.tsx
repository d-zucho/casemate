import MaxWidthWrapper from '@/components/MaxWidthComponent'

const Hero = () => {
  return (
    <div className={'h-[calc(100vh_-_60px)]  bg-[url("/images/hero-bg.png")] w-full bg-cover bg-center'}>
      <MaxWidthWrapper>
        <div></div>
      </MaxWidthWrapper>
    </div>
  )
}
export default Hero
