import { ProjectDB } from '../types/type';

const projectDB: ProjectDB[] = [
    {
        id: 1,
        title: '음악 스트리밍 앱',
        description:
            'Spotify Web API를 활용해 사용자의 음악 데이터를 시각화하고 일정 시간 음악을 스트리밍할 수 있는 리액트 기반 웹 애플리케이션',
        image: '/assets/ProjectOne.jpg',
        skill: {
            front: [
                '/assets/React.svg',
                '/assets/TypeScript.svg',
                '/assets/Tailwind.svg',
                '/assets/TanstackQuery.png',
                '/assets/Zustand.webp',
                '/assets/AWS.svg',
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

        troubleShooting: [
            {
                title: '웹 토큰의 만료 시점 관리',
                issue: '스포티파이 Web API와 통신하면 서버에서 웹 액세스 토큰과 만료 시간이 내려옵니다. 하지만 이때 내려오는 값은 단순히 유효 시간일 뿐, 실제로 토큰이 언제 만료되는지에 대한 시점은 제공되지 않습니다. 이로 인해 만료된 토큰을 API 통신에 사용하게 되면 401 Unauthorized 에러가 발생할 수 있습니다. 또한 UX 측면에서 불편함을 유발합니다',
                solution: [
                    {
                        content:
                            '제가 고려한 해결방법은 두 가지입니다. 첫 째, 401 에러가 발생했을 때 토큰을 갱신하는 방식입니다. 그러나 이 방법은 요청이 실패한 뒤에야 갱신이 이루어지므로 불편함을 유발할 수 있습니다. 둘 째, 토큰의 만료 시점을 계산하여 만료되기 전 토큰을 재발급받는 방식입니다. 이는 요청실패를 사전에 방지하기 때문에 최종적으로 이 방법을 채택했습니다. 또한 웹 액세스 토큰은 사용자 인증과 무관한 데이터를 받는데 사용되므로 로컬 스토리지를 이용하였습니다.',
                        image: '/assets/token.png',
                    },
                ],
            },
            {
                title: 'SDK토큰의 저장 위치',
                issue: 'Spotify SDK 토큰은 사용자 인증과 관련된 데이터입니다. 사용자와 관련된 데이터에 접근할 때 이 토큰을 Authorization 헤더(Bearer 토큰)에 넣어서 통신을 해야하는데 이 경우엔 클라이언트에 토큰을 저장해야하는데 이 경우 탈취 위험이 존재하고 XSS,CSRF 공격의 위험이 있습니다.',
                solution: [
                    {
                        content:
                            '클라이언트가 직접 SDK 토큰을 받는 대신, 별도의 프록시 서버를 구성하였습니다. 서버가 Spotify와 통신하여 액세스 토큰과 리프레시 토큰을 안전하게 발급받은 후 Set-Cookie 헤더를 사용하여 클라이언트에 내려줍니다. 또한 쿠키에 HttpOnly, Secure, SameSite 옵션을 통해 클라이언트에서 접근이 불가하도록 하였습니다. 클라이언트에선 직접적으로 다루지 않고 credentials 옵션을 통해 쿠키를 안전하게 전송하도록 하였습니다.',

                        image: '',
                    },
                ],
            },
            {
                title: 'Tanstack-Query 데이터 동기화',
                issue: '이 프로젝트는 사용자 인터랙션에 따라 플레이리스트 내 트랙 추가, 앨범 찜, 아티스트 팔로우 등 다양한 상태 업데이트 API 호출이 빈번하게 발생합니다. 따라서 Tanstack-Query에서 관리하는 쿼리 데이터를 최신 상태로 반영할 필요가 있습니다. Tanstack-Query의 invalidateQueries를 사용하면 서버 데이터를 무효화하고 데이터를 다시 받아올 수 있지만, 이는 관련 쿼리 데이터를 모두 다시 가져오는거라 과도한 네트워크 트래픽을 유발할 수 있습니다.',
                solution: [
                    {
                        content: `Tanstack-Query의 getQueryData를 사용하여 업데이트가 필요한 데이터의 쿼리키만 추출하여 상태를 업데이트 하도록 하였습니다. 만약 해당 쿼리 데이터가 캐시에 존재하지 않는 경우에는, 새로 데이터를 fetch하게 되어 최신 상태가 자동으로 반영됩니다.
                         또한, useMutation의 낙천적 업데이트를 통하여 서버 응답을 기다리지 않고 즉시 화면에 반영하도록 하여 사용자 경험을 향상했습니다.`,
                    },
                ],
            },
            {
                title: '곡 재생 불안정 문제',
                issue: '프로젝트 내 음악 스트리밍은 Spotify-preview-finder 라이브러리를 활용하여 구현했습니다. 각 트랙의 UUID를 전달하면 해당 트랙의 previewUrl을 추출해 재생하는 방식입니다.그러나 일부 트랙은 라이브러리에서 previewUrl을 찾지 못해 재생이 불가능합니다. 이로 인해 곡 재생 종료 후 다음 트랙으로 자동 전환 과정에서 오류가 발생하며, 플레이어가 멈추는 문제가 발견되었습니다.',
                solution: [
                    {
                        content:
                            '일단 플레이어 제어 로직을 커스텀 훅으로 분리하였습니다. playNextTrack함수 내부에서 playPreview라는 재생 함수를 호출했을 때 결과값이 false. 즉, 에러가 발생한다면 재귀적으로 다음 트랙을 재생하도록 하였습니다. 또한 다음 트랙이 존재하지 않는다면 자동 재생을 멈추고 Toast를 통해 알림을 제공하도록 하였습니다.',

                        image: '',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        title: '포트폴리오',
        description: 'Next.js의 다이나믹 라우팅을 활용한 빠른 로딩과 SEO 최적화가 적용된 포트폴리오 사이트',
        image: '/assets/ProjectTwo.jpg',
        skill: {
            front: ['/assets/Next.js.svg', '/assets/TypeScript.svg', '/assets/Tailwind.svg', '/assets/Vercel.svg'],
            back: [],
        },
        github: 'https://github.com/simuseokyun/portfolio',
        purpose:
            '문서화하는 것도 의미 있지만, 보다 직관적이고 접근성이 좋은 웹사이트 형태로 제작해보고 싶었습니다. 또한, 이 과정에서 Next.js의 서버/클라이언트 혼합 렌더링을 활용하여 빠르고 효율적인 페이지 렌더링을 경험하고자 했습니다.',
        features: [
            'Next.js의 서버/클라이언트 혼합 렌더링을 활용한 빠른 페이지 로딩과 SEO 최적화',
            'Framer Motion을 이용한 부드러운 애니메이션 효과',
            '반응형 디자인과 웹 접근성 고려',
            '다크 모드 구현',
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

        troubleShooting: [
            {
                title: '하이드레이션 에러',
                issue: 'useTheme 함수를 사용하는 과정에서 서버에서 생성한 HTML과 렌더링 후 DOM트리가 일치하지 않아서 하이드레이션 에러가 발생',
                solution: [
                    {
                        content:
                            'useTheme의 값은 브라우저의 환경을 보고 결정되는데 서버에서는 이 값이 확정적이지 않아서 기본 값으로 설정한다. 이후 클라이언트에서 하이드레이션이 일어날 때 실제 테마가 다르게 계산되면 서버가 만든 HTML과 클라이언트가 그리려는 DOM이 달라져 하이드레이션 에러가 발생한다. 따라서 useEffet를 사용하여 useTheme의 값이 클라이언트가 마운트 된 이후에 렌더링되도록 하였습니다.',
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        title: '오늘의 날씨',
        description: '오픈 API를 활용한 국내 날씨 정보 제공 웹 애플리케이션',
        image: '/assets/ProjectThree.png',
        skill: { front: ['/assets/JavaScript.svg', '/assets/GithubActions.svg'], back: [] },
        github: 'https://github.com/simuseokyun/portfolio',
        purpose:
            '문서화하는 것도 의미 있지만, 보다 직관적이고 접근성이 좋은 웹사이트 형태로 제작해보고 싶었습니다. 또한, 이 과정에서 Next.js의 서버/클라이언트 혼합 렌더링을 활용하여 빠르고 효율적인 페이지 렌더링을 경험하고자 했습니다.',
        features: [
            'Next.js의 서버/클라이언트 혼합 렌더링을 활용한 빠른 페이지 로딩과 SEO 최적화',
            'Framer Motion을 이용한 부드러운 애니메이션 효과',
            '반응형 디자인과 웹 접근성 고려',
            '다크 모드 구현',
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

        troubleShooting: [
            {
                title: '하이드레이션 에러',
                issue: 'useTheme 함수를 사용하는 과정에서 서버에서 생성한 HTML과 렌더링 후 DOM트리가 일치하지 않아서 하이드레이션 에러가 발생',
                solution: [
                    {
                        content:
                            'useTheme의 값은 브라우저의 환경을 보고 결정되는데 서버에서는 이 값이 확정적이지 않아서 기본 값으로 설정한다. 이후 클라이언트에서 하이드레이션이 일어날 때 실제 테마가 다르게 계산되면 서버가 만든 HTML과 클라이언트가 그리려는 DOM이 달라져 하이드레이션 에러가 발생한다. 따라서 useEffet를 사용하여 useTheme의 값이 클라이언트가 마운트 된 이후에 렌더링되도록 하였습니다.',
                    },
                ],
            },
        ],
    },
];
export default projectDB;
