import Link from 'next/link';
import SectionContainer from '../SectionContainer';
import MyImage from '../MyImage';

export default function ContactSection() {
    return (
        <SectionContainer
            id="contact"
            description="궁금한점이 있다면 연락주세요"
            title="내 정보"
            style="h-screen flex flex-col justify-center items-center"
        >
            <div className="block mt-10 md:flex md:justify-center md:items-center ">
                <MyImage />
                <div className=" ml-0 mt-10 md:mt-0 md:ml-15">
                    <h1 className="text-3xl font-bold mb-1 text-center md:text-left  md:text-4xl">Contact Me</h1>
                    <p className="text-sub mb-2">성장할 곳을 찾고 있습니다. 편하게 연락주세요</p>
                    <div className="text-center md:text-left">
                        <Link href="/info">
                            <button className="bg-[var(--main-color)] px-3 py-2 text-sm text-white rounded-md">
                                연락처 확인하기
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
