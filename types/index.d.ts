declare interface Work {
  company: string
  companyUrl?: string
  role: string
  startedAt: number
  endedAt: number | null
  projects: Project[]
  url: string
  serviceAvailable: boolean
}

declare interface Project {
  title: string
  description: string
  details: string[]
  techStacks: string[]
}

declare interface Skill {
  title: string
  details: string[]
}

declare interface Data {
  title: string
  details: string[]
  url: string
}
