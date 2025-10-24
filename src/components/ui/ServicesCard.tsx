type ServicesCardProps = {
    title: string;
    description: string;
    img: string;
};

export default function ServicesCard({
    title,
    description,
    img
}: ServicesCardProps) {
    return (
        <div className="flex h-auto w-full flex-col items-center justify-start gap-4 rounded-lg bg-white shadow-xl transition-all hover:shadow-2xl sm:gap-5 lg:gap-7">
            {/* Image */}
            <img
                src={img}
                alt={title}
                className="h-48 w-full rounded-t-lg object-cover sm:h-52 lg:h-60"
            />

            {/* Content */}
            <div className="flex w-full flex-col items-start justify-start px-4 pb-4 sm:px-5 sm:pb-5">
                <h3 className="font-poppins mb-2 w-full text-base leading-normal font-semibold tracking-tight text-black sm:text-lg lg:mb-3">
                    {title}
                </h3>
                <p className="font-poppins w-full text-sm leading-relaxed font-light text-black sm:leading-snug">
                    {description}
                </p>
            </div>
        </div>
    );
}
