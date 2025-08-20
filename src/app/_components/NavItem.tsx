'use client';
import Link from 'next/link';
import cx from 'classnames';
import { NavItem as NavItemProps } from '../types/type';
export default function NavItem({ item, onClick, active }: NavItemProps) {
    const { id, name, href } = item;
    return (
        <li className="px-1 py-1.5">
            <Link
                href={href}
                onClick={onClick}
                className="relative text-sm md:text-base font-semibold transition-colors"
            >
                <span
                    className={cx('inline-block', {
                        'text-black': active === id,
                        'text-sub': active !== id,
                    })}
                >
                    {name}
                </span>
                <span
                    className={`absolute bottom-[-4px] left-0  h-[3px] bg-[var(--main-color)] transition-all uration-200 rounded-full ${active === id ? 'w-full' : 'w-0'}`}
                />
            </Link>
        </li>
    );
}
