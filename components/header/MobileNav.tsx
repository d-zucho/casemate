'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

import {Menu} from 'lucide-react'
import Image from 'next/image'
import {VisuallyHidden} from '@radix-ui/react-visually-hidden'
import {NAV_LINKS} from '@/constants'
import Link from 'next/link'


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={32} className={'hover:cursor-pointer'}/>
      </SheetTrigger>
      <SheetContent className={'h-full bg-my-orange-50'}>
        <SheetHeader>
          <SheetTitle>
            <Image src={'/images/CM_Logo-dark.svg'} alt={'CaseMate'} width={150} height={50}/>
          </SheetTitle>
          <VisuallyHidden>
            <SheetDescription>See the stories. Learn the patterns.</SheetDescription>
          </VisuallyHidden>
        </SheetHeader>
        <div className={'mt-20 px-10'}>
          <nav className={'flex flex-col justify-between items-start gap-10'}>
            {
              NAV_LINKS.map(({label, href } : { label: string, href: string}) => (
                <SheetClose key={label} asChild>
                  <Link href={href} className={'font-medium'}>
                  <div className={'w-fit relative overflow-x-clip group'}>

                                  <span className={'text-2xl font-medium font-source'}>
                                      {label}</span>
                    <div
                      className={'w-full h-0.5 rounded-full bg-my-orange-500 absolute bottom-0 -left-full group-hover:left-0 group-hover:right-0 transition-all duration-400'}></div>

                  </div>
                </Link></SheetClose>
              ))
            }
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav
