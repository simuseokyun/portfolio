'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { ProjectCard as ProjectCardProps } from '../types/type';

export default function ProjectCard({ item }: ProjectCardProps) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const onClickProject = () => {
        router.push(`/project/${item?.id}`);
    };
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <div
            className={`relative w-full h-[470px] group rounded-md overflow-hidden border shadow border-[#e2e2e2]  animate-card-hover lg:hover:animate-card-hover lg:h-[520px] ${theme === 'dark' ? 'bg-[#555555]  ' : 'bg-white'} `}
            onClick={onClickProject}
        >
            <div className="absolute top-0 left-0 w-full h-[300px]">
                <Image src={item?.image} className="object-cover w-full h-full" fill alt={item?.title} />
            </div>
            <div className="absolute top-0 left-0 w-full h-[300px] bg-black opacity-50 group-hover:opacity-0 duration-300" />

            <div
                className={`absolute bottom-0 py-1 px-2 flex flex-col justify-start items-start w-full h-[170px] lg:h-[220px] ${theme === 'dark' ? 'bg-[#111111] ' : 'bg-white'}`}
            >
                <h1 className="text-lg font-semibold">{item?.title}</h1>
                <div className="flex items-start mt-1">
                    <Image
                        className="mr-1.5 relative top-[2px]"
                        src="/assets/Skill.png"
                        alt="skill"
                        width={15}
                        height={15}
                    />
                    <div className="flex items-center gap-1">
                        <span className="text-sm flex font-semibold">기술 스택 :</span>
                        {[...item.skill.front, ...item.skill.back].map((skill) => (
                            <Image
                                className="inline-block"
                                key={skill}
                                src={skill}
                                alt={skill}
                                width={20}
                                height={20}
                            />
                        ))}
                    </div>
                </div>
                <div className="text-sm flex items-center mt-1">
                    <Image
                        className="mr-1.5 relative top-[1px]"
                        src="/assets/Person.png"
                        alt="person"
                        width={15}
                        height={15}
                    />
                    <p>
                        <span className="font-semibold">참여 인원 : </span>
                        1명
                    </p>
                </div>
                <div className="text-sm flex items-start mt-1">
                    <Image
                        className="mr-1.5 relative top-[2px]"
                        src="/assets/Description.png"
                        alt="person"
                        width={15}
                        height={15}
                    />
                    <div>
                        <span className="font-semibold">개요 : </span>
                        {item.description}
                    </div>
                </div>
            </div>
        </div>
    );
}
