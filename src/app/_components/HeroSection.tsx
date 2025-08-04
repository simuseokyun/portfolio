import HeroAnimation from './HeroAnimation';

export default function HeroSection() {
    return (
        <div id="home" className="w-full h-screen flex flex-col justify-center items-center px-5 md:px-20 ">
            <HeroAnimation />
            <h1 className="text-[28px] font-bold text-center md:text-[38px]">
                프론트엔드 개발자
                <br />
                심현석입니다
            </h1>
            <p className="text-sub text-xl mt-4">
                <span className="inline-block text-accent font-semibold animate-float-up">배움</span>과
                <span className="inline-block text-accent font-semibold animate-float-down">&nbsp;도전</span>을
                두려워하지 않습니다
            </p>
        </div>
    );
}
