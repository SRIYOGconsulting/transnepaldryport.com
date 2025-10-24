type BannerProps = {
    title: string;
    subtitle: string;
    img: string;
};

export default function Banner({ title, subtitle, img }: BannerProps) {
    return (
        <section
            aria-label="Banner"
            className="relative flex h-64 w-full flex-col items-center justify-center bg-sky-950 sm:h-80 md:h-96 lg:h-[462px]"
        >
            {/* Background image */}
            <img
                src={img}
                alt="Banner background"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-sky-950/70"></div>

            {/* Content */}
            <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-4 px-4 text-center sm:gap-6 sm:px-6 md:px-8 lg:items-start lg:text-left">
                <div className="flex w-full max-w-3xl flex-col items-center gap-4 lg:items-start lg:gap-6">
                    <h1 className="font-segoe text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    <p className="font-segoe text-lg font-light text-white sm:text-xl md:text-2xl lg:text-3xl">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
}
