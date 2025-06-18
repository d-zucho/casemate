import {AwardIcon} from 'lucide-react'

const HeroBadge = () => {
  return (
    <div className={'mt-10 overflow-hidden rounded-full w-fit'}>
      <div className={'w-fit py-1 px-5 rounded-full bg-dark-tag-bg/60 text-my-orange-500 relative flex gap-1'}>

        <div className={'absolute inset-0 shadow-[inset_0px_2px_3px_-1px_rgba(255,_255,_255,_0.4)]'} />
        <AwardIcon />
        <span>Award winning resource</span>
        <AwardIcon />
        <div className={'absolute bottom-0 inset-x-0 shadow-[inset_4px_-2px_1px_-2px_rgba(0,_0,_0,_0.9)]'} />

        {/*<div className={'w-full h-1 blur-sm bg-black overflow-hidden absolute -bottom-0  inset-x-0'}/>*/}

      </div>
    </div>
  )
}
export default HeroBadge
