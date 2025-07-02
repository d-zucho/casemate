'use client'
import CountUp from 'react-countup'
// import NumberFlow, { type Value } from '@number-flow/react'
import ScrollTrigger from '@ppasmik/react-scroll-trigger'
import { useState } from 'react'
import { div } from 'motion/react-client'

interface AnimatedStatsProps {
  num: number
}

const AnimatedStats = ({ num }: AnimatedStatsProps) => {
  // const [value, setValue] = useState<number>(num)
  const [visible, setVisible] = useState(false)

  const onEnterViewport = () => {
    setVisible(true)
  }

  // const onExitViewport = () => {
  //   setVisible(false)
  // }

  return (
    <div>
      {/* 
      to use scrolltrigger so that it only activated the component the first time it enters the viewport we need to add
      */}
      <ScrollTrigger
        component={'div'}
        onEnter={() => onEnterViewport()}
        // onExit={() => onExitViewport()}
      >
        <div>{visible ? <CountUp end={num} duration={2} /> : <div>0</div>}</div>
      </ScrollTrigger>
    </div>
  )
}

export default AnimatedStats
