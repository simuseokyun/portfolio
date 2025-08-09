'use client';
import { useState } from 'react';
import Image from 'next/image';
import NavItem from './NavItem';
export default function NavList() {
    const [active, setActive] = useState('home');
    const [clickState, setClickState] = useState(false);

    const navItems = [
        { key: 'home', name: '홈', href: '#home' },
        { key: 'carrer', name: '경력', href: '#carrer' },
        { key: 'skill', name: '기술', href: '#skill' },
        { key: 'project', name: '프로젝트', href: '#project' },
        { key: 'contact', name: '정보', href: '#contact' },
    ];
    const onToggle = () => {
        if (!clickState) {
            setClickState(true);
        } else {
            setClickState(false);
        }
    };
    return (
        <nav className="fixed top-5 left-1/2  w-full transform -translate-x-1/2 bg-transparent z-50">
            <div className="max-w-md m-auto p-0.5  bg-[rgba(240,240,240,0.7)]  shadow rounded-3xl overflow-hidden">
                <ul className="hidden justify-end items-center gap-5 backdrop-blur-md  md:gap-10 md:justify-center  md:flex  ">
                    {navItems?.map((item) => (
                        <NavItem key={item.key} item={item} active={active} onClick={() => setActive(item?.key)} />
                    ))}
                </ul>
                <div className="block items-center gap-5 backdrop-blur-md md:hidden">
                    {clickState ? (
                        <Image src="/assets/DropUp.svg" width={30} height={30} alt="image" onClick={onToggle} />
                    ) : (
                        <Image src="/assets/DropDown.svg" width={30} height={30} alt="image" onClick={onToggle} />
                    )}
                </div>
            </div>

            <div
                className={`block max-w-md m-auto  mt-2 bg-[rgba(240,240,240,0.9)] rounded-md transition-all duration-500 ease-in-out overflow-hidden md:hidden ${clickState ? 'h-[180px]' : 'h-0'}`}
            >
                <ul className="p-2">
                    {navItems.map((item) => (
                        <NavItem key={item.key} item={item} active={active} onClick={() => setActive(item.key)} />
                    ))}
                </ul>
            </div>
        </nav>
    );
}
