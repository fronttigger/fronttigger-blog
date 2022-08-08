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
    description: `사용자에게 유의미한 서비스를 만들기 위해 노력합니다.
      핵심 문제를 정의하고 이를 해결하는 과정을 즐깁니다.
      이러한 과정 속에서 얻어낸 정보와 경험을 공유하기 위해 스터디를 주도하고, 블로깅 하는 것을 좋아합니다.
      열려있는 사고를 통해 다양한 시야를 바라볼 수 있도록 노력합니다.
      주도적으로 업무할 수 있는 환경을 선호합니다.`,
    experiences: [
      {
        company: 'Frientrip (Frip)',
        job: 'Frontend Engineer',
        date: '2021. 06 ~ 현재',
        projects: [
          {
            title: 'FDS(프립 디자인 시스템) 개발',
            date: '2022. 04 ~ 현재',
            description: 'FDS(프립 디자인 시스템) 개발을 진행하고 있습니다.',
            tasks: [
              'Yarn Berry, Rollup을 활용한 프로젝트 개발 환경을 구축하여 CI 속도 개선 및 Tree Shaking',
              'Storybook을 이용한 컴포넌트 단위의 UI 개발 및 Chromatic을 통해 배포하여 컴포넌트 공유',
              '디자인 시스템 내에서 반복되는 컴포넌트를 처리하기 위한 재사용 가능한 공통 컴포넌트 구현',
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
          {
            title: '프립 웹 서비스 개발',
            date: '2021. 07 ~ 현재',
            description: '프립 웹 서비스와 관련된 개발을 진행하고 있습니다.',
            tasks: [
              '커머스 전반 비즈니스 플로우에 대한 이해',
              'SSR과 CSR을 사용한 SEO 및 페이지 렌더링 개선',
              'REST API에서 GraphQL로 마이그레이션 진행',
              'Redux와 Redux-saga를 활용한 글로벌 상태관리 및 비동기 처리',
              '자주 사용되는 유틸과 커스텀 훅 등을 분리하기 위한 npm workspaces 모노레포 환경 구성',
              '데이터 수집을 위한 분석 SDK 연동 및 모듈화 (Amplitude, Airbridge, Braze)',
              'firebase remote config를 통한 컴포넌트 A/B 테스팅',
              'IAMPORT 결제 모듈 유지보수',
              '호스트들을 위한 호스트 백오피스 서비스 유지보수',
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
              '보험, 인슈어테크 비즈니스 관련 프로젝트 경험',
              '기존 jQuery 기반 백오피스를 React로 전환하여 사용성 개선',
              '보험, 고객 등 여러 조건에 따른 필터링 기능 구현',
              '유저 친화적이지 않았던 문제에 대한 사용성 개선 (에러 메시지, 로딩에 따른 컴포넌트 렌더링 등)',
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
