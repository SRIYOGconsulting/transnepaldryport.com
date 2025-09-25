import { FEATURES } from '../../data/homePageData/features';

type Feature = {
    title: string;
    description: string;
    img: string;
};

type FeatureCardProps = Feature & {
    fullWidth?: boolean;
};

type FeatureGridProps = {
    items: Feature[];
    columns: 1 | 2 | 3;
    fullWidth?: boolean;
};

export default function Features() {
    return (
        <section className="flex w-full flex-col items-center gap-8 bg-white px-4 py-12 lg:gap-11 lg:px-5 lg:py-16">
            <div className="flex w-full max-w-7xl flex-col items-center gap-8 lg:gap-12">
                <h2 className="w-full text-center text-2xl font-bold tracking-wide text-black lg:text-left lg:text-4xl">
                    Features
                </h2>

                <FeatureGrid items={FEATURES.slice(0, 3)} columns={3} />
                <FeatureGrid
                    items={FEATURES.slice(3, 5)}
                    columns={2}
                    fullWidth
                />
                <FeatureGrid items={FEATURES.slice(5, 8)} columns={3} />
                <FeatureGrid
                    items={FEATURES.slice(8, 9)}
                    columns={1}
                    fullWidth
                />
            </div>
        </section>
    );
}

function FeatureGrid({ items, columns, fullWidth = false }: FeatureGridProps) {
    const gridColsClass = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 lg:grid-cols-2',
        3: 'grid-cols-1 lg:grid-cols-3'
    }[columns];

    return (
        <div className={`grid w-full gap-4 lg:gap-6 ${gridColsClass}`}>
            {items.map((item, index) => (
                <FeatureCard key={index} {...item} fullWidth={fullWidth} />
            ))}
        </div>
    );
}

function FeatureCard({
    title,
    description,
    img,
    fullWidth = false
}: FeatureCardProps) {
    return (
        <div
            className={`flex h-auto w-full flex-col items-center justify-center rounded-2xl bg-slate-100/75 px-4 py-4 lg:h-52 lg:px-6 lg:py-5 ${
                fullWidth ? '' : 'lg:max-w-sm'
            }`}
        >
            <div className="flex w-full flex-col items-start gap-4 lg:gap-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/10 lg:h-10 lg:w-10">
                        <img
                            src={img}
                            alt={`${title} icon`}
                            className="h-4 w-4 object-contain lg:h-6 lg:w-6"
                        />
                    </div>
                    <h3 className="font-[Poppins] text-base font-semibold text-black lg:text-xl">
                        {title}
                    </h3>
                </div>
                <p className="text-justify font-[Poppins] text-xs leading-relaxed text-neutral-600 lg:text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}
