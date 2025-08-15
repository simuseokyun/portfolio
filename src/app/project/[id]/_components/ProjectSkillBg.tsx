import { ProjectDB } from '@/app/types/type';

export default function ProjectSkillBg({ skillBackground }: Pick<ProjectDB, 'skillBackground'>) {
    return (
        <>
            <h2 className="font-semibold mt-10">&#8226; 기술 선택 배경</h2>
            <ul className="mt-4">
                {skillBackground.map(({ name, description }, index) => (
                    <li key={name} className={`${index && 'mt-5'}`}>
                        <h1 className="inline-block text-[12px] font-semibold py-1 px-2 rounded-xl bg-[#b6c1f9]">
                            {name}
                        </h1>
                        <p className="mt-1 text-[#555555] ">{description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
