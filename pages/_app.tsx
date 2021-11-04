import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

import Layout from '../components/layout'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Spoqa Han Sans Neo', 'Helvetica Neue', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *::selection {
    color: #fff;
    background-color: #000;
  }

  html {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-size: 16px;
  }

  body {
    color: #191a20;
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: none;
    box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    padding: 0;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }

  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
`

export default function App({ Component, pageProps }: AppProps) {
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
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
            rel="stylesheet"
            type="text/css"
          ></link>
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
