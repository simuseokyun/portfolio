import CarrerSection from './_components/section/CarrerSection';
import ContactSection from './_components/section/ContactSection';
import HeroSection from './_components/section/HeroSection';
import ProjectSection from './_components/section/ProjectSection';
import SkillSection from './_components/section/SkillSection';

export default function RootPage() {
    return (
        <>
            <HeroSection />
            <CarrerSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
        </>
    );
}
