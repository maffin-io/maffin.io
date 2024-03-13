import Link from 'next/link'
import Image from 'next/image';

import MobileMenu from './mobile-menu'
import Logo from '@/public/images/logo-image.png';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            <Link href="/" className="flex items-center" aria-label="Cruip">
              <Image
                src={Logo}
                alt="logo"
                width="50"
              />
              <span className="font-bold text-4xl text-slate-600 hidden lg:block">affin</span>
            </Link>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://demo.maffin.io"
                  className="btn-sm bg-opacity-80 text-white ml-3"
                  target="_blank"
                >
                  Try our demo
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
