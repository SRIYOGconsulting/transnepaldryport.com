import trusted_partenership from '../../assets/img/services/agencyServices/trusted_partnership.jpg';
import LogosWithTitle from '../../components/LogosWithTitle';
import Banner from '../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../components/ui/TextAreaWithHeadingAndLogo';
import { AGENCY_SERVICES } from '../../data/servicesData/agencyServices';

const BANNER = {
    title: 'Agency Services',
    subtitle: '',
    hero: ''
};

export default function AgencyServices() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className="container">
                <LogosWithTitle data={AGENCY_SERVICES.logoWithAmountAndTitle} />

                <section className="flex flex-col items-center gap-15 lg:flex-row lg:items-start">
                    <TextAreaWithHeadingAndLogo
                        title={AGENCY_SERVICES.trustedPartnerShip.title}
                        description={
                            AGENCY_SERVICES.trustedPartnerShip.description
                        }
                    />

                    <img
                        src={trusted_partenership}
                        alt="trusted_partenership"
                        className="h-full w-full rounded-2xl lg:w-[27%]"
                    />
                </section>
            </section>
        </main>
    );
}
