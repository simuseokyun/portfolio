import ProjectList from '../ProjectList';
import SectionContainer from '../SectionContainer';
export default function ProjectSection() {
    return (
        <SectionContainer
            id="project"
            title="프로젝트"
            description="상세내용을 보려면 클릭해주세요"
            style="md:px-10 lg:px-0"
        >
            <ProjectList />
        </SectionContainer>
    );
}
