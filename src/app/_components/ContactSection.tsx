import Link from 'next/link';

export default function ContactSection() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="block md:flex md:justify-center md:items-center">
                <div className="flex justify-center">
                    <span className="block w-[300px] h-[300px] bg-black rounded-full"></span>
                </div>
                <div className="ml-0 mt-5 md:ml-10">
                    <h1 className="section-title mb-4 text-center md:text-left">Contact Me</h1>
                    <p className="text-sub mb-4">다양한 의견을 수용하겠습니다. 편하게 연락주세요</p>
                    <div className="text-center md:text-left">
                        <Link href="/info">
                            <button className="bg-[var(--main-color)] px-3 py-2 text-sm text-white rounded-md">
                                연락처 확인하기
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
