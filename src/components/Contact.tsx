import { StyledCard } from './Cards/styles'

export const Contact = () => {
  return (
    <StyledCard as="div">
      <ul>
        <li>
          <a
            href="mailto:roh.woohyeon@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            이메일
          </a>
        </li>
        <li>
          <a href="https://github.com/rohjs" target="_blank" rel="noreferrer">
            깃허브
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rohwoohyeon/"
            target="_blank"
            rel="noreferrer"
          >
            링크드인
          </a>
        </li>
      </ul>
    </StyledCard>
  )
}
