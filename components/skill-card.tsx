import { StyledSkillCard } from './styles'

type SkillCardProps = {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  const { title, details } = skill

  return (
    <StyledSkillCard>
      <header>
        <h2>{title}</h2>
      </header>

      <div className="content">
        <ul>
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </StyledSkillCard>
  )
}
