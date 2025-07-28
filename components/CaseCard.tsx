import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { MapPin } from 'lucide-react'

const CaseCard = () => {
  return (
    <>
      <Card className='w-[300px] h-[500px] relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 px-2 pt-2 bg-my-orange-50'>
        {/* <CardHeader className=''> */}
        <CardContent className='px-2'>
          <div className=''>
            <Image
              src={'/images/H_About.png'}
              alt='Case Image'
              width={500}
              height={300}
              className='rounded-lg'
            />
            <div>
              <div>
                <MapPin className='text-green-500 size-5' />
                <span>Austin, TXsss</span>
              </div>
              <div></div>
            </div>
          </div>
          {/* </CardHeader> */}
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardContent>

        <CardFooter className='flex gap-2 px-2'>
          <span className='text-my-orange-800 bg-my-orange-100 px-2 rounded-full py-1 text-xs'>
            Witness Tampering
          </span>
          <span className='text-my-orange-800 bg-my-orange-100 px-2 rounded-full py-1 text-xs'>
            False Testimony
          </span>
        </CardFooter>
      </Card>
    </>
  )
}

export default CaseCard
