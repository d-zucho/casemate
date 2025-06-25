import MaxWidthWrapper from '@/components/MaxWidthComponent'
import { INTRO_STATS } from '@/constants'
import Image from 'next/image'

const Intro = () => {
  return (
    <section className='mt-20'>
      <MaxWidthWrapper>
        <div>
          <div>
            <h2 className='text-4xl font-bold text-my-title-2 max-w-xl'>
              Tracking wrongful convictions in the U.S.
            </h2>
            {/* <p className='text-muted-foreground'>
              See the stories. Learn the patterns.
            </p> */}
            <p className='text-my-hero-orange font-bold'>
              See the stories. Learn the patterns.
            </p>

            {/*  stats  */}
            <div className='flex flex-col md:flex-row md:gap-15 mt-8 text-center md:text-left'>
              {/* stats container */}
              {INTRO_STATS.map((stat, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center md:items-start justify-start'
                >
                  <p className='text-3xl font-bold text-my-green-500'>
                    {stat.number}
                  </p>
                  <p className='text-sm font-bold text-muted-foreground'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className='w-full'>
              <Image
                src={'/images/H_Intro.png'}
                // width={500}
                // height={500}
                width={600}
                height={400}
                alt='Tracking'
                className='object-cover max-w-full overflow-hidden'
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Intro
