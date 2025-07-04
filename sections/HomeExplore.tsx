import MaxWidthWrapper from '@/components/MaxWidthComponent'
import SectionHeader from '@/components/SectionHeader'
import StepCard from '@/components/StepCard'
import { HOW_IT_WORKS_STEPS } from '@/constants'
import { div } from 'motion/react-client'

const HomeExplore = () => {
  return (
    <section className='mt-20'>
      <MaxWidthWrapper>
        <SectionHeader label='Explore'>How it Works</SectionHeader>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
          {HOW_IT_WORKS_STEPS.map(({ step, icon, description, title }) => {
            const IconComponent = icon
            return (
              <StepCard
                key={step}
                step={step}
                icon={IconComponent}
                title={title}
                description={description}
              />
            )
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeExplore
