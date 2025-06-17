import Image from 'next/image'
import Link from 'next/link'
import {NAV_LINKS} from '@/constants'
import MaxWidthWrapper from '@/components/MaxWidthComponent'
import MobileNav from '@/components/header/MobileNav'


const Header = () => {
  return (
    <header className="w-full max-h-[60px] py-3">
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between">

          <div>
            <Image
              src={'/images/CM_Logo-dark.svg'}
              alt="Logo"
              width={150}
              height={50}
            />
          </div>

          <div className="flex items-center gap-5 max-md:hidden">
            {NAV_LINKS.map(({label, href}: { label: string, href: string }) => (
              <Link key={label} href={href} className={'font-medium'}>
                <div className={'w-fit relative overflow-x-clip group'}>

                  <span className={''}>
                      {label}</span>
                  <div className={'w-full h-0.5 rounded-full bg-my-orange-500 absolute bottom-0 -left-full group-hover:left-0 group-hover:right-0 transition-all duration-400'}></div>

                </div>
              </Link>
            ))}
          </div>
        <div className={'md:hidden'}>
          <MobileNav />
        </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
