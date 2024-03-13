import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Maffin',
  description: 'Personal finance made easy',
  icons: {
    icon: [
      {
        url: '/images/logo-image.png',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-slate-100 tracking-tight`}>
        <div
          className="flex flex-col min-h-screen overflow-hidden"
        >
          {children}
        </div>
      </body>
    </html>
  )
}
 
