import ProjectCard from './ProjectCard';
import projectDB from '@/app/db/project';
export default async function ProjectCardList() {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {projectDB?.map((item) => <ProjectCard key={item?.title} item={item} />)}
        </div>
    );
}
