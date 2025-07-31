import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { CaseInfo } from '@/types'
import { Button } from './ui/button'

const CaseCard = ({
  title,
  description,
  location,
  yearsServed,
  imageUrl,
  tags,
}: CaseInfo) => {
  return (
    <>
      <Card className='w-[300px]  relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 pt-2 bg-white'>
        {/* <CardHeader className=''> */}
        <CardContent className='px-2'>
          <div className='flex'>
            <Image
              src={'/images/H_About.png'}
              alt='Case Image'
              width={400}
              height={300}
              className='rounded-lg object-cover w-full shadow-sm'
            />
            <div className='mt-2 flex items-center justify-between px-1'>
              <div className='flex items-center gap-1 w-fit'>
                <MapPin className='text-green-500 size-5' />
                <span className='text-xs'>{location}</span>
              </div>

              <div className='flex items-center gap-1 w-fit mr-0.5'>
                <Clock className='text-green-500 size-5' />
                <span className='text-xs'>{yearsServed} years served</span>
              </div>
            </div>
          </div>
          {/* </CardHeader> */}
          <div className='mt-4 px-1 flex flex-col gap-2'>
            <CardTitle>{title}</CardTitle>
            <CardDescription className='line-clamp-3'>
              {description}
            </CardDescription>
            <Button
              variant={'link'}
              className='flex gap-1 items-center w-fit hover:cursor-pointer text-my-green-500 hover:scale-[102%] transition-all duration-200 !pl-0'
            >
              <span className='text-xs text-muted-foreground'>Read more</span>
              <ArrowRight className='text-my-green-500 size-3' />
            </Button>
          </div>
        </CardContent>

        <CardFooter className='flex gap-2 px-2 mt-auto '>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='text-my-orange-800 bg-my-orange-100 px-2 rounded-full py-1 text-xs hover:cursor-pointer'
            >
              {tag}
            </span>
          ))}
        </CardFooter>
      </Card>
    </>
  )
}

export default CaseCard
