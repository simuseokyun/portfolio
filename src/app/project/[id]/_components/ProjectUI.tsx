import Image from 'next/image';
import { ProjectDB } from '@/app/types/type';
export default function ProjectUI({ design }: Pick<ProjectDB, 'design'>) {
    return (
        <>
            <h2 className="font-semibold mt-10">&#8226; 화면 구현</h2>
            <ul className="mt-5">
                {design?.map(({ title, image }, index) => (
                    <li key={title}>
                        <div className={`w-full ${index && 'mt-20'} `}>
                            <Image
                                src={image || '/assets/CloseButton.svg'}
                                alt="UI 화면"
                                width={800}
                                height={600}
                                style={{ height: 'auto', width: '100%', objectFit: 'contain' }}
                            />
                        </div>
                        <p className="text-center text-sm text-[#555555] mt-2">{title}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
