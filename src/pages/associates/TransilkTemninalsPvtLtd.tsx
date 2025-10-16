import hero from '../../assets/img/associates/hero.png';
import PeopleSection from '../../components/PeopleSection';
import Banner from '../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../components/ui/TextAreaWithHeadingAndLogo';
import { TRANSILK_TERMINALS } from '../../data/associatesData/transilkTerminalPvtLtd';

const BANNER = {
    title: 'Transik Treminals Pvt. Ltd.',
    subtitle: '',
    hero: hero
};

const padding = 'px-4 py-5 sm:px-20 lg:px-25';

// 🔹 Main Page Component
export default function TransilkTemninalsPvtLtd() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className={`w-full ${padding} my-10`}>
                <TextAreaWithHeadingAndLogo
                    title={TRANSILK_TERMINALS.overview.title}
                    description={TRANSILK_TERMINALS.overview.description}
                />
            </section>

            <PeopleSection
                title="Board of Directors"
                people={TRANSILK_TERMINALS.boardOfDirectors}
            />

            <PeopleSection
                title="Experience Behind the Wheel"
                people={TRANSILK_TERMINALS.managementCommittee}
            />
        </main>
    );
}
