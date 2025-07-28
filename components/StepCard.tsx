import React from 'react'

const StepCard = ({
  step,
  icon: Icon,
  title,
  description,
}: {
  step: number
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}) => {
  return (
    <article className='bg-my-orange-50 py-5 px-5 shadow-md hover:shadow-lg flex flex-col gap-2 rounded-2xl max-md:w-md max-md:mx-auto border-1 border-my-orange-200/40 hover:scale-[102%] transition-transform duration-300'>
      <div className='bg-my-orange-600 size-10 rounded-full flex items-center justify-center'>
        <Icon className='text-white' />
      </div>
      <h3 className='text-2xl font-semibold text-my-title mb-1'>{title}</h3>
      {/* <p className='text-card-foreground'>{description}</p> */}
      <p className='text-muted-foreground'>{description}</p>
      <div></div>
    </article>
  )
}

export default StepCard
