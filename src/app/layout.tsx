import { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import NavList from './_components/NavList';
import './styles/reset.css';
import './styles/global.css';
import './styles/component.css';

export const metadata: Metadata = {
    title: '심현석 포트폴리오',
    description: '소개합니다',
};

const notoSansKR = Noto_Sans_KR({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});
interface RootLayout {
    children: React.ReactNode;
    projectModal?: React.ReactNode;
    contactModal?: React.ReactNode;
}

export default function RootLayout({ children, projectModal, contactModal }: RootLayout) {
    return (
        <html lang="en">
            <body className={notoSansKR.className}>
                <div className="px-5">
                    <NavList />
                    {children}
                    {projectModal}
                    {contactModal}
                </div>
            </body>
        </html>
    );
}
