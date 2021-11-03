import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '../components/layout'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>이력서</title>
        <meta name="description" content="이력서" />
        <link
          href="http://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
