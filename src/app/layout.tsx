import './globals.css'
import { Bai_Jamjuree, Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { 
  Roboto_Flex as Roboto,
  Bai_Jamjuree  as BaiJamjuree,
} from 'next/font/google'

const inter = Inter({ subsets: ['latin'], })
const roboto = Roboto({subsets: ['latin'], variable:'--font-roboto'})
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'Spacetime',
  description: 'Uma cápsula do tempo construída com React JS, NextJs, Tailwind e Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
