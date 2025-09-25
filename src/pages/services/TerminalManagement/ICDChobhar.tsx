import hero from '../../../assets/img/services/ICDChobhar/hero.png';
import map from '../../../assets/img/services/ICDChobhar/map.png';
import Banner from '../../../components/ui/Banner';
import type { Column } from '../../../components/ui/DataTable';
import DataTable from '../../../components/ui/DataTable';
import TextAreaWithHeadingAndLogo from '../../../components/ui/TextAreaWithHeadingAndLogo';
import {
    ICD_CHOBHAR_FACILITIES,
    ICD_CHOBHAR_INFO
} from '../../../data/servicesData/terminalManagementData/icdChobhar';

const BANNER = {
    title: 'ICD Chobhar',
    subtitle: '',
    hero: hero
};
const padding = 'px-4 py-5 sm:px-20 lg:px-25';

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
export default function ICDChobhar() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className={`w-full ${padding} my-10`}>
                <section>
                    <TextAreaWithHeadingAndLogo
                        title={ICD_CHOBHAR_INFO.title}
                        description={ICD_CHOBHAR_INFO.description}
                    />
                </section>

                <section>
                    <DataTable
                        columns={columns}
                        data={ICD_CHOBHAR_FACILITIES}
                    />
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
