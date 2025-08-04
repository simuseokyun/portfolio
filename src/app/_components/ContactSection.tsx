import Link from 'next/link';

export default function ContactSection() {
    return (
        <div id="contact" className="w-full h-screen flex flex-col justify-center items-center px-5 md:px-20 mt-20">
            <p className="section-title text-center text-accent ">정보</p>
            <h1 className="sub-title text-center mt-1">저를 만나보세요</h1>
            <div className="block mt-10 md:flex md:justify-center md:items-center ">
                <div className="flex justify-center animate-slide-fade-in">
                    <span className="block w-[300px] h-[300px] bg-black rounded-full"></span>
                </div>
                <div className="ml-0 mt-5 md:ml-10">
                    <h1 className="text-3xl font-bold mb-3 text-center md:text-left  md:text-4xl">Contact Me</h1>
                    <p className="text-sub mb-4">성장할 곳을 찾고 있습니다. 편하게 연락주세요</p>
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
