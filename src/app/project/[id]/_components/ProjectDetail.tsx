import { ProjectDB } from '@/app/types/type';
import ProjectPurpose from './ProjectPurpose';
import ProjectFeature from './ProjectFeature';
import ProjectSkillBg from './ProjectSkillBg';
import ProjectUI from './ProjectUI';
import ProjectStructure from './ProjectStructure';
import ProjectTrouble from './ProjectTrouble';
export default function ProjectDetail({ project }: { project?: ProjectDB }) {
    const {
        purpose = '',
        features = [],
        skillBackground = [],
        structure = '',
        design = [],
        troubleShooting = [],
    } = project ?? {};
    return (
        <div className="mt-5 relative">
            <ProjectPurpose purpose={purpose} />
            <ProjectFeature features={features} />
            <ProjectStructure structure={structure} />
            <ProjectSkillBg skillBackground={skillBackground} />
            <ProjectTrouble troubleShooting={troubleShooting} />
            <ProjectUI design={design} />
        </div>
    );
}
