declare interface Work {
  company: string
  companyUrl?: string
  role: string
  startedAt: number
  endedAt: number | null
  projects: Project[]
  serviceAvailable: boolean
}

declare interface Project {
  title: string
  description: string
  details: string[]
  techStacks: string[]
  projectUrl?: string
}

declare interface Skill {
  title: string
  details: string[]
}

declare interface Data {
  title: string
  details: string[]
  url?: string
}
