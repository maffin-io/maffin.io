import React from 'react'
import Link from 'next/link'

import Logo from '@/public/images/logo-image.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                <Link href="/" className="inline-block" aria-label="Maffin">
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={50}
                  />
                </Link>
              </div>
              <div className="text-gray-400 text-sm mr-4">&copy; Maffin.io. All rights reserved.</div>

              <ul className="flex mb-4 md:order-1 md:mb-0">
                <li>
                  <Link
                    href="https://github.com/maffin-io"
                    className="flex justify-center items-center text-cyan-600 rounded-full transition duration-150 ease-in-out"
                    target="_blank"
                    aria-label="Github"
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3">
              <div className="text-sm justify-end">
                <h6 className="font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="https://blog.maffin.io"
                      className="text-gray-400 transition duration-150 ease-in-out"
                      target="_blank"
                    >
                      Our blog
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="https://blog.maffin.io/docs"
                      className="text-gray-400 transition duration-150 ease-in-out"
                      target="_blank"
                    >
                      Help center
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="https://demo.maffin.io"
                      className="text-gray-400 transition duration-150 ease-in-out"
                      target="_blank"
                    >
                      Check our demo
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="https://changemap.co/maffin/maffin-app/"
                      className="text-gray-400 transition duration-150 ease-in-out"
                      target="_blank"
                    >
                      Suggestions?
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2">
                <iframe
                  src="https://embeds.beehiiv.com/449483bd-b041-44a8-af2a-7e21b974d218?slim=true"
                  data-test-id="beehiiv-embed"
                  scrolling="no"
                  className="m-0 w-full"
                 />
              </div>
            </div>

          </div>

          <div className="md:flex md:items-center md:justify-between">
          </div>
        </div>
      </div>
    </footer>
  )
}
