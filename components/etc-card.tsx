import { StyledEtcCard } from './styles'

type EtcCardProps = {
  data: Data
}

export default function EtcCard({ data }: EtcCardProps) {
  const { title, details, url } = data

  return (
    <StyledEtcCard>
      <header>
        <h2>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>
      </header>

      <div className="content">
        <ul>
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </StyledEtcCard>
  )
}