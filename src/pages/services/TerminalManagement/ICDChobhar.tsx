import hero from '../../../assets/img/services/ICDChobhar/hero.png';
import map from '../../../assets/img/services/ICDChobhar/map.png';
import TableWithHeading from '../../../components/TableWithHeading';
import Banner from '../../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../../components/ui/TextAreaWithHeadingAndLogo';
import {
    ICD_CHOBHAR_FACILITIES,
    ICD_CHOBHAR_INFO
} from '../../../data/servicesData/terminalManagementData/icdChobhar';
import { useMeta } from '../../../utils/useMeta';
const BANNER = {
    title: 'ICD Chobhar',
    subtitle: '',
    hero: hero
};

export default function ICDChobhar() {
    useMeta({
    title: " ICD Chobhar  |  TransNepal Freight Services Pvt. Ltd.",
    description: "",
    ogImage: "",
    canonical: "https://test.transnepaldryport.com/icd-chobhar"
  });
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className="container">
                <section>
                    <TextAreaWithHeadingAndLogo
                        title={ICD_CHOBHAR_INFO.title}
                        description={ICD_CHOBHAR_INFO.description}
                    />
                </section>

                <section>
                    <TableWithHeading data={ICD_CHOBHAR_FACILITIES} title="" />
                </section>

                <section className="relative h-auto w-full">
                    <img
                        src={map}
                        alt="map"
                        className="h-auto w-full object-cover"
                    />
                </section>
            </section>
        </main>
    );
}
