import hero from '../../../assets/img/services/ICPBiratnager/hero.png';
import Banner from '../../../components/ui/Banner';
import ImgCard from '../../../components/ui/ImgCard';
import Table from '../../../components/ui/Table';
import TextAreaWithHeading from '../../../components/ui/TextAreaWithHeading';
import {
    ICP_BIRATNAGAR_FACILITIES,
    ICP_BIRATNAGAR_INFO,
    ICP_BIRATNAGER_GALLERY
} from '../../../data/servicesData/terminalManagementData/icpBiratnagar';

const padding = 'px-4 py-5 sm:px-20 lg:px-25';

const BANNER = {
    title: 'ICP Biratnagar',
    subtitle: '',
    hero: hero
};

const mapper = (item: any) => ({
    h1Data: item.particular,
    h2Data: item.unit
});
export default function ICPBiratnagar() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className={`w-full ${padding} my-10`}>
                <TextAreaWithHeading
                    title={ICP_BIRATNAGAR_INFO.title}
                    description={ICP_BIRATNAGAR_INFO.description}
                />

                <Table
                    h1Title="Particular"
                    h2Title="Unit"
                    data={ICP_BIRATNAGAR_FACILITIES}
                    dataMapping={mapper}
                />

                <section className="my-10">
                    <ImgCard img={ICP_BIRATNAGER_GALLERY} />
                </section>
            </section>
        </main>
    );
}
