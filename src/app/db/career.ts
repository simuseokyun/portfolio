import { CareerDB as CareerData } from '../types/type';
const CareerDB: CareerData = {
    education: [
        { title: '강릉 제일고등학교 졸업', year: '2013 - 2016' },
        { title: '강원대학교 삼척캠퍼스 행정학과 졸업', year: '2016 - 2021' },
    ],
    courses: [
        {
            title: '이젠 아카데미',
            year: '2022 - 2023',
            content: ['웹 개발자 과정 수료', 'HTML, CSS, JS 등 기초 웹 개발 기술 습득', '팀 프로젝트 기획·개발 경험'],
        },
        {
            title: '인프런 독학과정',
            year: '2023 - 2024',
            content: [
                'React, Next.js, TypeScript 등 프론트엔드 프레임워크 실습',
                'Node.js, Express 등 백엔드 기술 학습',
            ],
        },
    ],
    experience: [
        {
            title: 'SSEM',
            year: '2024 - 2024',
            content: [
                '핀테크 스타트업에서 프론트엔드 개발자로 근무',
                '자사 프레임워크를 활용하여 서비스 기능 개발 경험',
            ],
        },
    ],
};

export default CareerDB;
