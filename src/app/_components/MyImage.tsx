import Image from 'next/image';
export default function MyImage() {
    return (
        <div className="flex justify-center">
            <div className="w-[300px] h-[300px] relative rounded-full overflow-hidden">
                <Image src="/assets/MyImage.jpeg" fill alt="프로필" style={{ objectFit: 'cover' }} />
            </div>
        </div>
    );
}
