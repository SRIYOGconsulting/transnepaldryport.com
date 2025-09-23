import Banner from '../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../components/ui/TextAreaWithHeadingAndLogo';
import { TRANSPORTATION_SERVICES } from '../../data/servicesData/transportationServices';

const BANNER = {
    title: 'Transportation',
    subtitle: '',
    hero: ''
};
export default function Transportation() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className="container">
                <TextAreaWithHeadingAndLogo
                    title={TRANSPORTATION_SERVICES.content[0].title}
                    description={TRANSPORTATION_SERVICES.content[0].description}
                />

                <div className="mt-10 px-5">
                    {TRANSPORTATION_SERVICES.content.slice(1).map(item => (
                        <div className="mb-10">
                            <TextAreaWithHeadingAndLogo
                                title={item.title}
                                description={item.description}
                                logo={item.logo}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
