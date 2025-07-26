import MaxWidthWrapper from '@/components/MaxWidthComponent'
import { AWARD_ICONS } from '@/constants'
import Image from 'next/image'

const AwardsSection = () => {
  return (
    <section className='py-20'>
      <MaxWidthWrapper>
        <div className='flex gap-10 md:gap-20 items-center justify-center flex-wrap'>
          {AWARD_ICONS.map((award) => (
            <div key={award.label} className='w-[75px]'>
              <Image
                src={award.img}
                alt={award.label}
                width={100}
                height={100}
                className='object-contain'
              />
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AwardsSection
