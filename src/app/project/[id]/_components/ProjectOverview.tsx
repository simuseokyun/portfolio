import Image from 'next/image';
import Link from 'next/link';
import ProjectSkill from './ProjectSkill';
import { ProjectDB } from '@/app/types/type';

export default function ProjectOverview({ project }: { project?: ProjectDB }) {
    return (
        <div className="mt-5 pb-5 border-b-[1px] border-[#e2e2e2] ">
            <h1 className="font-semibold text-sm">프로젝트 이름</h1>
            <p className="mt-0.5 text-sm ">{project?.title}</p>
            <h1 className="font-semibold text-sm mt-3">프로젝트 설명</h1>
            <p className="mt-0.5 text-sm">{project?.description}</p>
            <h1 className="font-semibold text-sm mt-3">참여 인원</h1>
            <p className="mt-0.5 text-sm">1명 </p>
            <ProjectSkill skill={project?.skill} />
            <h1 className="font-semibold text-sm mt-3">깃허브 및 사이트 링크</h1>

            <p className="mt-1 flex">
                <Link href={project?.web || ''} target="_blank">
                    <Image src="/assets/GitHub.svg" width={20} height={20} alt="깃허브" />
                </Link>
                <Link className="ml-2" href={project?.github || ''} target="_blank">
                    <Image src="/assets/Link.svg" width={20} height={20} alt="깃허브" />
                </Link>
            </p>
        </div>
    );
}
