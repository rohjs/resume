import styled from 'styled-components'

export const StyledCard = styled.article`
  padding: 1.5rem 0;
  font-size: 1rem;
  line-height: 1.5;
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

  h2,
  h3,
  h4,
  li {
    a::after {
      margin-left: 0.15em;
      font-weight: 400;
      content: '↗️';
    }
  }

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
    padding: 3rem 0;
    font-size: 1.2rem;
    line-height: 1.6;

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

    li::before {
      top: 0.75rem;
    }
  }
`

export const StyledWorkCard = styled(StyledCard)`
  header {
    flex-shrink: 0;

    strong {
      display: block;
      font-size: 0.75rem;
      font-weight: 400;
      letter-spacing: 0;
      color: #3f4150;
    }
  }

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
      user-select: none;

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

      strong {
        font-size: 0.75rem;
        line-height: 1.3;
      }
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
