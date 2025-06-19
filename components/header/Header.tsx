import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import MaxWidthWrapper from '@/components/MaxWidthComponent'
import MobileNav from '@/components/header/MobileNav'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Header = () => {
  return (
    <header className='w-full max-h-[60px] py-3'>
      <MaxWidthWrapper>
        <nav className='flex items-center justify-between'>
          <div className={'flex items-center gap-12'}>
            {/* logo */}
            <Image
              src={'/images/CM_Logo-dark.svg'}
              alt='Logo'
              width={150}
              height={50}
            />

            {/*  Links */}
            <div className='flex items-center gap-5 max-md:hidden'>
              {NAV_LINKS.map(
                ({ label, href }: { label: string; href: string }) => (
                  <Link key={label} href={href} className={'font-medium'}>
                    <div className={'w-fit relative overflow-x-clip group'}>
                      <span className={''}>{label}</span>
                      <div
                        className={
                          'w-full h-0.5 rounded-full bg-my-orange-500 absolute bottom-0 -left-full group-hover:left-0 group-hover:right-0 transition-all duration-400'
                        }
                      ></div>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className={'space-x-4'}>
            <Button
              className={
                'bg-my-green-500 hover:bg-my-green-300 transition-colors duration-300 hover:cursor-pointer font-medium  relative shadow-[inset_-4px_-4px_6px_0px_rgba(0,_0,_0,_0.5)] group hover:shadow-none'
              }
            >
              <div className='absolute inset-0 rounded-sm shadow-[inset_4px_5px_6px_0px_rgba(255,_255,_255,_0.2)] group-hover:hidden' />
              Subscribe
            </Button>
            <Button
              className={cn(
                'min-w-[100px]',
                'bg-my-orange-500 hover:bg-my-orange-200 transition-colors duration-300 font-medium border-b-2 relaive shadow-[inset_-4px_-4px_6px_0px_rgba(0,_0,_0,_0.3)] group hover:shadow-none relative'
              )}
            >
              <div className='absolute inset-0 rounded-sm shadow-[inset_4px_5px_6px_0px_rgba(255,_255,_255,_0.2)] group-hover:hidden' />
              Sign in
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className={'md:hidden'}>
            <MobileNav />
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
