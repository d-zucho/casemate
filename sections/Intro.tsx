import MaxWidthWrapper from '@/components/MaxWidthComponent'
import { INTRO_STATS } from '@/constants'
import Image from 'next/image'

const Intro = () => {
  return (
    <section className='mt-20'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-items-center md:justify-between text-center md:text-left gap-10'>
          <div>
            <h2 className='md:text-4xl font-bold text-3xl text-my-title-2 max-w-xl'>
              Tracking wrongful convictions in the U.S.
            </h2>
            {/* <p className='text-muted-foreground'>
              See the stories. Learn the patterns.
            </p> */}
            <p className='text-my-hero-orange font-semibold'>
              See the stories. Learn the patterns.
            </p>

            {/*  stats  */}
            <div className='mt-10 flex space-between w-full md:gap-4'>
              {INTRO_STATS.map((stat, index) => (
                <div key={index} className='w-full'>
                  <h3 className='md:text-4xl text-2xl font-semibold text-my-body-2'>
                    {stat.number}
                  </h3>
                  <p className='text-my-green-500 font-medium mt-2'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='max-sm:w-[450px]'>
            <div className='w-full'>
              <Image
                src={'/images/H_Intro.png'}
                width={400}
                height={400}
                // width={600}
                // height={400}
                alt='Tracking'
                className='w-full max-md:w-[500px] max-w-full overflow-hidden object-center rounded-lg '
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Intro
