'use client'
import AnimatedStats from '@/components/AnimatedStats'
import MaxWidthWrapper from '@/components/MaxWidthComponent'
import { INTRO_STATS } from '@/constants'
import Image from 'next/image'
import { useState } from 'react'

const Intro2 = () => {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <section className='pt-20 md:py-20'>
      <MaxWidthWrapper>
        <div className='flex flex-col md:flex-row items-center justify-betweenq gap-12 mt-14 lg:mt-28'>
          <div className='w-1/2'>
            <div>
              <h2 className='lg:text-4xl font-bold text-3xl text-my-title-2 max-w-xl'>
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
                      <AnimatedStats num={stat.number} />
                    </h3>
                    <p className='text-my-green-500 font-medium mt-2'>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='w-3/4'>
            <Image
              src={'/images/H_Intro.png'}
              alt='Intro Image'
              width={500}
              height={500}
              className='w-full rounded-2xl'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Intro2
