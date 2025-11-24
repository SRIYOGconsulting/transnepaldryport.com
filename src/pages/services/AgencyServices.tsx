import trusted_partenership from '../../assets/img/services/agencyServices/trusted_partnership.jpg';
import LogosWithTitle from '../../components/LogosWithTitle';
import Banner from '../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../components/ui/TextAreaWithHeadingAndLogo';
import { AGENCY_SERVICES } from '../../data/servicesData/agencyServices';
import { useMeta } from '../../utils/useMeta';
const BANNER = {
    title: 'Agency Services',
    subtitle: '',
    hero: ''
};

export default function AgencyServices() {
    useMeta({
    title: " Agency Services  |  TransNepal Freight Services Pvt. Ltd.",
    description: "Meet the executive board and leadership team of TransNepal Dry Port.",
    ogImage: "",
    canonical: "https://transnepaldryport.com/tariff"
  });
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
                        className="h-full w-full rounded-2xl lg:w-[35%]"
                    />
                </section>
            </section>
        </main>
    );
}
