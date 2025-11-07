import { CareerDB as CareerData } from '../types/type';
const CareerDB: CareerData = {
    education: [
        { title: '강릉 제일고등학교 졸업', year: '2013 - 2016' },
        { title: '강원대학교 삼척캠퍼스 행정학과 졸업', year: '2016 - 2021' },
    ],
    courses: [
        {
            title: '이젠 아카데미',
            description: '웹 디자인/프론트엔드 과정',
            year: '2022 - 2023',
            content: [
                'HTML, CSS, JavaScript 등 기초 웹 개발 기술 습득',
                '팀 프로젝트를 통한 기획, 디자인, 개발, 배포 전 과정 경험',
            ],
        },
        {
            title: '인프런 독학과정',
            year: '2023 - 2024',
            content: [
                'React, Next.js, TypeScript를 활용해 컴포넌트 기반의 웹 애플리케이션 구조 학습',
                'Node.js와 Express를 이용해 서버와 클라이언트 간의 통신 흐름을 이해하고 RESTful API를 구현',
                '프론트엔드와 백엔드 간 데이터 흐름을 직접 연결하며, 전체적인 웹 서비스 동작 원리 학습',
            ],
        },
    ],
    experience: [
        {
            title: 'SSEM',
            description: '프론트엔드 개발자',
            year: '2023.10 - 2023.12',
            content: [
                '페이지 별 구조 설계 및 컴포넌트 개발',
                'REST API 연동을 통한 로그인 및 게시글 CRUD 기능 구현',
                'UI 기획 참여 및 SSEM 랜딩 페이지 제작',
            ],
        },
    ],
};

export default CareerDB;
