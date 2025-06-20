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

import { Menu } from 'lucide-react'
import Image from 'next/image'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={32} className={'hover:cursor-pointer'} />
      </SheetTrigger>
      <SheetContent className={'h-full bg-my-orange-50'}>
        <SheetHeader>
          <SheetTitle>
            <Image
              src={'/images/CM_Logo-dark.svg'}
              alt={'CaseMate'}
              width={150}
              height={50}
            />
          </SheetTitle>
          <VisuallyHidden>
            <SheetDescription>
              See the stories. Learn the patterns.
            </SheetDescription>
          </VisuallyHidden>
        </SheetHeader>
        <div className={'mt-10 px-10'}>
          <nav className={'flex flex-col justify-between items-start gap-10'}>
            {NAV_LINKS.map(
              ({ label, href }: { label: string; href: string }) => (
                <SheetClose key={label} asChild>
                  <Link href={href} className={'font-medium'}>
                    <div className={'w-fit relative overflow-x-clip group'}>
                      <span className={'text-xl font-medium font-source'}>
                        {label}
                      </span>
                      <div
                        className={
                          'w-full h-0.5 rounded-full bg-my-orange-500 absolute bottom-0 -left-full group-hover:left-0 group-hover:right-0 transition-all duration-400'
                        }
                      ></div>
                    </div>
                  </Link>
                </SheetClose>
              )
            )}
          </nav>
          {/* buttons */}
          <div className='flex flex-col gap-3 mt-8'>
            <Button
              className={
                'bg-my-green-500 hover:bg-my-green-400 transition-colors duration-400 hover:cursor-pointer font-medium  relative shadow-[inset_-4px_-4px_6px_0px_rgba(0,_0,_0,_0.5)] group hover:shadow-none'
              }
            >
              <div className='absolute inset-0 rounded-sm shadow-[inset_4px_5px_6px_0px_rgba(255,_255,_255,_0.2)] group-hover:hidden' />
              Subscribe
            </Button>

            <Button
              className={cn(
                'min-w-[100px]',
                'bg-my-orange-600 hover:bg-my-orange-400 transition-colors duration-500 font-medium border-b-2 relaive shadow-[inset_-4px_-4px_6px_0px_rgba(0,_0,_0,_0.3)] group hover:shadow-none relative hover:cursor-pointer'
              )}
            >
              <div className='absolute inset-0 rounded-sm shadow-[inset_4px_5px_6px_0px_rgba(255,_255,_255,_0.2)] group-hover:hidden' />
              Sign in
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav
