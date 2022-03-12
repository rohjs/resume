import type { NextPage } from 'next'
import { StyledSection } from 'styles'

import Cover from 'components/cover'
import Contact from 'components/contact'
import EtcCard from 'components/etc-card'
import SkillCard from 'components/skill-card'
import WorkCard from 'components/work-card'

type HomeProps = {
  works: Work[]
  skills: Skill[]
  data: Data[]
}

const Home: NextPage<HomeProps> = ({ works, skills, data }) => {
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

export async function getStaticProps() {
  const worksRes = await fetch(`${process.env.HOSTNAME}/works.json`)
  const skillsRes = await fetch(`${process.env.HOSTNAME}/skills.json`)
  const etcRes = await fetch(`${process.env.HOSTNAME}/etc.json`)

  const works = await worksRes.json()
  const skills = await skillsRes.json()
  const data = await etcRes.json()

  return {
    props: {
      works,
      skills,
      data,
    },
  }
}
