import { ProjectDB } from '@/app/types/type';
export default function ProjectFeature({ features }: Pick<ProjectDB, 'features'>) {
    return (
        <>
            <h2 className="font-semibold mt-10">* 주요 기능</h2>
            {features.map((feature) => (
                <p key={feature} className="mt-2 text-[#555555] text-sm md:text-base">
                    - {feature}
                </p>
            ))}
        </>
    );
}
