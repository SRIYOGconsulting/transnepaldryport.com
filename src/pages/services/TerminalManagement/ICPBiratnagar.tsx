import hero from '../../../assets/img/services/ICPBiratnager/hero.png';
import Banner from '../../../components/ui/Banner';
import ImgGrid from '../../../components/ImgGrid';
import TextAreaWithHeadingAndLogo from '../../../components/ui/TextAreaWithHeadingAndLogo';
import {
    ICP_BIRATNAGAR_FACILITIES,
    ICP_BIRATNAGAR_INFO,
    ICP_BIRATNAGER_GALLERY
} from '../../../data/servicesData/terminalManagementData/icpBiratnagar';
import TableWithHeading from '../../../components/TableWithHeading';

const BANNER = {
    title: 'ICP Biratnagar',
    subtitle: '',
    hero: hero
};

export default function ICPBiratnagar() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className="container">
                <TextAreaWithHeadingAndLogo
                    title={ICP_BIRATNAGAR_INFO.title}
                    description={ICP_BIRATNAGAR_INFO.description}
                />

                <TableWithHeading
                    title="Building"
                    data={ICP_BIRATNAGAR_FACILITIES.building}
                />

                <TableWithHeading
                    title="Pre-engineered Sheds/Godowns"
                    data={ICP_BIRATNAGAR_FACILITIES.preEngineeredShedsGodowns}
                />

                <TableWithHeading
                    title="Additional Features"
                    data={ICP_BIRATNAGAR_FACILITIES.additionalFeatures}
                />

                <section className="my-10">
                    <ImgGrid items={ICP_BIRATNAGER_GALLERY} />
                </section>
            </section>
        </main>
    );
}
