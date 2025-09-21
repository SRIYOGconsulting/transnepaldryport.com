type Network = {
    title: string;
    description: string;
    li?: string[] | string;
};

type NetworkBlockProps = {
    network: Network;
};

export default function NetworkBlock({ network }: NetworkBlockProps) {
    const { title, description, li } = network;

    return (
        <section className="flex w-full flex-col items-start justify-start">
            {/* Title */}
            <header className="h-9 self-stretch font-['Poppins'] text-base font-medium text-indigo-900">
                {title}
            </header>

            {/* Content */}
            <article className="self-stretch text-justify font-['Poppins'] text-xs leading-relaxed font-light text-neutral-600">
                <p className="mb-1">{description}</p>

                {Array.isArray(li) ? (
                    <ul className="ml-4 list-inside list-disc">
                        {li.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    li && <p>{li}</p>
                )}
            </article>
        </section>
    );
}
