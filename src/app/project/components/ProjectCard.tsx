'use client';
import { useRouter } from 'next/navigation';
export default function ProjectCard({ item }: { item: { title: string; description: string } }) {
    const router = useRouter();
    const onNavigate = () => {
        router.push(`/project/${item.title}`);
    };
    return (
        <div className="rounded-md bg-inherit border border-amber-100 p-4" onClick={onNavigate}>
            <h1>{item?.title}</h1>
            <h1>{item?.description}</h1>
        </div>
    );
}
