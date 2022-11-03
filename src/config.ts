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
        company: 'Frientrip (Frip)',
        job: 'Frontend Engineer',
        date: '2021. 06 ~ 2022. 10',
        projects: [
          {
            title: '프립 웹 서비스 개발',
            date: '2021. 07 ~ 2022. 10',
            description: '프립 웹 서비스와 관련된 개발을 진행하고 있습니다.',
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
              'Hooks',
              'HTML/CSS',
            ],
          },
          {
            title: 'FDS(프립 디자인 시스템) 개발',
            date: '2022. 04 ~ 2022. 10',
            description: 'FDS(프립 디자인 시스템) 개발을 진행하고 있습니다.',
            tasks: [
              '환경 구축부터 구현까지 1인으로 진행한 있는 프로젝트',
              'Yarn Berry, Rollup을 활용한 프로젝트 개발 환경을 구축하여 CI 속도 개선 및 Tree Shaking',
              'Storybook을 이용한 컴포넌트 단위의 UI 개발 및 Chromatic을 통해 배포하여 컴포넌트 공유',
              '프로젝트마다 동일한 스타일을 사용할 수 있도록 GlobalStyle, ThemeProvider 컴포넌트 구현 (color, font)',
              'Gitlab Runner를 통한 CI/CD 환경 구성',
              'Jest 와 react-testing-library를 이용한 컴포넌트 테스팅',
            ],
            stacks: [
              'Typescript',
              'React',
              'Yarn Berry',
              'Rollup',
              'Storybook',
              'styled-components',
              'Jest',
              'react-testing-library',
            ],
          },
        ],
      },
      {
        company: 'Aijinet (Bodoc)',
        job: 'Frontend Engineer',
        date: '2020. 12 ~ 2021. 06',
        projects: [
          {
            title: '보닥 백오피스 개발',
            date: '2020. 12 ~ 2021. 06',
            description: '보닥 앱에 관련된 백오피스를 개발하였습니다.',
            tasks: [
              '입사 후 처음으로 맡은 1인 프로젝트',
              '기존 jQuery 기반 백오피스를 React로 마이그레이션',
              '보험 정보, 고객 정보 등 여러 조건에 따른 필터링 기능 구현',
              '유저 친화적이지 않았던 문제에 대한 사용성 개선',
              'formik을 활용하여 복잡한 보험 선택지에 대한 form 상태관리',
            ],
            stacks: [
              'Typescript',
              'React',
              'GraphQL Apollo',
              'styled-components',
              'Hooks',
              'HTML/CSS',
            ],
          },
        ],
      },
    ],
  },
}
