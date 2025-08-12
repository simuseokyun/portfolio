import projectDB from '@/app/db/project';
import ProjectDetail from '@/app/project/[id]/_components/ProjectDetail';
import ProjectOverview from '@/app/project/[id]/_components/ProjectOverview';
import ModalContainer from '@/app/_components/ModalContainer';
export default async function ProjectModal({ params }: { params?: Promise<{ id?: string }> }) {
    const param = await params;
    const id = param?.id;
    const project = projectDB.find((item) => item.id === Number(id));

    return (
        <ModalContainer title="상세내용" style="h-[600px]">
            <ProjectOverview project={project} />
            <ProjectDetail project={project} />
        </ModalContainer>
    );
}
