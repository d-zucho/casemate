import MaxWidthWrapper from '@/components/MaxWidthComponent'
import SectionHeader from '@/components/SectionHeader'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const HomeAbout = () => {
  return (
    <section className='max-md:pt-10 pt-8'>
      <MaxWidthWrapper className='relative'>
        {/* Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-items-center md:justify-between text-center md:text-left max-md:gap-10'>
          {/* <div className='grid grid-cols-1 justify-items-center md:grid-cols-6 items-center '> */}
          {/* Image Left */}
          <div className='md:w-[1000px]'>
            {/* <div className='md:col-span-3'> */}
            <Image
              src={'/images/H_About.png'}
              className='rounded-2xl mx-auto md:mx-0 md:-ml-20 h-full object-cove max-w-md md:max-w-[800px]'
              alt='Justice'
              width={700}
              height={500}
            />
          </div>

          {/* Text Right */}
          <div className=''>
            {/* <div className='col-span-3 text-center md:text-left'> */}
            <SectionHeader label='About'>
              Dedicated by Justice,{' '}
              <span className='block'>Driven by Integrity</span>
            </SectionHeader>

            <div className='text-muted-foreground space-y-6 mt-5 max-md:w-lg'>
              <p className=''>
                CaseMate was created to shed light on the stories of those
                wrongfully convicted across the United States. With a focus on
                transparency, accuracy, and empathy, we aim to make complex
                legal cases more accessible and human.{' '}
              </p>
              <p>
                This project exists not just to inform—but to challenge
                assumptions, spark dialogue, and contribute to a future where
                justice is truly just.
              </p>
            </div>
            <Button
              variant='outline'
              className='mt-6 bg-transparent text-muted-foreground group w-[180px] flex justify-center items-center mx-auto md:mx-0'
            >
              <span className=''>Learn More</span>
              <ArrowRight className='size-5  group-hover:translate-x-1 transition ease-in-out duration-300' />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeAbout
