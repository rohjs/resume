import styled from 'styled-components'

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  main {
    flex-grow: 1;
    width: 100%;
    padding: 3rem 0;
    overflow-y: auto;

    > div {
      max-width: 45rem;
      padding: 0 16px;
      margin: 0 auto;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    main {
      padding: 6rem 0;
    }
  }
`

export const StyledProgressBar = styled.div`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: 12px;

  .bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #191a20;
    transform: translate3d(-100%, 0, 0);
    transition: transform 200ms;
  }

  @media screen and (min-width: 768px) {
    height: 20px;
  }
`

export const StyledCover = styled.section`
  margin-bottom: 3rem;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -0.03em;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.4;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 4.5rem;

    h1 {
      margin-bottom: 3rem;
      font-size: 6rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`

export const StyledCard = styled.article`
  padding: 1.5rem 0;
  font-size: 1rem;
  line-height: 1.4;
  letter-spacing: -0.015em;

  &:not(:last-child) {
    border-bottom: 1px solid #e0e2e7;
  }

  header {
    margin-bottom: 1.5rem;

    h2 {
      padding-bottom: 0.25rem;
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
      line-height: 1.2;
      word-break: break-all;
    }

    dl {
      font-size: 0.75rem;
      letter-spacing: 0;
      color: #3f4150;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 3rem 0;
    font-size: 1.25rem;

    header {
      h2 {
        font-size: 1.5rem;
      }

      dl {
        margin-bottom: 0.25rem;
        font-size: 1rem;
        line-height: 1.3;
      }
    }
  }
`

export const StyledWorkCard = styled(StyledCard)`
  .content {
    flex-grow: 1;

    h3 {
      padding-bottom: 0.25rem;
      font-size: 1rem;
      line-height: 1.2;
    }

    h4 {
      padding: 0.15rem 0;
      font-size: 0.8rem;

      &:not(:first-child) {
        margin-top: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;

    header {
      width: 39%;
      padding-right: 2rem;
    }

    .content {
      flex-grow: 1;

      h3 {
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
      }

      h4 {
        padding: 0.25rem 0;
        font-size: 1.2rem;

        &:not(:first-child) {
          margin-top: 1.5rem;
        }
      }
    }
  }
`

export const StyledSkillCard = styled(StyledCard)`
  li {
    position: relative;
    padding-left: 0.75rem;

    &::before {
      position: absolute;
      top: 0.5rem;
      left: 0;
      width: 4px;
      height: 4px;
      background-color: #000;
      border-radius: 50%;
      content: '';
    }
  }

  @media screen and (min-width: 768px) {
    li::before {
      top: 0.75rem;
    }
  }
`

export const StyledEtcCard = styled(StyledCard)``
