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
        <section className="inline-flex h-96 w-96 flex-col items-center justify-start gap-7 rounded-[5px] bg-white shadow-[0px_1px_5px_0px_rgba(0,0,0,0.20)]">
            <img
                className="h-60 w-96 rounded-tl-[5px] rounded-tr-[5px]"
                src={img}
            />

            <div className="flex w-80 flex-col items-start justify-start">
                <h1 className="h-8 justify-start self-stretch font-['Poppins'] text-base leading-normal font-semibold tracking-tight text-black">
                    {title}
                </h1>
                <p className="h-20 justify-start self-stretch font-['Poppins'] text-sm leading-snug font-light text-black">
                    {description}
                </p>
            </div>
        </section>
    );
}
