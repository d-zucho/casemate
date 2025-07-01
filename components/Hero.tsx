import MaxWidthWrapper from '@/components/MaxWidthComponent'
import HeroBadge from '@/components/HeroBadge'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section
      className={
        'h-[calc(100vh_-_60px)]  bg-[url("/images/hero-bg.png")] w-full bg-cover bg-center overflow-hidden'
      }
    >
      <MaxWidthWrapper>
        <div className='h-full w-full flex items-start flex-col justify-center'>
          <HeroBadge />
          <div className={'flex justify-center flex-col'}>
            <div className={'mt-5'}>
              <h1 className={'flex flex-col text-6xl md:text-7xl font-bold'}>
                <span className={'text-white'}>Unveiling Truth</span>
                <span className={'text-my-hero-orange'}>Restoring Justice</span>
              </h1>
              <p className={'max-w-md mt-5 text-white/60'}>
                CaseMate brings wrongful conviction data to life—highlighting
                systemic issues, honoring those affected, and empowering public
                awareness.
              </p>
            </div>
            <div className='space-x-6'>
              <Button className='bg-my-orange-600 hover:bg-my-orange-500 text-white mt-10 relative shadow-[inset_-4px_-4px_6px_0px_rgba(0,_0,_0,_0.5)] group hover:shadow-none transition-all duration-400'>
                <div className='absolute inset-0 rounded-sm shadow-[inset_4px_5px_6px_0px_rgba(255,_255,_255,_0.2)] group-hover:hidden' />
                <span>Explore cases</span>
                <ArrowRight />
              </Button>
              <Button className='relative bg-my-btn-gray text-black px-3 py-2 rounded-sm shadow-[inset_-4px_-4px_6px_0px_rgba(0,_0,_0,_0.5)] group hover:shadow-none transition-all duration-400 ring-0 focus:ring-0 outline-none hover:bg-gray-200'>
                <div className='absolute inset-0 rounded-sm shadow-[inset_4px_5px_6px_0px_rgba(255,_255,_255,_0.7)] group-hover:hidden' />
                About the project
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
export default Hero
