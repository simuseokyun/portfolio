import { ProjectDB } from '@/app/types/type';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ProjectTrouble({ troubleShooting }: Pick<ProjectDB, 'troubleShooting'>) {
    return (
        <>
            <h2 className="font-semibold mt-10">&#8226; 개발 이슈 및 문제해결</h2>
            <ul className="mt-5">
                {troubleShooting?.map(({ title, issue, solution }, index) => (
                    <li key={title} className={`${index && 'mt-15'}`}>
                        <h1 className="font-xl font-semibold">
                            {index + 1}. {title}
                        </h1>
                        <div className="mt-4">
                            <h1 className="text-sm font-semibold">
                                <span className="mr-1">👀</span>문제 상황
                            </h1>
                            <p className="text-[#555555] text-sm mt-2">{issue}</p>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-sm font-semibold">
                                <span className="mr-1">💡</span>해결 방법
                            </h1>
                            {solution?.map(({ content, code }) => {
                                return (
                                    <div key={content} className="mt-2">
                                        {code && (
                                            <SyntaxHighlighter
                                                customStyle={{
                                                    fontFamily: 'Arial, sans-serif',
                                                    fontSize: '14px',
                                                }}
                                                language="javascript"
                                                style={atomDark}
                                            >
                                                {code}
                                            </SyntaxHighlighter>
                                        )}
                                        <h1 className="text-[#555555] text-sm mt-2">{content}</h1>
                                    </div>
                                );
                            })}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
