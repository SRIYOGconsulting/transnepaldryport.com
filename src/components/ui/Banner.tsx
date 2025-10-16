type BannerProps = {
    title: string;
    subtitle: string;
    img: string;
};
export default function Banner({ title, subtitle, img }: BannerProps) {
    return (
        <section
            aria-label="Banner"
            className="relative inline-flex h-[462px] w-full flex-col items-start justify-center gap-2.5 bg-sky-950 px-8 sm:px-12 md:px-16 lg:px-25"
        >
            {/* Background image */}
            <img
                src={img}
                alt="Banner background"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Content */}
            <div className="relative flex w-full max-w-xl flex-col items-start justify-center gap-6 bg-sky-950/95 px-14 py-16">
                <div className="flex w-full flex-col items-start justify-center gap-6">
                    <h1 className="font-['Segoe_UI'] text-5xl font-bold text-white">
                        {title}
                    </h1>
                    <p className="font-['Segoe_UI'] text-3xl font-light text-white">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
}
