import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>이력서 / 노우현</title>
        <meta name="description" content="프론트엔드 개발자 노우현 이력서" />
        <meta
          name="author"
          content="Roh Woohyeon <roh.woohyeon@gmail.com> (https://www.rohwoohyeon.com/)"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="http://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        ></link>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
