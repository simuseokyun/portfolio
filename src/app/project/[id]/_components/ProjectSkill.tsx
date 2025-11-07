import { ProjectDB } from '@/app/types/type';

export default function ProjectSkill({ skill = { front: [], back: [], deploy: [] } }: { skill?: ProjectDB['skill'] }) {
    const { front, back, deploy } = skill;
    return (
        <>
            <h1 className="text-sm font-semibold mt-3">기술 스택</h1>
            <div className="mt-1">
                <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm flex-shrink-0">프론트엔드</p>
                    {front?.map((skill) => {
                        const stackName = skill.split('/').pop()?.split('.')[0] || '';
                        return (
                            <span className={`text-[12px] px-[5px] py-[2px] bg-[#b6c1f9] rounded-lg `} key={skill}>
                                {stackName}
                            </span>
                        );
                    })}
                </div>
                {back.length ? (
                    <div className="flex items-center mt-2 gap-2">
                        <p className="text-sm flex-shink-0">백엔드</p>
                        {back.map((skill) => {
                            const stackName = skill.split('/').pop()?.split('.')[0] || '';
                            return (
                                <span
                                    className={`text-[12px] px-[4px] py-[2px] bg-[#d3e3fdff] rounded-lg `}
                                    key={skill}
                                >
                                    {stackName}
                                </span>
                            );
                        })}
                    </div>
                ) : (
                    ''
                )}
                <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm flex-shrink-0 mt-2">배포</p>
                    {deploy?.map((skill) => {
                        const stackName = skill.split('/').pop()?.split('.')[0] || '';
                        return (
                            <span className={`text-[12px] px-[5px] py-[2px] bg-[#b6eaf9] rounded-lg `} key={skill}>
                                {stackName}
                            </span>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
