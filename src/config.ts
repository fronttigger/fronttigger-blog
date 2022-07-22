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
    description: `빠르게 바뀌어 가는 웹 생태계와 다양한 언어 및 라이브러리, 프레임워크에 관심이 많습니다.
      항상 열려있는 사고를 통해 넓은 시야를 바라볼 수 있도록 노력합니다.
      주도적으로 업무할 수 있는 환경을 선호합니다.
      Typescript와 React 환경에서 개발하고 있습니다.`,
    experiences: [
      {
        company: 'Frientrip (Frip)',
        job: 'Frontend Engineer',
        date: '2022. 06 ~ 현재',
        projects: [
          {
            title: '프립 디자인 시스템 개발',
            date: '2022. 04 ~ 현재',
            description: '프립 디자인 시스템 개발을 진행하고 있습니다.',
            tasks: [
              'Yarn Berry, Rollup을 이용한 개발환경 구성',
              'Gitlab CI를 통한 CI/CD 환경 구성',
              'Storybook을 이용한 컴포넌트 단위의 UI 개발',
              'Jest와 react-testing-library를 이용한 컴포넌트 테스팅',
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
            title: '프립 웹 서비스 개발 및 유지보수',
            date: '2021. 07 ~ 현재',
            description: '프립 웹 서비스와 관련된 개발을 진행하고 있습니다.',
            tasks: [
              '커머스 전반 비즈니스 플로우에 대한 이해',
              'SSR과 CSR을 사용하여 페이지 렌더링 개선',
              'REST API → GraphQL 마이그레이션',
              'Redux와 Redux-saga를 활용한 글로벌 상태관리 및 비동기 처리',
              'npm workspaces 모노레포 환경 구성',
              '하이브리드 앱 내 웹뷰 개발',
              '데이터 수집 및 분석 도구 연동',
            ],
            stacks: [
              'Typescript',
              'React',
              'Redux',
              'Redux-saga',
              'GraphQL Apollo',
              'styled-components',
              'Context API',
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
            title: '백오피스 구현',
            date: '2020. 12 ~ 2021. 06',
            description: '보닥 앱에 관련된 백오피스 개발을 진행하였습니다.',
            tasks: [
              'jQuery 기반 백오피스를 React로 전환',
              'REST API → GraphQL 마이그레이션',
              '보험, 인슈어테크 비즈니스 관련 프로젝트 경험',
            ],
            stacks: [
              'Typescript',
              'React',
              'GraphQL Apollo',
              'styled-components',
              'Context API',
              'Hooks',
              'HTML/CSS',
            ],
          },
        ],
      },
      {
        company: 'Grovesoft',
        job: 'Backend Engineer',
        date: '2019. 06 ~ 2020. 04',
        projects: [
          {
            title: 'HomeCC 웹 애플리케이션 구현',
            date: '2019. 11 ~ 2020. 04',
            description: 'KCC 자회사의 HomeCC 설화수 웹 애플리케이션의 백오피스를 개발했습니다.',
            tasks: [
              '매장, 인테리어, 이벤트, 고객센터 CRUD 등 주요 기능 개발',
              'Ajax를 통한 비동기 통신',
              'Java 8의 Stream, Lambda ,Optional 활용',
            ],
            stacks: [
              'Java 8',
              'Springboot 2.0',
              'JPA',
              'Gradle',
              'Postgresql',
              'Javascript',
              'JQuery',
              'HTML/CSS',
            ],
          },
          {
            title: 'Amorepacific 설화수 웹 애플리케이션',
            date: '2019. 09 ~ 2019. 11',
            description: '아모레퍼시픽의 설화수 웹 애플리케이션의 백오피스를 개발했습니다.',
            tasks: [
              '공지사항, 상품, 예약, 계정 관리 CRUD 등 주요 기능 개발',
              'Ajax를 통한 비동기 통신 경험',
            ],
            stacks: ['Java 8', 'Springboot', 'JPA', 'jQuery', 'Gradle', 'Postgresql'],
          },
        ],
      },
    ],
  },
}
