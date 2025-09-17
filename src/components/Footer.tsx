import { FOOTER_LINKS } from '../data/links';
import { Link } from 'react-router-dom';
import { CONTACT } from '../data/contactData/contact';
import SocialMediaIcons from './ui/SocialMediaIcons';
import footerLogo from '../assets/img/logo/footerLogo.png';
import eclipse from '../assets/img/logo/eclipse.png';

type FooterLink = {
    label: string;
    path?: string;
    external?: boolean;
};

type FooterLinksProps = {
    links: FooterLink[];
    newTab?: boolean;
};

const COPYRIGHT_PARAGRAPH =
    "text-justify text-white text-lg font-normal font-['Inter'] leading-loose";

const LINK_LIST =
    "text-white text-base font-light font-['Inter'] leading-loose";

const HEADER_STYLE =
    "text-white text-xl font-medium font-['Inter'] capitalize mb-2";

function FooterLinks({ links, newTab = false }: FooterLinksProps) {
    return (
        <ul className="flex flex-col space-y-2">
            {links.map(({ label, path, external }) => {
                // No path means plain text item
                if (!path) {
                    return (
                        <li
                            key={label}
                            className={`${LINK_LIST} relative flex items-center pl-6`}
                        >
                            <span className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 transform rounded-full bg-white" />
                            <span className="hover:underline">{label}</span>
                        </li>
                    );
                }

                // Link content, external or internal
                const content =
                    newTab || external ? (
                        <a
                            href={path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {label}
                        </a>
                    ) : (
                        <Link to={path} className="hover:underline">
                            {label}
                        </Link>
                    );

                return (
                    <li
                        key={label}
                        className={`${LINK_LIST} relative flex items-center pl-6`}
                    >
                        <span className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 transform rounded-full bg-white" />
                        {content}
                    </li>
                );
            })}
        </ul>
    );
}

function FooterSocialMedia() {
    return (
        <section className={LINK_LIST} aria-label="social media">
            <SocialMediaIcons socialMedia={CONTACT.socialMedia} />
        </section>
    );
}

function FooterLogoSection() {
    return (
        <section
            aria-label="Footer Logo"
            className="relative flex flex-col items-center"
        >
            <h1 className={`${HEADER_STYLE} mb-6`}>Join Venture With</h1>
            <div className="relative">
                <img
                    src={eclipse}
                    alt="Eclipse"
                    className="h-50 w-50 rounded-full bg-white"
                />
                <img
                    src={footerLogo}
                    alt="Footer Logo"
                    className="absolute h-25 w-50"
                    style={{
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}
                />
            </div>
        </section>
    );
}

function FooterUsefulLinks() {
    return (
        <section
            aria-label="Useful Links"
            className="flex flex-col items-start"
        >
            <h1 className={`${HEADER_STYLE} mb-5`}>Useful Links</h1>
            <FooterLinks links={FOOTER_LINKS.usefulLinks} newTab />
        </section>
    );
}

function FooterContact() {
    return (
        <section
            aria-label="Connect With Us"
            className="mt-6 flex flex-col items-start"
        >
            <ul className="grid grid-cols-2 gap-y-2">
                {CONTACT.contact.map(({ icon, url, info }, idx) => (
                    <li
                        key={idx}
                        className={`${
                            LINK_LIST
                        } flex w-max items-center ${idx % 2 !== 0 ? 'ml-10' : ''}`}
                    >
                        <span className="mr-2 text-white">{icon}</span>
                        <a href={url} className="hover:underline">
                            {info}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function FooterCopyright() {
    return (
        <section
            className="flex flex-col justify-between gap-4 md:flex-row"
            aria-label="Copyright"
        >
            <p className={COPYRIGHT_PARAGRAPH}>
                All rights Reserved | Copyright © 2024 Trans Nepal Freight
                Services Pvt. Ltd.
            </p>
            <p className={COPYRIGHT_PARAGRAPH}>Site By : SRIYOG Consulting</p>
        </section>
    );
}

export default function Footer() {
    return (
        <footer
            style={{ backgroundColor: 'var(--primary)' }}
            className="relative p-6"
            role="contentinfo"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-4 flex items-start justify-end">
                    <FooterSocialMedia />
                </div>

                <div className="mb-5 flex flex-wrap justify-between gap-8">
                    <FooterLogoSection />

                    <FooterUsefulLinks />

                    <div className="flex max-w-[560px] flex-col">
                        <p className="font-inter h-40 text-justify text-sm leading-relaxed font-normal text-white/80 capitalize">
                            TransNepal Freight Services Pvt. Ltd., was
                            incorporated in the year 2002 under the Nepalese
                            Company Act, and started operation from 17th April,
                            2002 by taking over operation and management of the
                            two ICDs’ at Biratnagar and Bhairahawa on lease for
                            a period of ten years from Nepal Intermodal
                            Transport Development Board a body constituted by
                            the Government of Nepal.
                        </p>

                        <FooterContact />
                    </div>
                </div>

                <div className="mt-10 w-full border-b-2 border-gray-300" />

                <FooterCopyright />
            </div>
        </footer>
    );
}
