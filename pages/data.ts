export const works: Work[] = [
  {
    company: '프레스토테크놀로지',
    companyUrl: 'https://www.prestolabs.io/',
    role: 'Web Frontend Developer',
    startedAt: new Date('1/28/20').getTime(),
    endedAt: null,
    projects: [
      {
        title: 'AQX 프론트엔드',
        description: '프레스토테크놀로지!!!',
        details: ['1', '2'],
        techStacks: ['React', 'Redux', 'TypeScript', 'WebSocket', 'Sass'],
        projectUrl: 'https://aqx.com/',
      },
    ],
    serviceAvailable: true,
  },
  {
    company: 'Boost IO',
    companyUrl: 'https://boostio.co/',
    role: 'UX Engineer',
    startedAt: new Date('5/1/18').getTime(),
    endedAt: new Date('4/1/19').getTime(),
    projects: [
      {
        title: 'IssueHunt 디자인 & 프론트엔드',
        description: '부스트아이오',
        details: ['1', '2'],
        techStacks: ['React', 'Redux', 'TypeScript', 'Styled Components'],
        projectUrl: 'https://issuehunt.io/',
      },
    ],
    serviceAvailable: true,
  },
  {
    company: 'Revisolution PBC',
    role: 'UX Engineer',
    startedAt: new Date('8/1/17').getTime(),
    endedAt: new Date('4/1/18').getTime(),
    projects: [
      {
        title: 'Revisolution 디자인 & 프론트엔드',
        description: 'Revisolution',
        details: ['1', '2'],
        techStacks: ['React', 'Redux', 'TypeScript', 'Typed Styles'],
      },
    ],
    serviceAvailable: false,
  },
]

export const skills: Skill[] = [
  {
    title: 'HTML/CSS',
    details: ['hahaha', 'bealsdfj'],
  },
  {
    title: 'Design',
    details: ['Figma', 'Sketchapp'],
  },
  {
    title: 'Language',
    details: ['Korean', 'English'],
  },
]

export const data: Data[] = [
  {
    title: 'Open Source Projects',
    details: ['prismy', 'Typescript 번역'],
    url: 'http://creative.sogang.ac.kr/',
  },
  {
    title: 'YouTube Creator',
    details: ['hahaha', 'bealsdfj'],
    url: 'https://www.youtube.com/c/kimbug',
  },
  {
    title: '구름에듀 온라인 강의',
    details: ['Figma', 'Sketchapp'],
    url: 'https://bit.ly/3BH0j8X',
  },
  {
    title: '서강대학교 Art & Technology',
    details: ['2020.2 졸업'],
  },
]
