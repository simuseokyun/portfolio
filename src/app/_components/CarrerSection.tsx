export default function CarrerSection() {
    return (
        <div id="carrer" className="px-5 lg:px-60 mt-20">
            <h1 className="section-title text-center text-accent">학력 및 경력</h1>
            <h1 className="sub-title text-center mt-1">성장을 위한 배움과 실무를 쌓아온 경험입니다</h1>
            <div className="mt-10">
                <p className="flex items-center font-semibold">
                    <span className="inline-block  w-full h-[1px] flex-1 mr-5 bg-[#e2e2e2]" />
                    학력
                    <span className="inline-block w-full h-[1px] flex-1 ml-5  bg-[#e2e2e2]" />
                </p>

                <div className="block sm:flex mt-5">
                    <p className="flex-1 text-sub text-left text-sm sm:text-right sm:text-base">2013 - 2016</p>
                    <div className="flex-2 ml-0 mt-2 sm:mt-0 sm:ml-10">
                        <h1 className="font-semibold">
                            <span className="inline-block w-2 h-2 bg-[var(--main-color)] rounded-full mr-2" />
                            강릉 제일고등학교 졸업
                        </h1>
                    </div>
                </div>
                <div className="block sm:flex mt-5">
                    <p className="flex-1 text-sub text-sm sm:text-right sm:text-base">2016 - 2021</p>
                    <div className="flex-2 ml-0 mt-2 sm:mt-0 sm:ml-10">
                        <h1 className="font-semibold">
                            <span className="inline-block w-2 h-2 bg-[var(--main-color)] rounded-full mr-2" />
                            강원대학교 삼척캠퍼스 행정학과 졸업
                        </h1>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <p className="flex items-center font-semibold">
                    <span className="inline-block  w-full h-[1px] flex-1 mr-5 bg-[#e2e2e2]" />
                    경력
                    <span className="inline-block w-full h-[1px] flex-1 ml-5  bg-[#e2e2e2]" />
                </p>
                <div className="block sm:flex mt-5">
                    <p className="flex-1 text-sub text-left text-sm sm:text-right sm:text-base">2021 - 2022</p>
                    <div className="flex-2 mt-2 sm:mt-0 sm:ml-10 ">
                        <h1 className="font-semibold">
                            <span className="inline-block w-2 h-2 bg-[var(--main-color)] rounded-full mr-2" />
                            이젠 아카데미
                        </h1>
                        <div className="w-full mt-2 bg-gray-100 p-2 rounded-md sm:max-w-[400px]">
                            <p className="text-sm">- 이젠 아카데미 웹 개발자 과정 수료</p>
                            <p className="text-sm mt-1">- HTML,CSS,JS 등 기초적인 웹 개발 전반의 기술 습득</p>
                        </div>
                    </div>
                </div>
                <div className="block sm:flex mt-5">
                    <p className="flex-1 text-sub text-left  text-sm sm:text-right sm:text-base">2023 - 2024</p>
                    <div className="flex-2 mt-2 sm:mt-0 sm:ml-10 ">
                        <h1 className="font-semibold">
                            <span className="inline-block w-2 h-2 bg-[var(--main-color)] rounded-full mr-2" />
                            코딩 애플 / 제로초
                        </h1>
                        <div className="mt-2 bg-gray-100 p-2 w-full rounded-md sm:max-w-[400px] ">
                            <p className="text-sm">
                                - React, Next, Typescript 등 프론트엔드 전반 프레임워크 및 툴 학습
                            </p>
                            <p className="text-sm mt-1">
                                - Node.js, Express 등 서버 동작 방식과 API 흐름을 이해하기 위해 백엔드 관련 기술을
                                학습함
                            </p>
                        </div>
                    </div>
                </div>
                <div className="block sm:flex mt-5">
                    <p className="flex-1 text-sub text-left text-sm sm:text-right sm:text-base">2024 - 2024</p>
                    <div className="flex-2 mt-2 sm:mt-0 sm:ml-10 ">
                        <h1 className="font-semibold">
                            <span className="inline-block w-2 h-2 bg-[var(--main-color)] rounded-full mr-2 " />
                            SSEM
                        </h1>
                        <div className="w-full mt-2 bg-gray-100 p-2 rounded-md sm:max-w-[400px]">
                            <p className="text-sm">- 핀테크 스타트업</p>
                            <p className="text-sm">- 프론트엔드 개발자 근무</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
