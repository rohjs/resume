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
