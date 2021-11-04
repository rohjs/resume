import type { NextPage } from 'next'

import { works, skills, data } from '../public/data'
import Cover from '../components/cover'
import Contact from '../components/contact'
import EtcCard from '../components/etc-card'
import SkillCard from '../components/skill-card'
import WorkCard from '../components/work-card'

import { StyledSection } from '../styles'

const Home: NextPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
