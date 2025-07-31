'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export default function ContactModal() {
    const router = useRouter();
    const onClose = () => {
        router.back();
    };
    return (
        <div
            className="fixed w-screen h-screen inset-0  bg-modal flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div className="bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center  mb-4">
                    <h2 className="text-xl font-bold">Info</h2>
                    <Image src="/assets/closeButton.svg" width="30" height="30" alt="닫기" onClick={onClose} />
                </div>

                <p className="mb-2">전화번호 : 010-5212-8697</p>
                <p className="mb-2">이메일 : sim31059999@gmail.com</p>
                <p className="mb-2">
                    깃허브 :
                    <a
                        href="https://github.com/심현석"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        @simuseokyun
                    </a>
                </p>
            </div>
        </div>
    );
}
