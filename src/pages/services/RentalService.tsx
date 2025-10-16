import LogosWithTitle from '../../components/LogosWithTitle';
import Banner from '../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../components/ui/TextAreaWithHeadingAndLogo';
import { RENTAL_SERVICES } from '../../data/servicesData/rentalServices';

const BANNER = {
    title: 'Rental Service',
    subtitle: '',
    hero: ''
};

type InfoCardProps = {
    title: string;
    description: string;
    logo?: string;
};

function InfoCard({ title, description, logo: icon }: InfoCardProps) {
    return (
        <div className="relative flex h-auto w-full max-w-sm flex-col items-center justify-start gap-6 rounded-2xl bg-slate-100 px-6 py-7 md:w-80">
            {/* Icon Circle */}
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
                <img src={icon} alt="Icon" />
            </div>

            {/* Title */}
            <h3 className="text-center font-['Inter'] text-xl leading-snug font-bold text-blue-900">
                {title}
            </h3>

            {/* Description */}
            <p className="text-center text-base leading-snug font-medium text-black/70">
                {description}
            </p>
        </div>
    );
}

export default function RentalService() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className="container">
                <LogosWithTitle data={RENTAL_SERVICES.logoWithAmountAndTitle} />
                <section className="flex flex-col items-center gap-15 lg:flex-row lg:items-start">
                    <TextAreaWithHeadingAndLogo
                        title={RENTAL_SERVICES.title}
                        description={RENTAL_SERVICES.description}
                    />
                </section>

                <div>
                    <h1 className="mb-5 text-xl leading-loose font-bold text-blue-900">
                        Key Benefits
                    </h1>
                    <section className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:px-20">
                        {RENTAL_SERVICES.keyBenifits.map((item, index) => (
                            <InfoCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                logo={item.logo}
                            />
                        ))}
                    </section>
                </div>
            </section>
        </main>
    );
}
