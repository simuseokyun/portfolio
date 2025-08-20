import CareerDetail from '../CareerDetail';
import SectionContainer from '../SectionContainer';
import CareerDB from '@/app/db/career';
import { CareerItem } from '@/app/types/type';
export default function CareerSection() {
    return (
        <SectionContainer id="carrer" title="경력" description="성장을 위한 배움과 실무를 쌓아온 경험입니다">
            {Object.entries(CareerDB).map(([category, items]) => (
                <div className="mt-10" key={category}>
                    <p className="flex items-center font-semibold">
                        <span className="inline-block w-full h-[1px] flex-1 mr-5 bg-[#e2e2e2]" />
                        {category === 'education' ? '학력' : category === 'courses' ? '학습 과정' : '경력'}
                        <span className="inline-block w-full h-[1px] flex-1 ml-5 bg-[#e2e2e2]" />
                    </p>
                    {items?.map((item: CareerItem) => <CareerDetail key={item?.title} data={item} />)}
                </div>
            ))}
        </SectionContainer>
    );
}
