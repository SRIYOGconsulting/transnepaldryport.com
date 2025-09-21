type ItemProps = {
    title: string;
    description: string[] | string;
};

export default function FeatureSection({ title, description }: ItemProps) {
    return (
        <section className="flex h-60 items-center justify-center gap-10 self-stretch bg-slate-100 px-4 sm:px-20 lg:px-10">
            <div className="inline-flex h-44 w-[1162px] flex-col items-center justify-center gap-2">
                {/* Title */}
                <h2 className="mb-5 self-stretch font-['Poppins'] text-xl font-normal text-blue-900">
                    {title}
                </h2>

                {Array.isArray(description) ? (
                    description.map((desc, index) => (
                        <p
                            key={index}
                            className="self-stretch text-justify font-['Poppins'] text-xs leading-relaxed font-light text-neutral-600"
                        >
                            {desc}
                        </p>
                    ))
                ) : (
                    <p className="self-stretch text-justify font-['Poppins'] text-xs leading-relaxed font-light text-neutral-600">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
