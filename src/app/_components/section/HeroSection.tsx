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
            <p className="text-sub text-xl mt-2">
                <span className="inline-block text-accent font-semibold animate-float-up">배움</span>과
                <span className="inline-block text-accent font-semibold animate-float-down">&nbsp;도전</span>을
                두려워하지 않습니다
            </p>
        </div>
    );
}
