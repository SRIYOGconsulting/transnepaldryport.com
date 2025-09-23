import {
    DETAILS,
    DETAILS_TITLE_WITH_LOGO
} from '../../data/homePageData/details';

type InfoCardProps = {
    logoSrc: string;
    title: string;
};

function InfoCard({ logoSrc, title }: InfoCardProps) {
    return (
        <div className="w-full rounded-md px-3 py-2 lg:px-5 lg:py-3">
            <div className="flex flex-col items-center gap-2 text-center lg:gap-4">
                <div className="flex h-16 w-16 items-center justify-center lg:h-24 lg:w-24">
                    <img
                        src={logoSrc}
                        alt={`${title} logo`}
                        className="h-full w-full object-contain"
                    />
                </div>
                <h3 className="overflow-hidden font-[Poppins] text-sm leading-snug font-light whitespace-nowrap text-black capitalize lg:text-xl">
                    {title}
                </h3>
            </div>
        </div>
    );
}

function InfoCardList() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {DETAILS_TITLE_WITH_LOGO.map(({ img, title }, index) => (
                    <div
                        key={index}
                        className="flex justify-center lg:justify-start"
                    >
                        <InfoCard logoSrc={img} title={title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function ContactUsButton() {
    return (
        <div className="fixed top-1/2 right-0 z-40 hidden h-40 w-10 -translate-y-1/2 transform flex-col items-center justify-center gap-2.5 rounded-tl-[10px] rounded-bl-[10px] bg-sky-950 p-2.5 lg:flex lg:h-52 lg:w-12">
            <div className="rotate-90">
                <span className="font-['Inter'] text-base font-bold whitespace-nowrap text-white capitalize lg:text-xl">
                    CONTACT US
                </span>
            </div>
        </div>
    );
}

function MobileContactUsButton() {
    return (
        <div className="fixed right-4 bottom-4 z-40 lg:hidden">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-950 shadow-lg transition-transform hover:scale-110">
                <span className="rotate-90 font-['Inter'] text-xs font-bold text-white">
                    CONTACT
                </span>
            </button>
        </div>
    );
}
export default function DetailsTransNepal() {
    return (
        <section className="relative flex w-full justify-center bg-slate-100/60 px-4 py-8 sm:px-6 lg:px-15 lg:py-12">
            <div className="flex w-full max-w-7xl flex-col items-start justify-between gap-6 lg:gap-8">
                {/* Description Section */}
                <div className="w-full">
                    <h1 className="mb-6 text-center font-[Poppins] text-2xl text-black sm:text-3xl lg:mb-10 lg:text-left lg:text-4xl">
                        {DETAILS.title}
                    </h1>
                    <div className="font-segoe space-y-4 text-justify text-sm leading-relaxed font-light text-black sm:text-base">
                        <p>{DETAILS.description.firstParagraph}</p>
                        <p>{DETAILS.description.secondParagraph}</p>
                    </div>
                </div>

                {/* Info Cards Section below text content */}
                <InfoCardList />
            </div>

            {/* Desktop Contact Button */}
            <ContactUsButton />

            {/* Mobile Contact Button */}
            <MobileContactUsButton />
        </section>
    );
}
