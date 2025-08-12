import CarrerDetail from '../CarrerDetail';
import SectionContainer from '../SectionContainer';

export default function CarrerSection() {
    const CarrerContentOne = { title: '제일 고등학교 졸업', year: '2013 - 2016' };
    const CarrerContentTwo = { title: '강원대학교 삼척캠퍼스 행정학과 졸업', year: '2016 - 2021' };
    const CarrerContentThree = {
        title: '이젠 아카데미',
        year: '2013 - 2016',
        content: ['- 이젠 아카데미 웹 개발자 과정 수료', '- HTML,CSS,JS 등 기초적인 웹 개발 전반의 기술 습득'],
    };
    const CarrerContentFour = {
        title: '코딩 애플 / 제로초',
        year: '2023 - 2024',
        content: [
            '- React, Next, Typescript 등 프론트엔드 전반 프레임워크 및 툴 학습',
            '- Node.js, Express 등 서버 동작 방식과 API 흐름을 이해하기 위해 백엔드 관련 기술을 학습함',
        ],
    };
    const CarrerContentFive = {
        title: 'SSEM',
        year: '2024 - 2024',
        content: ['- 핀테크 스타트업', '- HTML,CSS,JS 등 기초적인 웹 개발 전반의 기술 습득'],
    };

    return (
        <SectionContainer id="carrer" title="경력" description="성장을 위한 배움과 실무를 쌓아온 경험입니다">
            <div className="mt-10">
                <p className="flex items-center font-semibold">
                    <span className="inline-block  w-full h-[1px] flex-1 mr-5 bg-[#e2e2e2]" />
                    학력
                    <span className="inline-block w-full h-[1px] flex-1 ml-5  bg-[#e2e2e2]" />
                </p>

                <CarrerDetail data={CarrerContentOne} />
                <CarrerDetail data={CarrerContentTwo} />
            </div>
            <div className="mt-10">
                <p className="flex items-center font-semibold">
                    <span className="inline-block  w-full h-[1px] flex-1 mr-5 bg-[#e2e2e2]" />
                    경력
                    <span className="inline-block w-full h-[1px] flex-1 ml-5  bg-[#e2e2e2]" />
                </p>
                <CarrerDetail data={CarrerContentThree} />
                <CarrerDetail data={CarrerContentFour} />
                <CarrerDetail data={CarrerContentFive} />
            </div>
        </SectionContainer>
    );
}
