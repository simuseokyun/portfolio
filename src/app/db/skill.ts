import { Stack } from '../types/type';

const frontendStackList: Stack[] = [
    {
        name: 'HTML5',
        image: 'HTML5.svg',
        description: '웹 표준성 및 접근성, 크로스 브라우징을 준수하면서 구조적인 마크업을 작성할 수 있습니다',
    },
    {
        name: 'CSS3',
        image: 'CSS3.svg',
        description:
            '애니메이션을 활용하여 동적인 효과를 구현할 수 있고 디바이스 특성을 고려하여 반응형 웹을 제작할 수 있습니다',
    },
    {
        name: 'Javascript',
        image: 'JavaScript.svg',
        description:
            'DOM 조작 및 이벤트 핸들링을 통해 사용자와의 상호작용을 구현할 수 있고 비동기 통신을 통해 서버와 데이터를 주고받을 수 있습니다',
    },
    {
        name: 'TypeScript',
        image: 'TypeScript.svg',
        description: '정적 타입 검사와 타입 추론 기능을 통해 코드의 안정성과 유지보수성을 향상 시킬 수 있습니다',
    },
    {
        name: 'Tailwind',
        image: 'Tailwind.svg',
        description: '유틸리티 클래스 기반 스타일링을 통해 빠르게 UI를 구축할 수 있습니다',
    },
    {
        name: 'React',
        image: 'React.svg',
        description: '컴포넌트 기반 구조와 상태 관리 기능을 통해 효율적인 UI 개발이 가능합니다',
    },
    {
        name: 'Tanstack Query',
        image: 'TanstackQuery.png',
        description: 'API 요청에 대한 캐싱, 리패칭등 기능을 통해 효율적인 데이터 관리를 할 수 있습니다',
    },
    {
        name: 'Next',
        image: 'Next.js.svg',
        description:
            '앱 라우터를 사용하여 효율적인 페이지 관리를 할 수 있고, 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 통해 SEO 최적화가 가능합니다',
    },
];
const backendStackList: Stack[] = [
    {
        name: 'Node.js',
        image: 'Node.js.svg',
        description: '이벤트 기반 논블로킹 구조를 활용해 REST API 서버를 구축할 수 있습니다',
    },
    {
        name: 'Express',
        image: 'Express.svg',
        description:
            'REST API 서버를 구축할 수 있으며, 미들웨어를 활용한 요청 처리, 에러 핸들링, 인증 등의 백엔드 기능을 구현할 수 있습니다.',
    },
    {
        name: 'GraphQL',
        image: 'GraphQL.svg',
        description: 'Apollo Client와 함께 사용하여 효율적인 상태 관리와 데이터 캐싱을 구현할 수 있습니다',
    },
];
const etcStackList: Stack[] = [
    {
        name: 'Git',
        image: 'Git.svg',
        description: 'Git을 통한 버전 형상 관리를 통해 협업 및 코드를 관리할 수 있습니다',
    },
    {
        name: 'github',
        image: 'GitHub.svg',
        description: '주기적인 배포를 통해 프로젝트 버전을 관리할 수 있습니다',
    },

    {
        name: 'Figma',
        image: 'Figma.svg',
        description: '피그마를 통한 인터페이스 설계 및 프로토타입 제작 경험이 있습니다',
    },
    {
        name: 'Vercel',
        image: 'Vercel.svg',
        description: 'Vercel을 통한 정적 사이트 배포 및 서버리스 함수 구현이 가능합니다',
    },
    {
        name: 'Socket.io',
        image: 'Socket.io.svg',
        description: 'Socket.io를 사용하여 실시간 양방향 통신을 구현할 수 있습니다',
    },
];

export { frontendStackList, backendStackList, etcStackList };
