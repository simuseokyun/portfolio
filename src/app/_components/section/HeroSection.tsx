import HeroAnimation from '../HeroAnimation';
import { Noto_Sans_KR } from 'next/font/google';
const NotoKr = Noto_Sans_KR({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});
export default function HeroSection() {
    return (
        <div id="home" className={`${NotoKr.className} w-full h-screen flex flex-col justify-center items-center`}>
            <HeroAnimation />
            <h1 className="text-3xl font-bold text-center md:text-4xl">
                프론트엔드 개발자
                <br />
                심현석입니다
            </h1>
            <p className="text-sub text-lg mt-4 md:text-xl ">
                새로운 <span className="inline-block text-accent font-semibold animate-float-up">기술</span>과&nbsp;
                <span className="inline-block text-accent font-semibold animate-float-down">도전</span>을 즐기며,
            </p>
            <p className="text-sub  text-lg md:text-xl ">항상 성장하는 프론트엔드 개발자입니다.</p>
        </div>
    );
}
