import React from 'react'

import { StyledCard } from './styles'

type EtcCardProps = {
  data: Data
}

export const EtcCard: React.FC<EtcCardProps> = ({ data }) => {
  const { title, details, url } = data

  return (
    <StyledCard>
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
    </StyledCard>
  )
}
