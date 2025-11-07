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
                'React, Next.js, TypeScript 등 프론트엔드 프레임워크 및 라이브러리 학습',
                'Node.js, Express 등 서버와의 통신 구조 학습',
            ],
        },
    ],
    experience: [
        {
            title: 'SSEM | 세금 신고 자동화 서비스',
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
