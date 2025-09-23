import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/img/logo/logo.png';
import { NAV_LINKS } from '../data/links';
import type { NavLink } from '../types/links';

const isDropdown = (link: NavLink): boolean =>
    Array.isArray(link.children) &&
    link.children.length > 0 &&
    link.type !== 'group';

function DropdownGroup({ group }: { group: NavLink }) {
    return (
        <div className="mb-3" role="group" aria-label={group.label}>
            <p className="px-3 py-2 text-sm font-semibold text-gray-700 border-b border-gray-100">
                {group.label}
            </p>
            <ul className="mt-2">
                {group.children?.map(child => (
                    <li key={child.label}>
                        {child.path ? (
                            <Link 
                                to={child.path}
                                className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                            >
                                {child.label}
                            </Link>
                        ) : (
                            <span className="block px-3 py-2 text-gray-400">{child.label}</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function DropdownMenu({ items, isMobile = false }: { items: NavLink[]; isMobile?: boolean }) {
    const menuClasses = isMobile 
        ? "w-full mt-2 space-y-1"
        : "absolute top-full left-0 z-[1000] mt-1 min-w-[240px] rounded-xl bg-white p-3 shadow-lg border border-gray-100";

    const textColorClass = isMobile ? "text-white" : "text-gray-600";
    const hoverTextColorClass = isMobile ? "text-gray-900" : "text-gray-900";

    return (
        <ul
            className={menuClasses}
            role="menu"
            aria-label="submenu"
        >
            {items.map(item =>
                item.type === 'group' ? (
                    <DropdownGroup key={item.label} group={item} isMobile={isMobile} />
                ) : (
                    <li key={item.label} role="menuitem">
                        <Link 
                            to={item.path!}
                            className={`block px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 ${textColorClass} hover:${hoverTextColorClass}`}
                        >
                            {item.label}
                        </Link>
                    </li>
                )
            )}
        </ul>
    );
}
function NavLinkLabel({
    label,
    hasDropdown,
    isOpen = false
}: {
    label: string;
    hasDropdown: boolean;
    isOpen?: boolean;
}) {
    return (
        <>
            <span className="font-medium">{label}</span>
            {hasDropdown && (
                <HiChevronDown 
                    className={`h-4 w-4 text-white transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`} 
                />
            )}
        </>
    );
}

function DesktopNavItem({ link }: { link: NavLink }) {
    const [isHovered, setIsHovered] = useState(false);
    const hoverTimeout = useRef<number | null>(null);
    const hasDropdown = isDropdown(link);
    const location = useLocation();

    const isActive = link.path === location.pathname;

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
        }, 150);
    };

    const linkClasses = `inline-flex items-center gap-1 px-3 py-2 rounded-lg font-['Inter'] text-base whitespace-nowrap text-white transition-all duration-200 ${
        isActive ? 'bg-white/20' : 'hover:bg-white/10'
    }`;

    return (
        <li
            className="relative"
            role="none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {link.path ? (
                <Link
                    to={link.path}
                    className={linkClasses}
                    role="menuitem"
                    aria-haspopup={hasDropdown}
                    aria-expanded={hasDropdown ? isHovered : undefined}
                >
                    <NavLinkLabel
                        label={link.label}
                        hasDropdown={hasDropdown}
                        isOpen={isHovered}
                    />
                </Link>
            ) : (
                <span
                    className={linkClasses}
                    role="menuitem"
                    aria-haspopup={hasDropdown}
                    aria-expanded={hasDropdown ? isHovered : undefined}
                >
                    <NavLinkLabel
                        label={link.label}
                        hasDropdown={hasDropdown}
                        isOpen={isHovered}
                    />
                </span>
            )}

            {hasDropdown && isHovered && (
                <div
                    className="absolute top-full left-0 z-[1000] pt-1"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <DropdownMenu items={link.children!} />
                </div>
            )}
        </li>
    );
}

function MobileNavItem({ link }: { link: NavLink }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasDropdown = isDropdown(link);
    const location = useLocation();

    const isActive = link.path === location.pathname;

    const toggleDropdown = () => {
        if (hasDropdown) {
            setIsExpanded(!isExpanded);
        }
    };

    const itemClasses = `flex items-center justify-between w-full px-4 py-3 rounded-xl text-white transition-all duration-200 ${
        isActive ? 'bg-white/20' : 'hover:bg-white/10'
    }`;

    return (
        <li className="border-b border-white/10 last:border-b-0">
            <div className="flex flex-col">
                {link.path && !hasDropdown ? (
                    <Link
                        to={link.path}
                        className={itemClasses}
                        onClick={() => setIsExpanded(false)}
                    >
                        <span className="font-medium">{link.label}</span>
                    </Link>
                ) : (
                    <button
                        className={itemClasses}
                        onClick={toggleDropdown}
                        aria-expanded={isExpanded}
                    >
                        <span className="font-medium">{link.label}</span>
                        {hasDropdown && (
                            <HiChevronDown 
                                className={`h-4 w-4 transition-transform duration-200 ${
                                    isExpanded ? 'rotate-180' : ''
                                }`} 
                            />
                        )}
                    </button>
                )}
                
                {hasDropdown && isExpanded && (
                    <div className="pl-4 mt-2">
                        <DropdownMenu items={link.children!} isMobile={true} />
                    </div>
                )}
            </div>
        </li>
    );
}

function NavMenu({ links }: { links: NavLink[] }) {
    const mainLinks = links.filter(link => link.label !== 'Tariff');
    return (
        <nav aria-label="Main Navigation" className="hidden lg:block">
            <ul className="flex items-center gap-x-2">
                {mainLinks.map(link => (
                    <DesktopNavItem key={link.label} link={link} />
                ))}
            </ul>
        </nav>
    );
}

function MobileNavMenu({ links, isOpen }: { links: NavLink[]; isOpen: boolean }) {
    return (
        <nav 
            aria-label="Mobile Navigation" 
            className={`lg:hidden transition-all bg-(--primary) duration-300 ease-in-out ${
                isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
        >
            <ul className="py-4">
                {links.map(link => (
                    <MobileNavItem key={link.label} link={link} />
                ))}
            </ul>
        </nav>
    );
}

function TariffLink({ link }: { link: NavLink }) {
    const location = useLocation();
    const isActive = link.path === location.pathname;

    return (
        <nav aria-label="Tariff Navigation">
            <div className={`hidden lg:block transition-transform duration-200 hover:scale-105 ${
                isActive ? 'ring-2 ring-white/30' : ''
            }`}>
                <ul className="inline-flex h-12 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg">
                    <li>
                        <Link
                            to={link.path!}
                            className="w-full text-center font-['Poppins'] text-base font-semibold whitespace-nowrap text-blue-900 px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors"
                        >
                            {link.label}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const tariffLink = NAV_LINKS.find(link => link.label === 'Tariff');

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu when route changes
    const location = useLocation();
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header
            className="sticky bg-(--primary) top-0 z-[1000] w-full px-4 py-3 lg:px-8 lg:py-4 backdrop-blur-sm bg-primary/95 shadow-sm"
            ref={mobileMenuRef}
        >
            <div className="relative mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 z-10">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="h-12 w-auto bg-white rounded-lg p-1 shadow-lg"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
                    <NavMenu links={NAV_LINKS} />
                </div>

                {/* Tariff Link */}
                <div className="hidden lg:block z-10">
                    {tariffLink && <TariffLink link={tariffLink} />}
                </div>

                {/* Mobile Tariff Link */}
                {tariffLink && (
                    <div className="lg:hidden">
                        <Link
                            to={tariffLink.path!}
                            className="inline-flex h-10 items-center justify-center rounded-xl bg-white px-4 font-['Poppins'] text-sm font-semibold text-blue-900 shadow-lg"
                        >
                            {tariffLink.label}
                        </Link>
                    </div>
                )}

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMobileMenu}
                    className="lg:hidden relative z-10 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? (
                        <HiX className="h-6 w-6 text-white" />
                    ) : (
                        <HiMenu className="h-6 w-6 text-white" />
                    )}
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-black/50 lg:hidden z-0" />
                )}
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden absolute left-0 right-0 top-full bg-primary/95 backdrop-blur-sm border-t border-white/10 shadow-xl">
                <MobileNavMenu links={NAV_LINKS} isOpen={isMobileMenuOpen} />
            </div>
        </header>
    );
}
