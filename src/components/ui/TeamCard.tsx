type DirectorCardProps = {
    imgSrc: string;
    name: string;
    role: string;
    description: string;
};
export default function TeamCard({
    imgSrc,
    name,
    role,
    description
}: DirectorCardProps) {
    return (
        <article
            className="inline-flex h-190 w-150 items-center justify-center gap-2.5 rounded-xl bg-white px-9 py-9 shadow-[0px_1px_5px_0px_rgba(0,0,0,0.25)]"
            aria-labelledby="director-name"
        >
            <div className="flex w-140 flex-col items-center gap-6">
                <header className="flex w-72 flex-col items-center gap-5">
                    <img
                        className="h-72 w-72 rounded-[10px]"
                        src={imgSrc}
                        alt={`Portrait of ${name}`}
                        loading="lazy"
                        width={286}
                        height={286}
                    />
                    <div
                        className="flex flex-col items-center self-stretch"
                        role="group"
                        aria-label={`Details for ${name}`}
                    >
                        <h2
                            id="director-name"
                            className="self-stretch text-center text-2xl leading-normal text-indigo-950"
                        >
                            {name}
                        </h2>
                        <p className="self-stretch text-center text-base leading-normal font-normal text-indigo-900/90">
                            {role}
                        </p>
                    </div>
                </header>
                <section
                    className="w-[486px] text-justify text-base leading-normal text-black"
                    aria-label={`Biography of ${name}`}
                >
                    <p>{description}</p>
                </section>
            </div>
        </article>
    );
}
