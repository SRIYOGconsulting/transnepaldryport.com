import { SERVICES } from '../../data/homePageData/services';
import ServicesCard from '../ui/ServicesCard';

type SectionHeaderProps = {
    title: string;
    subtitle: string;
};

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="font-padauk text-4xl leading-normal font-bold tracking-wide text-black">
                {title}
            </h1>
            <p className="font-poppins text-base leading-normal tracking-tight text-black">
                {subtitle}
            </p>
        </div>
    );
}

export default function Services() {
    return (
        <section className="flex w-full flex-col items-center justify-center px-20 py-16">
            <div className="flex max-w-7xl flex-col items-start gap-24">
                <SectionHeader
                    title="Services"
                    subtitle="TransNepal Delivers a Complete Range of Logistics Solutions"
                />

                {/* Services Card List */}
                <div className="flex w-full items-center justify-center gap-5">
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
