import Image from 'next/image';
import { ProjectDB } from '@/app/types/type';
export default function ProjectStructure({ structure }: Pick<ProjectDB, 'structure'>) {
    if (!structure) return null;
    return (
        <>
            <h2 className="font-semibold mt-10">&#8226; 구조</h2>
            <div className="w-full left-[-5px]">
                <Image
                    src={structure}
                    alt="라우팅 구조"
                    width={800}
                    height={600}
                    style={{ height: 'auto', width: '100%', objectFit: 'contain' }}
                />
            </div>
        </>
    );
}
