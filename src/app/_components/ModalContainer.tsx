'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
export default function ModalContainer({
    children,
    title,
    style = '',
}: {
    children: React.ReactNode;
    title: string;
    style?: string;
}) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const onClose = () => {
        router.back();
    };
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;

    return (
        <div
            className="fixed w-screen h-screen inset-0 bg-modal flex justify-center items-center z-50 px-4 "
            onClick={onClose}
        >
            <motion.div
                onClick={(e) => e.stopPropagation()} //
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`max-w-[600px] rounded-md  p-4 overflow-y-scroll z-60 ${theme === 'dark' ? 'bg-black border border-white' : ' bg-white '} ${style}`}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <Image src="/assets/CloseButton.svg" width={30} height={30} alt="닫기" onClick={onClose} />
                </div>

                {children}
            </motion.div>
        </div>
    );
}
