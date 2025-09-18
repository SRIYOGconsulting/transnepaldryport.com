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
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-52 p-2.5 bg-sky-950 rounded-tl-[10px] rounded-bl-[10px] flex flex-col justify-center items-center gap-2.5">
            <div className="w-32 h-7 origin-top-left rotate-90 text-white text-xl font-bold font-['Inter'] capitalize whitespace-nowrap">
                CONTACT US
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
                <h3 className="text-xl font-[Poppins] font-light leading-snug text-black capitalize overflow-hidden whitespace-nowrap">
                    {title}
                </h3>
            </div>
        </div>
    );
}
export default function DetailsTransNepal() {
    return (
        <section className="flex relative w-full justify-center bg-slate-100/60 px-4 py-12 sm:px-20 lg:px-15">
            <div className="flex w-full max-w-7xl items-center justify-between gap-8 lg:flex-col">
                <div className="flex flex-col">
                    <h1 className="font-[Poppins] text-4xl text-black mb-10">
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
                <div className="mt-8 flex gap-30 justify-between">
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
