import StackList from './StacksList';

export default function SkillSection() {
    const frontendStackList = [
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
    const backendStackList = [
        {
            name: 'Node.js',
            image: 'Node.js.svg',
            description: '이벤트 기반 논블로킹 구조를 활용해 REST API 서버를 구축할 수 있습니다',
        },
        {
            name: 'Express',
            image: 'Express.svg',
            description:
                '유연한 라우팅 시스템을 통해 REST API 서버를 구축할 수 있으며, 미들웨어를 활용한 요청 처리, 에러 핸들링, 인증 등의 백엔드 기능을 구현할 수 있습니다.',
        },
        {
            name: 'GraphQL',
            image: 'GraphQL.svg',
            description:
                '클라이언트가 필요한 데이터만 선택적으로 요청할 수 있으며, Apollo Client와 함께 사용하여 효율적인 상태 관리와 데이터 캐싱을 구현할 수 있습니다',
        },
    ];
    const etcStackList = [
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
    ];
    return (
        <div id="skill" className="px-5 sm:px-15 lg:px-40 mt-20 ">
            <p className="section-title text-center text-accent mt-10">기술 및 스택</p>
            <h1 className="sub-title text-center mt-1">해당 기술을 사용할 수 있습니다</h1>
            <div className="mt-10 h-auto lg:h-45">
                <p className="flex items-center font-semibold">
                    <span className="inline-block w-full h-[1px] flex-1 mr-5 bg-[#e2e2e2]" />
                    프론트엔드
                    <span className="inline-block w-full h-[1px] flex-1 ml-5  bg-[#e2e2e2]" />
                </p>
                <StackList stacks={{ stacks: frontendStackList }} />
            </div>
            <div className="mt-10 h-auto lg:h-45">
                <p className="flex items-center font-semibold">
                    <span className="inline-block w-full h-[1px] flex-1 mr-5 bg-[#e2e2e2]" />
                    백엔드
                    <span className="inline-block w-full h-[1px] flex-1 ml-5  bg-[#e2e2e2]" />
                </p>
                <StackList stacks={{ stacks: backendStackList }} />
            </div>

            <div className="mt-10 h-auto lg:h-45">
                <p className="flex items-center font-semibold">
                    <span className="inline-block w-full h-[1px] flex-1 mr-5 bg-[#e2e2e2]" />
                    기타
                    <span className="inline-block w-full h-[1px] flex-1 ml-5  bg-[#e2e2e2]" />
                </p>
                <StackList stacks={{ stacks: etcStackList }} />
            </div>
        </div>
    );
}
