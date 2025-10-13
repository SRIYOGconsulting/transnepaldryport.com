import hero from '../../../assets/img/services/ICDKakarvitta/hero.png';
import Banner from '../../../components/ui/Banner';
import type { Column } from '../../../components/ui/DataTable';
import DataTable from '../../../components/ui/DataTable';
import ImgGrid from '../../../components/ImgGrid';
import {
    ICD_KAKARBHITTA_FACILITIES,
    ICD_KAKARBHITTA_GALLERY
} from '../../../data/servicesData/terminalManagementData/icdKakarvitta';

const BANNER = {
    title: 'ICD Kakarvitta',
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

export default function ICDKakarvitta() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className={`w-full ${padding} my-10`}>
                <section>
                    <h1 className="font-norma text-xl text-blue-900">
                        ICD Terminal Building
                    </h1>
                    <ul>
                        <div>
                            <li className="text-xl text-blue-900">
                                <span className="mr-2">a)</span>Ground Floor
                            </li>
                            <DataTable
                                columns={columns}
                                data={
                                    ICD_KAKARBHITTA_FACILITIES
                                        .ICDTerminalBuilding.GroundFloor
                                }
                            />
                        </div>
                        <div>
                            <li className="text-xl text-blue-900">
                                <span className="mr-2">b)</span>First Floor
                            </li>
                            <DataTable
                                columns={columns}
                                data={
                                    ICD_KAKARBHITTA_FACILITIES
                                        .ICDTerminalBuilding.FirstFloor
                                }
                            />
                        </div>
                        <div>
                            <li className="text-xl text-blue-900">
                                <span className="mr-2">c)</span>Second Floor
                            </li>
                            <DataTable
                                columns={columns}
                                data={
                                    ICD_KAKARBHITTA_FACILITIES
                                        .ICDTerminalBuilding.SecondFloor
                                }
                            />
                        </div>
                    </ul>

                    <section>
                        <h1 className="mt-10 mb-10 text-xl text-blue-900">
                            Galleryr
                        </h1>
                        <ImgGrid items={ICD_KAKARBHITTA_GALLERY} grid={3} />
                    </section>
                </section>
            </section>
        </main>
    );
}
