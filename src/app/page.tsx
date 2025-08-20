import CareerSection from './_components/section/CareerSection';
import ContactSection from './_components/section/ContactSection';
import HeroSection from './_components/section/HeroSection';
import ProjectSection from './_components/section/ProjectSection';
import SkillSection from './_components/section/SkillSection';

export default function RootPage() {
    return (
        <>
            <HeroSection />
            <CareerSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
        </>
    );
}
