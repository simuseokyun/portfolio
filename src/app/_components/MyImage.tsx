'use client';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
export default function MyImage() {
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });
    if (!inView) {
        return <div ref={ref} style={{ height: 300 }} />;
    }
    return (
        <div ref={ref} className="flex justify-center animate-slide-fade-in">
            <div className="w-[300px] h-[300px] relative rounded-full overflow-hidden">
                <Image src="/assets/MyImage.jpeg" fill alt="프로필" style={{ objectFit: 'cover' }} />
            </div>
        </div>
    );
}
