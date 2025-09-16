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
        <div className="inline-flex h-96 w-96 flex-col items-center justify-start gap-7 rounded-[5px] bg-white shadow-xl outline-offset-[-1px]">
            {/* Image */}
            <img
                src={img}
                alt={title}
                className="h-60 w-96 rounded-tl-[5px] rounded-tr-[5px] object-cover"
            />

            {/* Content */}
            <div className="flex w-80 flex-col items-start justify-start">
                <div className="h-8 self-stretch font-['Poppins'] text-base leading-normal font-semibold tracking-tight text-black">
                    {title}
                </div>
                <div className="h-20 self-stretch font-['Poppins'] text-sm leading-snug font-light text-black">
                    {description}
                </div>
            </div>
        </div>
    );
}
