import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


import PrelineScript from "./components/PrelineScript";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SlideMap',
  description: 'Donno What To Say LOL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <PrelineScript />

    </html>
  )
}
