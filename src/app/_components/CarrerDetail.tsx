'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function CarrerDetail({ data }: { data: { title: string; year: string; content?: string[] } }) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { title, year, content } = data;
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <div className="block sm:flex mt-8">
            <p className="flex-1 text-sub text-left text-sm sm:text-right sm:text-base">{year}</p>
            <div className="flex-2 mt-2 sm:mt-0 sm:ml-10 ">
                <h1 className="font-semibold inline-flex items-center">
                    <span className="w-2 h-2 bg-[var(--main-color)] rounded-full mr-2" />
                    {title}
                </h1>
                {content && (
                    <div
                        className={`w-full mt-2 bg-gray-100  p-2 rounded-md sm:max-w-[400px] ${theme === 'dark' ? 'bg-inherit border border-white' : ''}`}
                    >
                        {content.map((content) => (
                            <p key={content} className="text-sm">
                                {content}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
