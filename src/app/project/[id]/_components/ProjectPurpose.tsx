import { ProjectDB } from '@/app/types/type';

export default function ProjectPurpose({ purpose }: Pick<ProjectDB, 'purpose'>) {
    if (!purpose) return null;
    return (
        <>
            <h2 className="font-semibold">&#8226; 개발 배경</h2>
            <p className="mt-2 text-[#555555] text-sm md:text-base">{purpose}</p>
        </>
    );
}
