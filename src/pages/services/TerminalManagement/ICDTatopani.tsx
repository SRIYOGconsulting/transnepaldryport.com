import hero from '../../../assets/img/services/ICDTatopani/hero.png';
import Banner from '../../../components/ui/Banner';
import type { Column } from '../../../components/ui/DataTable';
import DataTable from '../../../components/ui/DataTable';
import TextAreaWithHeadingAndLogo from '../../../components/ui/TextAreaWithHeadingAndLogo';
import {
    ICD_TATOPANI_FACILITIES,
    ICD_TATOPANI_INFO
} from '../../../data/servicesData/terminalManagementData/icdTatopani';

const BANNER = {
    title: 'ICD Tatopani',
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
                    <TextAreaWithHeadingAndLogo
                        title={ICD_TATOPANI_INFO.title}
                        description={ICD_TATOPANI_INFO.description}
                    />
                </section>

                <section>
                    <DataTable
                        columns={columns}
                        data={ICD_TATOPANI_FACILITIES}
                    />
                </section>
            </section>
        </main>
    );
}
