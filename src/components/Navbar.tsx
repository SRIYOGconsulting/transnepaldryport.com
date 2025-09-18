import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';
import logo from '../assets/img/logo/logo.png';
import { NAV_LINKS } from '../data/links';
import type { NavLink } from '../types/links';

const isDropdown = (link: NavLink): boolean =>
    Array.isArray(link.children) &&
    link.children.length > 0 &&
    link.type !== 'group';

function DropdownGroup({ group }: { group: NavLink }) {
    return (
        <div className="mb-2" role="group" aria-label={group.label}>
            <p className="px-2 py-1 text-sm font-semibold text-gray-700">
                {group.label}
            </p>
            <ul className="pl-2">
                {group.children?.map(child => (
                    <li
                        key={child.label}
                        className="rounded p-2 hover:bg-gray-200"
                    >
                        {child.path ? (
                            <Link to={child.path}>{child.label}</Link>
                        ) : (
                            <span>{child.label}</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function DropdownMenu({ items }: { items: NavLink[] }) {
    return (
        <ul
            className="absolute top-full left-0 z-[999] mt-2 min-w-[180px] origin-top transform rounded bg-white p-2 text-black shadow-lg transition-all duration-200 ease-in-out"
            role="menu"
            aria-label="submenu"
        >
            {items.map(item =>
                item.type === 'group' ? (
                    <DropdownGroup key={item.label} group={item} />
                ) : (
                    <li
                        key={item.label}
                        className="rounded p-2 hover:bg-gray-200"
                        role="menuitem"
                    >
                        <Link to={item.path!}>{item.label}</Link>
                    </li>
                )
            )}
        </ul>
    );
}

function NavLinkLabel({
    label,
    hasDropdown
}: {
    label: string;
    hasDropdown: boolean;
}) {
    return (
        <>
            <span>{label}</span>
            {hasDropdown && (
                <HiChevronDown className="h-4 w-4 text-white transition-transform duration-200 group-hover:rotate-180" />
            )}
        </>
    );
}

function NavItem({ link }: { link: NavLink }) {
    const [isHovered, setIsHovered] = useState(false);
    const hoverTimeout = useRef<number | null>(null);
    const hasDropdown = isDropdown(link);

    // Clear timeout on unmount to avoid memory leaks
    useEffect(() => {
        return () => {
            if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        };
    }, []);

    const handleMouseEnter = () => {
        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current);
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        hoverTimeout.current = window.setTimeout(() => {
            setIsHovered(false);
        }, 200); // Delay before closing dropdown
    };

    return (
        <li
            className="group relative flex cursor-pointer items-center"
            role="none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {link.path ? (
                <Link
                    to={link.path}
                    className="inline-flex items-center gap-1 font-['Inter'] text-base font-normal whitespace-nowrap text-white"
                    role="menuitem"
                    aria-haspopup={hasDropdown}
                    aria-expanded={hasDropdown ? isHovered : undefined}
                >
                    <NavLinkLabel
                        label={link.label}
                        hasDropdown={hasDropdown}
                    />
                </Link>
            ) : (
                <span
                    className="inline-flex items-center gap-1 font-['Inter'] text-base font-normal whitespace-nowrap text-white"
                    role="menuitem"
                    aria-haspopup={hasDropdown}
                    aria-expanded={hasDropdown ? isHovered : undefined}
                >
                    <NavLinkLabel
                        label={link.label}
                        hasDropdown={hasDropdown}
                    />
                </span>
            )}

            {/* Render the dropdown when hovered, and keep it open while hovering over it */}
            {hasDropdown && isHovered && (
                <div
                    className="absolute top-full left-0 z-[999]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <DropdownMenu items={link.children!} />
                </div>
            )}
        </li>
    );
}

function NavMenu({ links }: { links: NavLink[] }) {
    const mainLinks = links.filter(link => link.label !== 'Tarrif');
    return (
        <nav aria-label="Main Navigation">
            <ul className="inline-flex h-7 flex-wrap items-center gap-x-10">
                {mainLinks.map(link => (
                    <NavItem key={link.label} link={link} />
                ))}
            </ul>
        </nav>
    );
}

function TarrifLink({ link }: { link: NavLink }) {
    return (
        <nav aria-label="Tarrif Navigation">
            <ul className="inline-flex h-7 w-20 items-center justify-center rounded-[10px] bg-white p-2.5">
                <li>
                    <Link
                        to={link.path!}
                        className="w-full truncate text-center font-['Poppins'] text-base font-normal whitespace-nowrap text-blue-900"
                    >
                        {link.label}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default function Navbar() {
    const tariffLink = NAV_LINKS.find(link => link.label === 'Tarrif');

    return (
        <header
            className="relative z-[1000] w-full px-8 py-4"
            style={{ backgroundColor: 'var(--primary)' }}
        >
            <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between space-x-4">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-[52.14px] w-auto bg-white"
                    style={{
                        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                />

                <NavMenu links={NAV_LINKS} />

                {tariffLink && <TarrifLink link={tariffLink} />}
            </div>
        </header>
    );
}
