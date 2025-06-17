import MaxWidthWrapper from '@/components/MaxWidthComponent'

const Hero = () => {
  return (
    <div className={'h-[calc(100vh_-_60px)] bg-red-300'}>
      <MaxWidthWrapper>
        <div></div>
      </MaxWidthWrapper>
    </div>
  )
}
export default Hero
