import CaseCard from '@/components/CaseCard'
import MaxWidthWrapper from '@/components/MaxWidthComponent'
import SectionHeader from '@/components/SectionHeader'

const FeaturedCases = () => {
  return (
    <section className='my-2'>
      <MaxWidthWrapper>
        <SectionHeader label='Explore'>Featured Cases</SectionHeader>

        <div className='mt-10'>
          <CaseCard />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default FeaturedCases
