import React from 'react'

import { works, skills, data } from './data'
import {
  Contact,
  Cover,
  EtcCard,
  Layout,
  SkillCard,
  WorkCard,
} from './components'
import { StyledSection } from './styles'

const App: React.FC = () => {
  return (
    <Layout>
      <Cover />

      <StyledSection>
        <h1>Work Experience</h1>
        {works.map((work) => (
          <WorkCard key={work.company} work={work} />
        ))}
      </StyledSection>

      <StyledSection>
        <h1>Skills</h1>
        {skills.map((skill) => (
          <SkillCard key={skill.title} skill={skill} />
        ))}
      </StyledSection>

      <StyledSection>
        <h1>Etc</h1>
        {data.map((datum) => (
          <EtcCard key={datum.title} data={datum} />
        ))}
      </StyledSection>

      <StyledSection>
        <h1>Contact</h1>
        <Contact />
      </StyledSection>
    </Layout>
  )
}

export default App
