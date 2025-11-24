import hero from '../../../assets/img/services/ICDTatopani/hero.png';
import TableWithHeading from '../../../components/TableWithHeading';
import Banner from '../../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../../components/ui/TextAreaWithHeadingAndLogo';
import {
    ICD_TATOPANI_FACILITIES,
    ICD_TATOPANI_INFO
} from '../../../data/servicesData/terminalManagementData/icdTatopani';
import { useMeta } from '../../../utils/useMeta';
const BANNER = {
    title: 'ICD Tatopani',
    subtitle: '',
    hero: hero
};

export default function ICDTatopani() {
    useMeta({
    title: " ICD Tatopani  |  TransNepal Freight Services Pvt. Ltd.",
    description: "",
    ogImage: "",
    canonical: "https://test.transnepaldryport.com/icd-tatopani"
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
                        title={ICD_TATOPANI_INFO.title}
                        description={ICD_TATOPANI_INFO.description}
                    />
                </section>

                <section>
                    <TableWithHeading title="" data={ICD_TATOPANI_FACILITIES} />
                </section>
            </section>
        </main>
    );
}
