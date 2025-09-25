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
                    className="self-stretch text-justify text-sm leading-relaxed font-light text-neutral-600 lg:text-base"
                >
                    {item}
                </p>
            ))}
        </>
    );
}

export default function EvStorageSolution() {
    const { title, description, img } = SALIENT_FEATURES.evStorage;

    const sectionClasses =
        'inline-flex flex-col lg:flex-row items-center justify-start bg-slate-100 gap-6 lg:gap-10 px-4 py-8 sm:px-6 lg:px-10 lg:h-72';
    const articleClasses =
        'inline-flex flex-col items-start justify-start w-full lg:w-190 gap-3 lg:gap-2';
    const headingClasses =
        'text-xl lg:text-2xl font-normal text-blue-900 text-center lg:text-left self-stretch';
    const figureClasses =
        'flex justify-center lg:justify-start w-full lg:w-auto';
    const imageClasses = 'h-48 w-full max-w-md lg:h-56 lg:w-96 object-cover';

    return (
        <section className={sectionClasses}>
            <article className={articleClasses}>
                <h2 className={headingClasses}>{title}</h2>
                <div className="space-y-3 lg:space-y-2">
                    <DescriptionList items={description} />
                </div>
            </article>
            <figure className={figureClasses}>
                <img src={img} alt="EV Storage" className={imageClasses} />
            </figure>
        </section>
    );
}
