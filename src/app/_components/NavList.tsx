export default function NavList() {
    return (
        <nav className="fixed top-5 w-full left-1/2 transform -translate-x-1/2 bg-transparent  z-50  h-16 m-2">
            <div className="max-w-md m-auto">
                <ul className="flex justify-center gap-10 bg-[rgba(240,240,240,0.7)] backdrop-blur-md p-2 rounded-xl shadow">
                    <li className="p-1">
                        <a href="#home" className="text-sm font-semibold  text-sub md:text-base">
                            홈
                        </a>
                    </li>
                    <li className="p-1">
                        <a href="#skill" className="text-sm font-semibold text-sub md:text-base">
                            기술
                        </a>
                    </li>
                    <li className="p-1">
                        <a href="#project" className="text-sm font-semibold text-sub   md:text-base">
                            프로젝트
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
