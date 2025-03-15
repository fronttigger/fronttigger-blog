export default {
  url: 'https://fronttigger.dev',
  title: 'fronttigger의 블로그',
  subtitle: 'fronttigger',
  description: '사용자의 불편함을 발견하고 이를 기술로 해결하는 과정을 공유합니다.',
  thumbnail: '/main-thumbnail.png',
  author: {
    name: 'fronttigger',
    thumbnail: '/logo.png',
    bio: '주도적으로 문제를 정의하고 해결하는 프론트엔드 개발자',
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
      사용자의 불편함을 발견하고 이를 기술로 해결하는 과정을 즐깁니다.
      주도적으로 문제를 정의하고 해결해나가는 것을 선호하며,
      이 과정에서 얻은 인사이트를 통해 더 나은 해결책을 찾아가는 것을 좋아합니다.`,
    experiences: [
      {
        company: '누비랩',
        job: 'Frontend Engineer',
        date: '2024. 02 ~ 현재',
        projects: [
          {
            title: '실시간 급식 모니터링 대시보드',
            date: '2024. 02 - 현재',
            description: '스캔된 식판을 분석한 데이터를 실시간으로 시각화하여 제공하는 서비스',
            tasks: [
              'SSE 기반 실시간 데이터 처리 시스템 구축으로 API 호출 96% 감소',
              '크로스 플랫폼 UI 이미지 다운로드 기능 개발',
              'Turborepo 기반 프론트엔드 모노레포 아키텍처 설계',
              'React Query를 활용한 서버 상태 관리 최적화',
              '사내 공통 라이브러리 개발',
            ],
            stacks: ['TypeScript', 'React', 'Next.js', 'React Query', 'Turborepo', 'Storybook'],
          },
        ],
      },
      {
        company: '코드스테이츠',
        job: 'Frontend Engineer / Chapter Lead',
        date: '2022. 10 ~ 2023. 08',
        projects: [
          {
            title: 'B2B 학습 관리 시스템(LMS)',
            date: '2022. 12 - 2023. 08',
            description: '기업 대상 학습 콘텐츠 제공 및 피드백 시스템',
            tasks: [
              '프론트엔드 개발 문화 개선 및 기술 표준화 주도',
              'Emotion 기반 스타일 시스템 구축',
              'Github Actions를 통한 배포 자동화',
            ],
            stacks: ['TypeScript', 'Next.js', 'React Query', 'Emotion', 'Github Actions'],
          },
        ],
      },
      {
        company: 'Frientrip',
        job: 'Frontend Engineer',
        date: '2021. 06 ~ 2022. 10',
        projects: [
          {
            title: '프립 웹 서비스',
            date: '2021. 07 - 2022. 10',
            description: '액티비티 상품을 제공하는 호스트와 구매하는 고객을 이어주는 서비스',
            tasks: [
              'GraphQL 기반 프론트엔드 아키텍처 개선',
              'Firebase Remote Config 기반 A/B 테스트 시스템 구축',
              '디자인 시스템(FDS) 설계 및 개발',
              'Storybook 기반 컴포넌트 문서화',
            ],
            stacks: ['TypeScript', 'React', 'GraphQL', 'Redux', 'styled-components'],
          },
        ],
      },
    ],
  },
}
