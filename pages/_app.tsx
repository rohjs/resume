import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from 'styles'

import Layout from 'components/layout'

export default function App({ Component, pageProps }: AppProps) {
  function getAssetPath(value: string) {
    return process.env.NODE_ENV === 'development' ? '/' : `/resume/${value}`
  }

  return (
    <>
      <GlobalStyle />
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
            href={getAssetPath('images/apple-touch-icon.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={getAssetPath('images/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={getAssetPath('images/favicon-16x16.png')}
          />
          <link rel="icon" href={getAssetPath('favicon.ico')} />
          <link rel="manifest" href={getAssetPath('site.webmanifest')} />
          <link
            href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
            rel="stylesheet"
            type="text/css"
          />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
