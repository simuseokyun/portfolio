import ContactSection from './_components/ContactSection';
import HeroSection from './_components/HeroSection';
import ProjectSection from './_components/ProjectSection';
import SkillSection from './_components/SkillSection';

export default function Page() {
    return (
        <div>
            <HeroSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
        </div>
    );
}
