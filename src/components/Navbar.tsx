import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/img/logo/logo.png';
import { NAV_LINKS } from '../data/links';
import type { NavLink } from '../types/links';

// Constants
const NAV_CONFIG = {
    classes: {
        header: 'bg-primary/95 sticky top-0 z-[1000] w-full bg-(--primary) px-4 py-3 shadow-sm backdrop-blur-sm lg:px-8 lg:py-4',
        mobileMenu:
            'bg-primary/95 absolute top-full right-0 left-0 border-t border-white/10 shadow-xl backdrop-blur-sm lg:hidden',
        logo: 'h-12 w-auto rounded-lg bg-white p-1 shadow-lg'
    },
    animation: {
        duration: 200,
        mobileDelay: 150
    }
} as const;

// Utility Functions
const isDropdown = (link: NavLink): boolean =>
    Array.isArray(link.children) &&
    link.children.length > 0 &&
    link.type !== 'group';

const useHoverWithDelay = (delay: number = 150) => {
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setIsHovered(false);
        }, delay);
    };

    return {
        isHovered,
        handleMouseEnter,
        handleMouseLeave
    };
};

// Sub-Components
const DropdownGroup = ({ group }: { group: NavLink }) => (
    <div className="mb-3" role="group" aria-label={group.label}>
        <p className="border-b border-gray-100 px-3 py-2 text-sm font-semibold text-white md:text-gray-700">
            {group.label}
        </p>
        <ul className="mt-2">
            {group.children?.map(child => (
                <li key={child.label}>
                    {child.path ? (
                        <Link
                            to={child.path}
                            className="block rounded-lg px-3 py-2 text-white transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900 md:text-gray-600"
                        >
                            {child.label}
                        </Link>
                    ) : (
                        <span className="block px-3 py-2 text-gray-400">
                            {child.label}
                        </span>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

const DropdownMenu = ({
    items,
    isMobile = false,
    onItemClick
}: {
    items: NavLink[];
    isMobile?: boolean;
    onItemClick?: () => void;
}) => {
    const menuClasses = isMobile
        ? 'w-full mt-2 space-y-1'
        : 'absolute top-full left-0 z-[1000] mt-1 min-w-[240px] rounded-xl bg-white p-3 shadow-lg border border-gray-100';

    const textColorClass = isMobile ? 'text-white' : 'text-gray-600';

    return (
        <ul className={menuClasses} role="menu" aria-label="submenu">
            {items.map(item =>
                item.type === 'group' ? (
                    <DropdownGroup key={item.label} group={item} />
                ) : (
                    <li key={item.label} role="menuitem">
                        <Link
                            to={item.path!}
                            className={`block rounded-lg px-3 py-2 whitespace-nowrap transition-colors duration-200 hover:bg-gray-200 ${textColorClass} hover:text-gray-900`}
                            onClick={onItemClick}
                        >
                            {item.label}
                        </Link>
                    </li>
                )
            )}
        </ul>
    );
};

const NavLinkLabel = ({
    label,
    hasDropdown,
    isOpen = false
}: {
    label: string;
    hasDropdown: boolean;
    isOpen?: boolean;
}) => (
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

// Navigation Items
const DesktopNavItem = ({ link }: { link: NavLink }) => {
    const { isHovered, handleMouseEnter, handleMouseLeave } =
        useHoverWithDelay();
    const hasDropdown = isDropdown(link);
    const location = useLocation();
    const isActive = link.path === location.pathname;

    const linkClasses = `inline-flex items-center gap-1 px-3 py-2 rounded-lg font-['Inter'] text-base whitespace-nowrap text-white transition-all duration-200 ${
        isActive ? 'bg-white/20' : 'hover:bg-white/10'
    }`;

    // New: manually control hover state
    const timeoutRef = useRef<number | null>(null);
    const closeDropdown = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
            handleMouseLeave(); // simulate mouse leave
        }, NAV_CONFIG.animation.mobileDelay);
    };

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
                    <DropdownMenu
                        items={link.children!}
                        onItemClick={closeDropdown} // 👈 here we close the dropdown
                    />
                </div>
            )}
        </li>
    );
};

const MobileNavItem = ({ link }: { link: NavLink }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasDropdown = isDropdown(link);
    const location = useLocation();
    const isActive = link.path === location.pathname;

    const toggleDropdown = () => {
        if (hasDropdown) setIsExpanded(!isExpanded);
    };

    const itemClasses = `flex items-center justify-between w-full px-4 py-3 rounded-xl text-white transition-all duration-200 ${
        isActive ? 'bg-white/20' : 'hover:bg-white/20'
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
                    <div className="mt-2 pl-4">
                        <DropdownMenu items={link.children!} isMobile={true} />
                    </div>
                )}
            </div>
        </li>
    );
};

// Navigation Sections
const NavMenu = ({ links }: { links: NavLink[] }) => {
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
};

const MobileNavMenu = ({
    links,
    isOpen
}: {
    links: NavLink[];
    isOpen: boolean;
}) => (
    <nav
        aria-label="Mobile Navigation"
        className={`bg-(--primary) transition-all duration-300 ease-in-out lg:hidden ${
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

const TariffLink = ({ link }: { link: NavLink }) => {
    const location = useLocation();
    const isActive = link.path === location.pathname;

    return (
        <nav aria-label="Tariff Navigation">
            <div
                className={`hidden transition-transform duration-200 hover:scale-105 lg:block ${
                    isActive ? '' : ''
                }`}
            >
                <ul className="inline-flex h-12 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg">
                    <li>
                        <Link
                            to={link.path!}
                            className="w-full rounded-xl px-4 py-2 text-center font-['Poppins'] text-base font-semibold whitespace-nowrap text-blue-900 transition-colors hover:bg-blue-50"
                        >
                            {link.label}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const MobileMenuButton = ({
    isOpen,
    onClick
}: {
    isOpen: boolean;
    onClick: () => void;
}) => (
    <button
        onClick={onClick}
        className="relative z-10 rounded-lg p-2 transition-colors duration-200 hover:bg-white/10 lg:hidden"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
    >
        {isOpen ? (
            <HiX className="h-6 w-6 text-white" />
        ) : (
            <HiMenu className="h-6 w-6 text-white" />
        )}
    </button>
);

// Main Component
export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const tariffLink = NAV_LINKS.find(link => link.label === 'Tariff');
    const location = useLocation();

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={NAV_CONFIG.classes.header} ref={mobileMenuRef}>
            <div className="relative mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <Link to="/" className="z-10 flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className={NAV_CONFIG.classes.logo}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden flex-1 items-center justify-center gap-6 lg:flex">
                    <NavMenu links={NAV_LINKS} />
                </div>

                {/* Tariff Links */}
                <div className="z-10 hidden lg:block">
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
                <MobileMenuButton
                    isOpen={isMobileMenuOpen}
                    onClick={toggleMobileMenu}
                />

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-0 bg-black/50 lg:hidden" />
                )}
            </div>

            {/* Mobile Menu */}
            <div className={NAV_CONFIG.classes.mobileMenu}>
                <MobileNavMenu links={NAV_LINKS} isOpen={isMobileMenuOpen} />
            </div>
        </header>
    );
}
