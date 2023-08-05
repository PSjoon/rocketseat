import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const baiJam = Bai_Jamjuree({ subsets: ['latin'], weight: '700', variable: '--font-baiJam' })

export const metadata: Metadata = {
  title: 'NLW SpaceTime',
  description: 'Uma cápsula do tempo cosntruída com React, Next.js, TailwindCSS e Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJam.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
