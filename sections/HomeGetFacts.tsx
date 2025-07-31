import MaxWidthWrapper from '@/components/MaxWidthComponent'
import SectionHeader from '@/components/SectionHeader'
import { GET_THE_FACTS } from '@/constants'
import Image from 'next/image'

const HomeGetFacts = () => {
  return (
    <section className='py-20 relative overflow-hidden'>
      <MaxWidthWrapper>
        <SectionHeader label='Analyze'>Get the Facts</SectionHeader>
        <div className='grid grid-cols-1 md:grid-cols-[375px_1fr] items-center gap-8 mt-10 relative'>
          <div className='justify-center flex flex-col gap-5 items-center'>
            {GET_THE_FACTS.map((fact, index) => (
              <div
                key={index}
                className='bg-white p-4 shadow-md rounded-md max-w-sm'
              >
                <h3 className='text-2xl font-semibold text-my-green-500 mb-2'>
                  {fact.title}
                </h3>
                <p className='text-muted-foreground'>{fact.description}</p>
              </div>
            ))}
          </div>

          <div className='justify-center flex flex-col items-center md:block '>
            <Image
              src='/images/img_w_graph.png'
              alt='Graph showing data'
              width={600}
              height={400}
              className='pointer-events-none max-w-[500px]'
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <div className='w-full absolute inset-x-0 bg-[url("/bg-shape-02.svg")] bg-center bg-no-repeat bg-cover h-[500px] -z-10 -bottom-50' />
    </section>
  )
}

export default HomeGetFacts
