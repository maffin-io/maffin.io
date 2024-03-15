import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import Link from 'next/link'
import GreenTick from './GreenTick'

export default function Zigzag() {
  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="grid gap-20">
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image
                  src={FeatImage01}
                  className="max-w-full mx-auto md:max-w-none h-auto shadow-2xl rounded-lg shadow-cyan-700 duration-300"
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-cyan-600 mb-2">Dashboards, dashboards everywhere</div>
                  <h3 className="h3 mb-3">All your finances. Here.</h3>
                  <p className="text-gray-400 mb-4">
                    Stay on top of your Money's journey with beautiful graphs and custom categories.
                  </p>
                  <ul className="text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <GreenTick />
                      <span>Cash flow with Sankey diagrams</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <GreenTick />
                      <span>Net worth evolution for each asset</span>
                    </li>
                    <li className="flex items-center">
                      <GreenTick />
                      <span>Create custom categories</span>
                    </li>
                  </ul>
                  <div className="mt-7">
                    <Link
                      href="https://demo.maffin.io/dashboard/accounts/f16959f1-dd0b-42bc-b0e8-6b82c9c"
                      className="btn-cta"
                      target="_blank"
                    >
                      Check it out!
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image
                  src={FeatImage02}
                  className="max-w-full mx-auto md:max-w-none h-auto shadow-2xl rounded-lg bg-slate-200 shadow-violet-600"
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-cyan-600 mb-2">Investments? yes</div>
                  <h3 className="h3 mb-3">Your investments on track</h3>
                  <p className="text-gray-400 mb-4">
                    View your investments evolution, track your RSUs with custom commodities.
                  </p>
                  <ul className="text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <GreenTick />
                      <span>Custom commodities for custom investments</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <GreenTick />
                      <span>Detailed insights on your positions</span>
                    </li>
                    <li className="flex items-center">
                      <GreenTick />
                      <span>Prices synced with Yahoo</span>
                    </li>
                  </ul>
                  <div className="mt-7">
                    <Link
                      href="https://demo.maffin.io/dashboard/accounts/1899043a-a21a-447a-87d9-3abd84e"
                      className="btn-cta"
                      target="_blank"
                    >
                      Check it out!
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto shadow-2xl rounded-lg bg-slate-200 shadow-green-600"
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-cyan-600 mb-2">Transparency, our value</div>
                  <h3 className="h3 mb-3">Your financial data is yours</h3>
                  <p className="text-gray-400 mb-4">
                    We can't and we don't want to see your data.
                  </p>
                  <ul className="text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <GreenTick />
                      <span>Your data never makes it to our servers</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <GreenTick />
                      <span>It is stored in your Google drive</span>
                    </li>
                    <li className="flex items-center">
                      <GreenTick />
                      <span>You can remove it whenever you want</span>
                    </li>
                  </ul>
                  <div className="mt-7">
                    <Link
                      href="https://demo.maffin.io/dashboard/accounts/1899043a-a21a-447a-87d9-3abd84e"
                      className="btn-cta"
                      target="_blank"
                    >
                      Check it out!
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
