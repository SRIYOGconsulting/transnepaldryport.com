import { SERVICES } from '../../data/homePageData/services';
import ServicesCard from '../ui/ServicesCard';

type SectionHeaderProps = {
    title: string;
    subtitle: string;
};

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <header className="mb-8 flex flex-col gap-3 text-center lg:mb-10 lg:text-left">
            <h1 className="font-padauk text-2xl leading-normal font-bold tracking-wide text-black sm:text-3xl lg:text-4xl">
                {title}
            </h1>
            <p className="font-poppins mx-auto max-w-3xl text-sm leading-relaxed tracking-tight text-black sm:text-base lg:mx-0">
                {subtitle}
            </p>
        </header>
    );
}

export default function Services() {
    return (
        <section className="flex w-full justify-center bg-white px-4 py-12 sm:px-6 lg:px-15 lg:py-16">
            <div className="flex w-full max-w-7xl flex-col items-center gap-12 lg:items-start lg:gap-16">
                <SectionHeader
                    title="Services"
                    subtitle="TransNepal Delivers a Complete Range of Logistics Solutions"
                />

                {/* Services Cards Grid */}
                <div className="grid w-full grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service, index) => (
                        <ServicesCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            img={service.img}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
