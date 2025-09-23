import hero from '../../../assets/img/services/ICDKakarvitta/hero.png';
import Banner from '../../../components/ui/Banner';
import ImgCard from '../../../components/ui/ImgCard';
import Table from '../../../components/ui/Table';
import {
    ICD_KAKARBHITTA_FACILITIES,
    ICD_KAKARBHITTA_GALLERY
} from '../../../data/servicesData/terminalManagementData/icdKakarvitta';
import Mapper from '../../../utils/Mapper';

const BANNER = {
    title: 'ICD Kakarbhitta',
    subtitle: '',
    hero: hero
};
const padding = 'px-4 py-5 sm:px-20 lg:px-25';

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
                            <Table
                                h1Title="Particular"
                                h2Title="Unit"
                                data={
                                    ICD_KAKARBHITTA_FACILITIES
                                        .ICDTerminalBuilding.GroundFloor
                                }
                                dataMapping={Mapper}
                            />
                        </div>
                        <div>
                            <li className="text-xl text-blue-900">
                                <span className="mr-2">b)</span>First Floor
                            </li>
                            <Table
                                h1Title="Particular"
                                h2Title="Unit"
                                data={
                                    ICD_KAKARBHITTA_FACILITIES
                                        .ICDTerminalBuilding.FirstFloor
                                }
                                dataMapping={Mapper}
                            />
                        </div>
                        <div>
                            <li className="text-xl text-blue-900">
                                <span className="mr-2">c)</span>Second Floor
                            </li>
                            <Table
                                h1Title="Particular"
                                h2Title="Unit"
                                data={
                                    ICD_KAKARBHITTA_FACILITIES
                                        .ICDTerminalBuilding.SecondFloor
                                }
                                dataMapping={Mapper}
                            />
                        </div>
                    </ul>

                    <section>
                        <h1 className="text-xl text-blue-900 mb-10 mt-10">Galleryr</h1>
                        <ImgCard img={ICD_KAKARBHITTA_GALLERY} grid={3} />
                    </section>
                </section>
            </section>
        </main>
    );
}
