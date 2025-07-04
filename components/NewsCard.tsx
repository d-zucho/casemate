import { NEWS_LOGOS } from '@/constants'
import Image from 'next/image'
import React from 'react'
import MaxWidthWrapper from './MaxWidthComponent'

const NewsCard = () => {
  return (
    <div className='pt-40 mb-40  relative overflow-visible'>
      <div className='bg-[url(/bg-rectangle-1.svg)] bg-no-repeat bg-center bg-cover absolute inset-x-0 -z-10 -bottom-20 top-0 overflow-visible' />
      <MaxWidthWrapper>
        <div className='bg-my-orange-50 w-full rounded-2xl py-10 z-10'>
          <p className='text-center text-sm text-muted-foreground pb-4'>
            With the support of:
          </p>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 items-center justify-items-center gap-4 max-w-6xl mx-auto px-4 max-md:gap-y-12'>
            {NEWS_LOGOS.map(({ src, label, width, height }) => (
              <div key={label}>
                <Image
                  src={src}
                  alt={label}
                  width={width}
                  height={height}
                  className='sm:scale-90'
                />
              </div>
            ))}
          </div>
          {/* <Image src=  */}
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default NewsCard
