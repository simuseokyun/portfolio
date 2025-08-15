import { ProjectDB } from '@/app/types/type';

export default function ProjectTrouble({ troubleShooting }: Pick<ProjectDB, 'troubleShooting'>) {
    return (
        <>
            <h2 className="font-semibold mt-10">&#8226; 개발 이슈 및 문제해결</h2>
            <ul className="mt-2">
                {troubleShooting?.map(({ title, issue, solution }) => (
                    <li key={title}>
                        <h1>{title}</h1>
                        <p>{issue}</p>
                        <p>{solution}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
