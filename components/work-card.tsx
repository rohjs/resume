import { formatDateTime } from '../utils/datetime'
import { StyledWorkCard } from './styles'

type WorkCardProps = {
  work: Work
}

export default function WorkCard({ work }: WorkCardProps) {
  const { company, companyUrl, role, startedAt, endedAt, projects } = work

  return (
    <StyledWorkCard>
      <header>
        <h2>
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noreferrer">
              {company}
            </a>
          ) : (
            company
          )}
        </h2>
        <dl>
          <dt className="visually-hidden">직책</dt>
          <dd>{role}</dd>
        </dl>
        <dl>
          <dt className="visually-hidden">기간</dt>
          <dd>
            <time dateTime={formatDateTime(startedAt, { hyphenated: true })}>
              {formatDateTime(startedAt)}
            </time>
            <span>-</span>
            {endedAt ? (
              <time dateTime={formatDateTime(endedAt, { hyphenated: true })}>
                {formatDateTime(endedAt)}
              </time>
            ) : (
              <span>현재</span>
            )}
          </dd>
        </dl>
      </header>

      <div className="content">
        {projects.map((project) => {
          const { description, details, title, techStacks, projectUrl } =
            project
          const key = `${company}-${title}`

          return (
            <div key={key}>
              <h3>
                {projectUrl ? (
                  <a href={projectUrl} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>

              <h4 className="visually-hidden">Description</h4>
              <p>{description}</p>
              <h4>Details</h4>
              <ul>
                {details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <h4>Tech Stacks</h4>
              <p>{techStacks.join(', ')}</p>
            </div>
          )
        })}
      </div>
    </StyledWorkCard>
  )
}
