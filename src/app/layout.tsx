import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './styles/reset.css';
import './styles/global.css';
import './styles/component.css';
import NavList from './_components/NavList';
import DarkmodeButton from './_components/DarkmodeButton';

export const metadata: Metadata = {
    title: '심현석 포트폴리오',
    description: '소개합니다',
};

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
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
        <html lang="en" suppressHydrationWarning>
            <body className={poppins.className}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
                    <div className="w-full px-4">
                        <NavList />
                        {children}
                        {projectModal}
                        {contactModal}
                        <DarkmodeButton />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
