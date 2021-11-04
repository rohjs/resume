import styled from 'styled-components'

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
