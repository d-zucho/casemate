import CaseCard from '@/components/CaseCard'
import MaxWidthWrapper from '@/components/MaxWidthComponent'
import SectionHeader from '@/components/SectionHeader'
import { CASES } from '@/constants'

const FeaturedCases = () => {
  return (
    <section className='py-20'>
      <MaxWidthWrapper>
        <SectionHeader label='Explore'>Featured Cases</SectionHeader>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-lg:justify-items-center'>
          {CASES.map((caseItem) => (
            <CaseCard key={caseItem.title} {...caseItem} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default FeaturedCases
