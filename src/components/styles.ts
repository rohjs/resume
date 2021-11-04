import styled from 'styled-components'

export const StyledCover = styled.section`
  padding-top: 1.5rem;
  margin-bottom: 3rem;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -0.03em;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.7;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 4.5rem;

    h1 {
      margin-bottom: 3rem;
      font-size: 6rem;
    }

    p {
      font-size: 1.75rem;
    }
  }
`
