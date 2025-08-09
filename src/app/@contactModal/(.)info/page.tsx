import ModalContainer from '@/app/_components/ModalContainer';
import Link from 'next/link';
export default function ContactModal() {
    return (
        <ModalContainer title="내 정보" style="w-[400px] h-[200px]">
            <div className="flex flex-col justify-center mt-10">
                <p className="mb-2">전화번호 : 010-5212-8697</p>
                <p className="mb-2">이메일 : sim31059999@gmail.com</p>
                <p className="mb-2">
                    깃허브 :
                    <Link
                        href="https://github.com/simuseokyun"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                    >
                        @simuseokyun
                    </Link>
                </p>
            </div>
        </ModalContainer>
    );
}
