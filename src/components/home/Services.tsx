import { SERVICES } from '../../data/homePageData/services';
import ServicesCard from '../ui/ServicesCard';

type SectionHeaderProps = {
    title: string;
    subtitle: string;
};

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <header className="mb-10 flex flex-col gap-3">
            <h1 className="font-padauk text-4xl leading-normal font-bold tracking-wide text-black">
                {title}
            </h1>
            <p className="font-poppins text-base leading-normal tracking-tight text-black">
                {subtitle}
            </p>
        </header>
    );
}

export default function Services() {
    return (
        <section className="flex w-full justify-center bg-white px-4 py-16 sm:px-20 lg:px-15">
            <div className="flex w-full max-w-7xl flex-col items-start gap-16">
                <SectionHeader
                    title="Services"
                    subtitle="TransNepal Delivers a Complete Range of Logistics Solutions"
                />

                {/* Services Cards Grid */}
                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map(({ title, description, img }, index) => (
                        <ServicesCard
                            key={index}
                            title={title}
                            description={description}
                            img={img}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
