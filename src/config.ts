export default {
  url: 'https://fronttigger.dev',
  title: 'fronttigger의 블로그',
  subtitle: 'fronttigger',
  description: '프론트엔드에 대한 이야기를 공유해요',
  thumbnail: '/main-thumbnail.png',
  author: {
    name: 'fronttigger',
    thumbnail: '/logo.png',
    bio: 'frontend engineer',
    contacts: {
      email: 'fronttigger@gmail.com',
      facebook: '',
      telegram: '',
      twitter: '',
      github: 'https://github.com/fronttigger',
      rss: '',
      linkedin: 'https://www.linkedin.com/in/%EC%A4%80%ED%98%95-%EA%B9%80-822722214',
      instagram: '',
      line: '',
      gitlab: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    },
  },
  menus: [
    {
      id: 1,
      menu: 'posts',
      link: '/posts',
    },
    {
      id: 2,
      menu: 'about',
      link: '/about',
    },
  ],
  about: {
    title: '안녕하세요 👋 \n 저는 김준형입니다.',
    description: `
      핵심 문제를 정의하고 이를 해결하는 과정을 즐깁니다.
      이러한 과정 속에서 얻어낸 정보와 경험을 공유하기 위해 스터디를 주도하고, 블로깅 하는 것을 좋아합니다.
      열려있는 사고를 통해 다양한 시야를 바라볼 수 있도록 노력합니다.
      주도적으로 업무할 수 있는 환경을 선호합니다.`,
    experiences: [
      {
        company: '코드스테이츠(CodeStates)',
        job: 'Frontend Engineer',
        date: '2022. 10 ~ 2023. 08',
        projects: [
          {
            title: 'BOWL 웹 서비스 개발',
            date: '2022. 12 - 2023. 08',
            description:
              '학습 관리 시스템(LMS)을 통해 기업을 대상(B2B)으로 학습 콘텐츠를 제공하고, 학습한 내용을 제출하고 리뷰어가 리뷰할 수 있는 서비스',
            tasks: [
              '반복되는 컴포넌트의 재사용성과 확장성을 높이기 위한 공통 컴포넌트 구현',
              'Context API를 활용하여 ​선언적으로 컴포넌트 상태 관리',
              '로딩 상태를 관리하기 위한 Suspense 적용',
              'tailwind CSS를 Emotion으로 마이그레이션 진행',
              'Storybook을 이용한 컴포넌트 단위의 UI 개발',
              'github actions를 통한 QA 배포 환경 자동화',
              'jest와 react-testing-library를 이용한 컴포넌트 및 유틸 함수 테스팅',
            ],
            stacks: [
              'Typescript',
              'Next.js',
              'React Query',
              'Context API',
              'Emotion',
              'jest',
              'react-testing-library',
              'Github Actions',
            ],
          },
          {
            title: '사내 공통 라이브러리 개발',
            date: '2023. 02 - 2023. 08',
            description:
              '사내에서 자바스크립트의 컨벤션 규칙을 공통으로 사용할 수 있는 공통 라이브러리',
            tasks: [
              'ESLint, Prettier, Stylelint 세 라이브러리의 규칙들을 각 관심사별로 정의',
              'backend, frontend 두 환경에 대응하기 위한 각각의 모듈을 구현하여 배포',
              '라이브러리 테스트를 위한 Canary 배포 환경 구축',
            ],
            stacks: ['Typescript', 'npm', 'Github Actions'],
          },
        ],
      },
      {
        company: 'Frientrip (Frip)',
        job: 'Frontend Engineer',
        date: '2021. 06 ~ 2022. 10',
        projects: [
          {
            title: '프립 웹 서비스 개발',
            date: '2021. 07 ~ 2022. 10',
            description: '액티비티 상품을 제공하는 호스트와 구매하는 고객을 이어주는 서비스',
            tasks: [
              '반복되는 컴포넌트의 재사용성을 높이기 위한 공통 컴포넌트 구현',
              'REST API에서 GraphQL로 마이그레이션 진행',
              'Redux와 Redux-saga를 활용한 글로벌 상태관리 및 비동기 처리',
              '에러 핸들링을 위한 ErrorBoundary 구현',
              'firebase remote config를 통한 컴포넌트 A/B 테스팅',
              '데이터 수집을 위한 분석 SDK 연동 및 모듈화 (Amplitude, Airbridge, Braze)',
              'IAMPORT 결제 모듈 유지보수',
            ],
            stacks: [
              'Typescript',
              'React',
              'Redux',
              'Redux-saga',
              'GraphQL Apollo',
              'styled-components',
            ],
          },
          {
            title: '프립 디자인 시스템(FDS) 개발',
            date: '2022. 06 ~ 2022. 10',
            description:
              '웹 서비스에서 사용되는 공통 컴포넌트들 통해 일괄적인 UI/UX를 제공하기 위한 프로젝트',
            tasks: [
              '환경 구축부터 구현까지 1인으로 진행한 사내 사이드 프로젝트',
              'Storybook을 이용한 컴포넌트 단위의 UI 개발',
              '디자인 시스템 내에서 반복되는 컴포넌트를 처리하기 위해 재사용 가능한 공통 컴포넌트 구현',
              '프로젝트마다 동일한 스타일을 사용할 수 있도록 GlobalStyle, ThemeProvider 컴포넌트 구현 (color, font)',
              'Gitlab Runner를 통한 CI/CD 환경 구성',
              'jest 와 react-testing-library를 이용한 컴포넌트 테스팅',
            ],
            stacks: [
              'Typescript',
              'React',
              'Yarn Berry',
              'Rollup',
              'Storybook',
              'styled-components',
              'jest',
              'react-testing-library',
            ],
          },
        ],
      },
    ],
  },
}
