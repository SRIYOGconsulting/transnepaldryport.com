import hero from '../../../assets/img/services/ICDKakarvitta/hero.png';
import Banner from '../../../components/ui/Banner';
import ImgGrid from '../../../components/ImgGrid';
import {
    ICD_KAKARBHITTA_FACILITIES,
    ICD_KAKARBHITTA_GALLERY
} from '../../../data/servicesData/terminalManagementData/icdKakarvitta';
import TableWithHeading from '../../../components/TableWithHeading';

const BANNER = {
    title: 'ICD Kakarvitta',
    subtitle: '',
    hero: hero
};

export default function ICDKakarvitta() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className={`container`}>
                <section>
                    <h1 className="font-norma text-xl text-blue-900">
                        ICD Terminal Building
                    </h1>
                    <ul>
                        <div>
                            <TableWithHeading
                                title="a) Ground Floor"
                                data={
                                    ICD_KAKARBHITTA_FACILITIES
                                        .ICDTerminalBuilding.GroundFloor
                                }
                            />
                        </div>
                        <div>
                            <TableWithHeading
                                title="b) First Floor"
                                data={
                                    ICD_KAKARBHITTA_FACILITIES
                                        .ICDTerminalBuilding.FirstFloor
                                }
                            />
                        </div>
                        <div>
                            <TableWithHeading
                                title="c) Second Floor"
                                data={
                                    ICD_KAKARBHITTA_FACILITIES
                                        .ICDTerminalBuilding.SecondFloor
                                }
                            />
                        </div>
                    </ul>

                    <section>
                        <h1 className="mt-10 mb-10 text-xl text-blue-900">
                            / Galleryr
                        </h1>
                        <ImgGrid items={ICD_KAKARBHITTA_GALLERY} grid={3} />
                    </section>
                </section>
            </section>
        </main>
    );
}
