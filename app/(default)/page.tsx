export const metadata = {
  title: 'Home - Maffin',
  description: 'Personal finance made easy',
}

import Hero from '@/components/hero'
import Header from '@/components/ui/header'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-tr from-white to-cyan-600/50">
        <Header />
        <Hero />
      </div>
      <Zigzag />
      <Newsletter />
    </>
  )
}
