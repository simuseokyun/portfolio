import SectionContainer from '../SectionContainer';
import StackList from '../StacksList';
import { frontendStackList, backendStackList, etcStackList } from '@/app/db/skill';
export default function SkillSection() {
    const stackSections = [
        { title: '프론트엔드', data: frontendStackList },
        { title: '백엔드', data: backendStackList },
        { title: '기타', data: etcStackList },
    ];
    return (
        <SectionContainer id="skill" title="기술 및 스택" description="해당 기술을 사용할 수 있습니다">
            {stackSections.map(({ title, data }) => (
                <div key={title} className="mt-10 h-auto lg:h-45">
                    <p className="flex items-center font-semibold">
                        <span className="inline-block w-full h-[1px] flex-1 mr-5 bg-[#e2e2e2]" />
                        {title}
                        <span className="inline-block w-full h-[1px] flex-1 ml-5 bg-[#e2e2e2]" />
                    </p>
                    <StackList data={data} />
                </div>
            ))}
        </SectionContainer>
    );
}
