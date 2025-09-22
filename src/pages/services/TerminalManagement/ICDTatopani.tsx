import hero from '../../../assets/img/services/ICDTatopani/hero.png';
import Banner from '../../../components/ui/Banner';
import Table from '../../../components/ui/Table';
import TextAreaWithHeading from '../../../components/ui/TextAreaWithHeading';
import {
    ICD_TATOPANI_FACILITIES,
    ICD_TATOPANI_INFO
} from '../../../data/servicesData/terminalManagementData/icdTatopani';
import { ICD_TATOPANI } from '../../../data/tarrifData/icdTatopani';
import Mapper from '../../../utils/Mapper';

const BANNER = {
    title: 'ICD Tatopani',
    subtitle: '',
    hero: hero
};
const padding = 'px-4 py-5 sm:px-20 lg:px-25';

export default function ICDTatopani() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className={`w-full ${padding} my-10`}>
                <section>
                    <TextAreaWithHeading
                        title={ICD_TATOPANI_INFO.title}
                        description={ICD_TATOPANI_INFO.description}
                    />
                </section>

                <section>
                    <Table
                        h1Title="Particular"
                        h2Title="Unit"
                        data={ICD_TATOPANI_FACILITIES}
                        dataMapping={Mapper}
                    />
                </section>
            </section>
        </main>
    );
}
