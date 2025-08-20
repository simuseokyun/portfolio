'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Stack } from '../types/type';

export default function StackList({ data }: { data: Stack[] }) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <ul className="block md:flex-wrap md:flex items-start justify-center lg:gap-5 mt-10">
            {data?.map(({ name, description, image }, index) => (
                <li
                    key={name}
                    className={`w-full ${!index ? 'mt-0' : 'mt-4'} lg:mt-0 border border-[#e2e2e2] bg-gray-100  rounded-md overflow-hidden p-2  shadow  group duration-300 transition-all lg:w-[50px] lg:h-[50px] lg:hover:w-[350px] lg:hover:h-[120Px] ${theme === 'dark' ? 'bg-inherit  lg:bg-slate-700 ' : 'lg:bg-amber-100'}`}
                >
                    <div className="flex items-center lg:items-start gap-2 ">
                        <Image src={`/assets/${image}`} width={30} height={30} alt={name} />
                        <div className="opacity-100 ml-1 lg:ml-0 lg:opacity-0 group-hover:opacity-100 group-hover:visible   transition-opacity delay-200 duration-300">
                            <h1 className="text-sm font-semibold md:font-base ">{name}</h1>
                            <p className="text-[12px] md:text-sm mt-0.5">{description}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
