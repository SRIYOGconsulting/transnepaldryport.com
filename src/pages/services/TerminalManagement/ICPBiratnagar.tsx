import hero from '../../../assets/img/services/ICPBiratnager/hero.png';
import Banner from '../../../components/ui/Banner';
import type { Column } from '../../../components/ui/DataTable';
import DataTable from '../../../components/ui/DataTable';
import ImgGrid from '../../../components/ImgGrid';
import TextAreaWithHeadingAndLogo from '../../../components/ui/TextAreaWithHeadingAndLogo';
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

type TableData = {
    id: number;
    particular: string;
    unit: string;
};
const columns: Column<TableData>[] = [
    { key: 'id', label: 'S.N' },
    { key: 'particular', label: 'Particular' },
    { key: 'unit', label: 'Unit' }
];
export default function ICPBiratnagar() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className={`w-full ${padding} my-10`}>
                <TextAreaWithHeadingAndLogo
                    title={ICP_BIRATNAGAR_INFO.title}
                    description={ICP_BIRATNAGAR_INFO.description}
                />

                <h1 className="text-xl font-light text-blue-900">Building</h1>
                <DataTable
                    columns={columns}
                    data={ICP_BIRATNAGAR_FACILITIES.building}
                />

                <h1 className="text-xl font-light text-blue-900">
                    Pre-engineered Sheds/Godowns
                </h1>
                <DataTable
                    columns={columns}
                    data={ICP_BIRATNAGAR_FACILITIES.preEngineeredShedsGodowns}
                />

                <h1 className="text-xl font-light text-blue-900">
                    Additional Features{' '}
                </h1>
                <DataTable
                    columns={columns}
                    data={ICP_BIRATNAGAR_FACILITIES.additionalFeatures}
                />

                <section className="my-10">
                    <ImgGrid items={ICP_BIRATNAGER_GALLERY} />
                </section>
            </section>
        </main>
    );
}
