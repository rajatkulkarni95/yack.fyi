import '~/styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { defaultSEO } from '~/config/seo'
import { LogoLarge } from '~/svg'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
    </React.Fragment>
  )
}
