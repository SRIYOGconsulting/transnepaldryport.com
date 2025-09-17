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
        <section className="flex w-full flex-col items-center gap-11 bg-white px-5 py-16 md:px-20">
            <div className="flex w-full max-w-7xl flex-col items-center gap-12">
                <h2 className="w-full font-[Padauk] text-4xl font-bold tracking-wide text-black">
                    Features
                </h2>

                {/* Feature rows */}
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

// ─── FeatureGrid ──────────────────────────────────────────────
function FeatureGrid({ items, columns, fullWidth = false }: FeatureGridProps) {
    const gridColsClass = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    }[columns];

    return (
        <div className={`grid w-full gap-6 ${gridColsClass}`}>
            {items.map((item, index) => (
                <FeatureCard key={index} {...item} fullWidth={fullWidth} />
            ))}
        </div>
    );
}

// ─── FeatureCard ──────────────────────────────────────────────
function FeatureCard({
    title,
    description,
    img,
    fullWidth = false
}: FeatureCardProps) {
    return (
        <div
            className={`flex h-52 w-full flex-col items-center justify-center rounded-2xl bg-slate-100/75 px-6 py-5 ${
                fullWidth ? '' : 'max-w-sm'
            }`}
        >
            <div className="flex w-full flex-col items-start gap-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/10">
                        <img
                            src={img}
                            alt={`${title} icon`}
                            className="h-6 w-6 object-contain"
                        />
                    </div>
                    <h3 className="font-[Poppins] text-xl font-semibold text-black">
                        {title}
                    </h3>
                </div>
                <p className="text-justify font-[Poppins] text-sm leading-relaxed text-neutral-600">
                    {description}
                </p>
            </div>
        </div>
    );
}
