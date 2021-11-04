import React from 'react'
import { StyledSkillCard } from './styles'

type SkillCardProps = {
  skill: Skill
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
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
