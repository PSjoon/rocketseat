//esquerda page

import { CopyrightFooter } from '@/components/CopyrightFooter'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SingIn } from '@/components/SingIn'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import { cookies } from 'next/headers'

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
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJam.variable} font-sans bg-gray-900 text-gray-100`}>
        <main className="grid grid-cols-2 min-h-screen">

          {/*Left*/}
            <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
              {/*Blur*/}
              <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full" />
              {/*Stripes*/}
              <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes "/ >

              {isAuthenticated ? <Profile/> : <SingIn />}
              <Hero />
              <CopyrightFooter />
            </div>


          {/*Right*/}
            <div className="flex max-h-screen overflow-y-scroll flex-col bg-[url(../assets/bg-stars.svg)] bg-cover">
              {children}
            </div>
        </main>

      </body>
    </html>
  )
}
