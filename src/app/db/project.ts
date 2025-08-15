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
            '인피니트 스크롤링을 통한 점진적 로딩',
            '트랙,앨범,아티스트 검색',
            '앨범,플레이리스트 조회',
            '라이브러리에 있는 앨범,플레이리스트 추가/삭제',
            '플레이리스트 내 트랙 추가/삭제',
            '아티스트 팔로우/언팔로우',
            '음악 스트리밍 기능 (자동 재생 및 이전/다음 곡 재생)',
        ],
        structure: '/assets/MusicStreamStructure.png',
        skillBackground: [
            {
                name: 'Tanstack-Query',
                description:
                    '프로젝트에서 다수의 네트워크 요청이 발생하는데, 그 중 일부는 요청 후 데이터 변경이 거의 없다는 특징이 있었다. 이에 불필요한 재요청을 방지하고 효율적인 데이터 관리를 위해 캐싱 기능이 필수적이라고 판단했고 비동기 상태 관리 인터페이스가 잘 구축되어 있는 점에서  TanStack-Query를 도입하게 되었습니다',
            },
            {
                name: 'Zustand',
                description:
                    '기존에 Recoil을 사용했었지만 현재 업데이트가 중단된 상태이기도 하고 Zustand가 현재 시장에서 높은 점유율을 차지하고 있어 도입하게 되었습니다. 또한 프로젝트 특성상 많은 전역상태를 관리해야 하는데 Zustand의 선택적 구독기능이 성능 저하없이 상태 관리를 위한 적합한 판단이라고 생각했습니다',
            },
            {
                name: 'Tailwind',
                description:
                    '클래스 단위로 손쉽게 재사용 가능한 디자인 시스템을 구축할 수 있어서 개발 생산성 측면에서 매력적으로 다가왔고 무엇보다 브레이크 포인트가 내장되어 있어서 반응형 디자인을 손쉽게 구현할 수 있다는 점에서 도입하게 되었습니다',
            },
        ],
        design: [
            { title: '반응형 디자인', image: '/assets/ResponsibleDesignM.gif' },
            { title: '인피니트 스크롤링을 활용한 점진적 로딩', image: '/assets/InfiniteLoading.gif' },
            { title: 'OAuth를 이용한 로그인', image: '/assets/Login.gif' },
            { title: '조건부 렌더링을 통한 화면 처리', image: '/assets/AuthenticatedUI.gif' },
            { title: 'Protected Routes를 활용한 조건부 렌더링', image: '/assets/ProtectedRoute.gif' },
            { title: '플레이리스트 생성 및 삭제', image: '/assets/AddPlaylist.gif' },
            { title: '아티스트 팔로우/언팔로우', image: '/assets/AddArtist.gif' },
            { title: '특정 앨범 라이브러리에 저장 및 삭제', image: '/assets/AddAlbum.gif' },
            { title: '플레이리스트에 트랙 추가 및 삭제', image: '/assets/AddTrack.gif' },
            { title: '플레이어 조작 (노래 재생 및 정지)', image: '/assets/PlayerControl.gif' },
            { title: '플레이어 조작 (이전/다음 곡 재생, 자동 재생)', image: '/assets/PlayerControl2.gif' },
        ],

        troubleShooting: [{ title: '토큰의 만료시간 처리', issue: '', solution: '해결했습니다' }],
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
        skillBackground: [
            {
                name: 'Next',
                description:
                    '포트폴리오 사이트는 빠른 초기로딩과 SEO최적화가 중요한 요구사항이었기에 Next를 도입하게 되었다. 또한 데이터가 변경되지 않는 포트폴리오 특성상 Next의 정적 사이트 생성기능이 적합하다고 생각했습니다',
            },
            {
                name: 'Tailwind',
                description:
                    '클래스 단위로 손쉽게 재사용 가능한 디자인 시스템을 구축할 수 있어서 개발 생산성 측면에서 매력적으로 다가왔고 무엇보다 브레이크 포인트가 내장되어 있어서 반응형 디자인을 손쉽게 구현할 수 있다는 점에서 도입하게 되었습니다',
            },
        ],
        design: [
            { title: '반응형 디자인', image: '/assets/ResponsibleDesignP.gif' },
            { title: 'Smooth-Scolling을 통한 네비게이션 이동', image: '/assets/Nav.gif' },
            { title: '인피셉팅 라우트와 Framer-motion을 활용한 모달', image: '/assets/Motion.gif' },
        ],

        troubleShooting: [{ title: 'Hydration Error', issue: '', solution: '' }],
    },
];
export default projectDB;
