import type { Metadata } from 'next'
import { Inter, Architects_Daughter } from 'next/font/google'
import Script from 'next/script'

import './css/style.css'

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

export const metadata: Metadata = {
  title: 'Maffin',
  description: 'Navigate your financial journey with clarity and confidence',
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

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SV6Z6WNKH8');
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-SV6Z6WNKH8`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
 
