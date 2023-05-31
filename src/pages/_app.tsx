import '~/styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { defaultSEO } from '~/config/seo'
import { LogoLarge } from '~/svg'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`flex min-h-screen flex-col px-4 md:px-8 py-4 xl:py-8 bg-gradient-to-b xl:bg-gradient-to-bl from-violet-950 via-zinc-950 to-black`}
    >
      <div className="flex items-center justify-between">
        <LogoLarge className="w-20 xl:w-24 text-white" />
      </div>
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
    </main>
  )
}
