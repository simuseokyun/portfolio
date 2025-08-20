import ProjectModal from '@/app/@projectModal/(.)project/[id]/page';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    return <ProjectModal params={params} />;
}
