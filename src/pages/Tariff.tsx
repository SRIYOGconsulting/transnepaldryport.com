import hero from '../assets/img/tariff/hero.png';
import ICPBiratnagarTables from '../components/Tariff/ICPBiratnagerTables';
import Banner from '../components/ui/Banner';

const BANNER = {
    title: 'Tariff Information',
    subtitle: '',
    hero: hero
};
export default function Tariff() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className="container">
                <ICPBiratnagarTables />
            </section>
        </main>
    );
}
