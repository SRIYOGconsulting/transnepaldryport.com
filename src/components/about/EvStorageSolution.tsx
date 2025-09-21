import { SALIENT_FEATURES } from '../../data/aboutUsData/salientFeatures';

type DescriptionListProps = {
    items: string[];
};

function DescriptionList({ items }: DescriptionListProps) {
    return (
        <>
            {items.map((item, index) => (
                <p
                    key={index}
                    className="self-stretch text-justify font-['Poppins'] text-xs leading-relaxed font-light text-neutral-600"
                >
                    {item}
                </p>
            ))}
        </>
    );
}

export default function EvStorageSolution() {
    const { title, description, img } = SALIENT_FEATURES.evStorage;

    return (
        <section className="inline-flex h-72 items-center justify-start gap-10 self-stretch bg-slate-100 px-4 sm:px-20 lg:px-10">
            {/* Text Section */}
            <article className="inline-flex w-190 flex-col items-start justify-start gap-2">
                <h2 className="self-stretch font-['Poppins'] text-xl font-normal text-blue-900">
                    {title}
                </h2>
                <DescriptionList items={description} />
            </article>

            {/* Image */}
            <figure>
                <img
                    src={img}
                    alt="EV Storage"
                    className="h-56 w-96 object-cover"
                />
            </figure>
        </section>
    );
}
