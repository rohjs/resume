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
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
      </header>

      <div className="content">
        <ul>
          {details.map((detail) => {
            const regex = /\(([^)]+)\)/
            const hasUrl = detail.match(regex)
            if (!hasUrl) return <li key={detail}>{detail}</li>
            const [, url] = hasUrl
            return (
              <li key={detail}>
                <a href={url} target="_blank" rel="noreferrer">
                  {detail.replace(regex, '')}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </StyledEtcCard>
  )
}
