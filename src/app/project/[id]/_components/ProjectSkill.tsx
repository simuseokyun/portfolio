import { ProjectDB } from '@/app/types/type';

export default function ProjectSkill({ skill = { front: [], back: [] } }: { skill?: ProjectDB['skill'] }) {
    const { front, back } = skill;
    return (
        <>
            <h1 className="text-sm font-semibold mt-3">기술 스택</h1>
            <div className="mt-1">
                <p className="text-sm">
                    프론트엔드 : &nbsp;
                    {front.map((skill, index) => {
                        const stackName = skill.split('/').pop()?.split('.')[0] || '';
                        return (
                            <span
                                className={`text-[12px] ${index && 'ml-2'} px-[4px] py-[2px] bg-[#d3e3fdff] rounded-lg `}
                                key={skill}
                            >
                                {stackName}
                            </span>
                        );
                    })}
                </p>
                {back.length ? (
                    <p className="text-sm mt-2">
                        백엔드 : &nbsp;
                        {skill?.back.map((skill, index) => {
                            const stackName = skill.split('/').pop()?.split('.')[0] || '';
                            return (
                                <span
                                    className={`text-[12px] ${index && 'ml-2'} px-[4px] py-[2px] bg-[#d3e3fdff] rounded-lg `}
                                    key={skill}
                                >
                                    {stackName}
                                </span>
                            );
                        })}
                    </p>
                ) : (
                    ''
                )}
            </div>
        </>
    );
}
