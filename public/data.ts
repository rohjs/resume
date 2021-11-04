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
        description:
          '신입 프론트엔드 개발자로서 암호화폐 선물 거래소 AQX의 프론트엔드를 개발했습니다. 개발 초기 단계부터 팀에 합류하여 클로즈 베타를 성공적으로 런치 하였고, 현재 오픈 베타 준비 과정에 있습니다. 시니어 개발자와 협업하여 두 명이서 프론트엔드 팀을 이끌었고, 저는 TradingView 차트를 제외한 프론트엔드 및 백오피스 인터페이스 개발을 주로 맡고 있습니다.',
        details: [
          '프론트엔드 인터페이스 구현',
          'WebSocket으로 실시간 전달되는 데이터를 Redux로 관리',
          '반응형 디자인 구현 (기여도 100%)',
          'CS / KYC 백오피스 툴 개발',
          '이메일 템플릿 제작 및 유지보수',
          'Google Analytics 4 설정 및 추적코드 세팅',
          '다국어 지원 대응 🇬🇧 🇨🇳 🇷🇺 🇰🇷',
        ],
        techStacks: [
          'React',
          'Redux',
          'TypeScript',
          'WebSocket',
          'Sass',
          'GitLab',
        ],
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
        description:
          '오픈소스 커뮤니티 바운티 플랫폼 이슈헌트의 디자인과 프론트엔드 개발을 진행했습니다. 비즈니스의 요구에 따라 UI를 제작하고 개발하는 것까지가 저의 역할이었습니다. 디자인과 프론트엔드 개발을 모두 혼자 맡다 보니 자연스레 디자인 시스템 구축에 관심을 갖게 되었고, 재사용 가능한 디자인 시스템을 구축해 생산성 증진에 기여했습니다.',
        details: [
          'IssueHunt UI 디자인 및 프론트엔드 개발',
          'Github OAuth 로그인 구현',
          '디자인 시스템 구축 및 유지보수',
          '이벤트 홍보용 웹사이트 구현',
          '재사용 가능한 Figma 컴포넌트를 만들어 제공하여 팀 간 커뮤니케이션의 효율 증진',
        ],
        techStacks: [
          'React',
          'Redux',
          'TypeScript',
          'Styled Components',
          'Github',
          'Sketchapp',
          'Figma',
        ],
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
        title: 'Revisolution 디자인 & 퍼블리싱',
        description: '',
        details: [
          'Revisolution 서비스 UI/UX 디자인',
          'UI 컴포넌트 제작 (스타일 작업 Only)',
        ],
        techStacks: [
          'React',
          'Redux',
          'TypeScript',
          'Typed Styles',
          'Github',
          'Sketchapp',
        ],
        projectUrl: 'https://vimeo.com/246100729',
      },
    ],
    serviceAvailable: false,
  },
]

export const skills: Skill[] = [
  {
    title: 'Design',
    details: ['Figma', 'Sketchapp'],
  },
  {
    title: 'Language',
    details: ['한국어', 'English'],
  },
]

export const data: Data[] = [
  {
    title: '오픈소스 프로젝트 🚀',
    details: [
      'prismy(https://github.com/prismyland/prismy)',
      'Deep Dive TypeScript 번역(https://github.com/rohjs/typescript-book)',
    ],
  },
  {
    title: '유튜브 크리에이터 🎥',
    details: ['김버그 유튜브 채널(https://www.youtube.com/c/kimbug)'],
  },
  {
    title: '구름에듀 온라인 강의 ☁️',
    details: [
      '김버그의 UI 개발 부트캠프(https://bit.ly/31lsOw9)',
      '김버그의 HTML & CSS는 재밌다(https://bit.ly/3GLXreq)',
    ],
  },
  {
    title: '서강대학교 Art & Technology 🎓',
    details: ['2020.2 서강대학교 지식융합학부 Art & Technology학 졸업'],
  },
]
