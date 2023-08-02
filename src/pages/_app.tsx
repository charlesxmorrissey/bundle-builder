import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import PageLayout from 'components/Atoms/PageLayout'
import { ProductsProvider } from 'components/Providers/ProductsProvider'
import { METADATA } from 'constant'

import 'react-loading-skeleton/dist/skeleton.css'
import 'assets/styles/app.css'

const inter = Inter({ subsets: ['latin'] })

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>{METADATA.name}</title>
      <meta content={METADATA.name} name='description' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link href='/favicon.ico' rel='icon' />
    </Head>

    <style global jsx>{`
      :root {
        --font-inter: ${inter.style.fontFamily};
      }
    `}</style>

    <PageLayout>
      <ProductsProvider>
        <Component {...pageProps} />
      </ProductsProvider>
    </PageLayout>
  </>
)

export default App
