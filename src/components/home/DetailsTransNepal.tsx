import {
    DETAILS,
    DETAILS_TITLE_WITH_LOGO
} from '../../data/homePageData/details';

type InfoCardProps = {
    logoSrc: string;
    title: string;
};

function ContactUs() {
    return (
        <div className="absolute top-1/2 right-0 flex h-52 w-12 -translate-y-1/2 flex-col items-center justify-center gap-2.5 rounded-tl-[10px] rounded-bl-[10px] bg-sky-950 p-2.5">
            <div className="rotate-90 transform">
                <span className="font-['Inter'] text-xl font-bold whitespace-nowrap text-white capitalize">
                    CONTACT US
                </span>
            </div>
        </div>
    );
}

function InfoCard({ logoSrc, title }: InfoCardProps) {
    return (
        <div className="w-full rounded-md px-5 py-3">
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-24 w-24 items-center justify-center">
                    <img
                        src={logoSrc}
                        alt={`${title} logo`}
                        className="h-full w-full object-contain"
                    />
                </div>
                <h3 className="overflow-hidden font-[Poppins] text-xl leading-snug font-light whitespace-nowrap text-black capitalize">
                    {title}
                </h3>
            </div>
        </div>
    );
}
export default function DetailsTransNepal() {
    return (
        <section className="relative flex w-full justify-center bg-slate-100/60 px-4 py-12 sm:px-20 lg:px-15">
            <div className="flex w-full max-w-7xl items-center justify-between gap-8 lg:flex-col">
                <div className="flex flex-col">
                    <h1 className="mb-10 font-[Poppins] text-4xl text-black">
                        {DETAILS.title}
                    </h1>
                    <p className="font-segoe text-justify text-sm font-light text-black">
                        {DETAILS.description.firstParagraph}
                    </p>
                    <br />
                    <p className="font-segoe text-justify text-sm font-light text-black">
                        {DETAILS.description.secondParagraph}
                    </p>
                </div>

                {/* Info Cards */}
                <div className="mt-8 flex justify-between gap-30">
                    {DETAILS_TITLE_WITH_LOGO.map((item, index) => (
                        <div key={index} className="flex-1">
                            <InfoCard logoSrc={item.img} title={item.title} />
                        </div>
                    ))}
                </div>
            </div>
            <ContactUs />
        </section>
    );
}
