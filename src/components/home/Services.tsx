import { SERVICES } from '../../data/homePageData/services';
import ServicesCard from '../ui/ServicesCard';

export default function Services() {
    return (
        <section className="inline-flex w-full flex-col items-center justify-center gap-2.5 self-stretch px-20 py-16">
            <div className="inline-flex max-w-7xl flex-col items-start justify-start gap-24">
                <div className="flex w-[489px] flex-col items-start justify-start gap-3">
                    <h1 className="h-7 justify-start self-stretch font-['Padauk'] text-4xl leading-normal font-bold tracking-wide text-black">
                        Services
                    </h1>
                    <p className="justify-start self-stretch font-['Poppins'] text-base leading-normal tracking-tight text-black">
                        TransNepal Delivers a Complete Range of Logistics
                        Solutions
                    </p>
                </div>

                <div className="inline-flex max-w-7xl items-center justify-start gap-5 self-stretch">
                    {SERVICES.map(({ title, description, img }) => (
                        <ServicesCard
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
