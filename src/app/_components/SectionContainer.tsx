import { SectionContainerProps } from '../types/type';

export default function SectionContainer({ id, title, description, style = '', children }: SectionContainerProps) {
    return (
        <div id={id} className={`lg:px-20 mt-20 ${style} `}>
            <p className="section-title text-center text-accent mt-10">{title}</p>
            <h1 className="sub-title text-center mt-1">{description}</h1>
            {children}
        </div>
    );
}
