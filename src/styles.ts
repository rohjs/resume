import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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

export const StyledSection = styled.section`
  padding: 1.5rem 0 3rem;

  h1 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.02em;
    user-select: none;

    &::after {
      margin-left: 0.1em;
      opacity: 0.25;
      content: ';';
    }
  }

  @media screen and (min-width: 768px) {
    padding: 2.5rem 0 4.5rem;

    h1 {
      font-size: 2.4rem;
    }
  }
`
