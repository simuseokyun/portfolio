import { ProjectDB } from '../types/type';

const projectDB: ProjectDB[] = [
    {
        id: 1,
        title: '음악 스트리밍 앱',
        description:
            'Spotify Web API를 활용해 사용자의 음악 데이터를 시각화하고,플레이리스트,아티스트 정보 등을 제공, 일정 시간 음악을 스트리밍할 수 있는 리액트 기반 웹 애플리케이션',
        image: '/assets/project-one.webp',
        skill: {
            front: [
                '/assets/React.svg',
                '/assets/TypeScript.svg',
                '/assets/Tailwind.svg',
                '/assets/Tanstack-Query.png',
                '/assets/Zustand.webp',
            ],
            back: ['/assets/Node.js.svg', '/assets/Express.svg'],
        },
        github: 'https://github.com/simuseokyun/music-stream',
        purpose:
            '공개 API를 활용한 실질적인 서비스 구축 경험을 목표로 프로젝트를 기획했습니다. 특히, 음악에 대한 개인적인 관심을 바탕으로, 스트리밍 기능을 포함한 음악 애플리케이션을 직접 구현함으로써 프론트엔드와 백엔드 기술을 유기적으로 결합해보는 데 중점을 두었습니다.',
        features: [
            'Spotify OAuth 로그인 연동',
            '특정 트랙, 앨범, 아티스트 검색',
            '인피니트 스크롤링을 통한 점진적 로딩',
            '플레이리스트/찜한 앨범 조회/추가/삭제',
            '플레이리스트 내 트랙 추가/삭제',
            '아티스트 팔로우/언팔로우',
            '음악 스트리밍 기능',
        ],
        structure: '/assets/MusicStreamStructure.png',
        process: ['프로젝트 기획', 'API 설계', '프론트엔드 개발', '백엔드 개발', '테스트 및 배포'],
        troubleShooting: ['문제 해결1'],
    },
    {
        id: 2,
        title: '포트폴리오',
        description: 'Next.js의 SSG 기능을 이용해 성능과 SEO에 최적화된 포트폴리오 사이트',
        image: '/assets/Portfolio.jpg',
        skill: { front: ['/assets/Next.js.svg', '/assets/TypeScript.svg', '/assets/Tailwind.svg'], back: [] },
        github: 'https://github.com/simuseokyun/portfolio',
        purpose:
            '문서화하는 것도 의미 있지만, 보다 직관적이고 접근성이 좋은 웹사이트 형태로 제작해보고 싶었습니다. 또한, 이 과정에서 Next.js의 Static Site Generation(SSG) 기능을 활용하여 빠르고 효율적인 페이지 렌더링을 경험하고자 했습니다.',
        features: [
            'Next.js의 SSG를 활용한 빠른 페이지 로딩과 SEO 최적화',
            'Framer Motion을 이용한 부드러운 애니메이션 효과',
            '반응형 디자인과 웹 접근성 고려',
        ],
        structure: '/assets/PortfolioStructure.png',

        process: ['프로젝트 기획', 'API 설계', '프론트엔드 개발', '백엔드 개발', '테스트 및 배포'],
        troubleShooting: ['문제 해결1'],
    },
];
export default projectDB;
