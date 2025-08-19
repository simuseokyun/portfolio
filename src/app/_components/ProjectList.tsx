import ProjectCard from './ProjectCard';
import projectDB from '@/app/db/project';
export default async function ProjectList() {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {projectDB?.map((item) => <ProjectCard key={item?.title} item={item} />)}
        </div>
    );
}
