import hero from '../../assets/img/associates/hero.png';
import PeopleSection from '../../components/PeopleSection';
import Banner from '../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../components/ui/TextAreaWithHeadingAndLogo';
import { TRANSILK_TERMINALS } from '../../data/associatesData/transilkTerminalPvtLtd';

const BANNER = {
    title: 'Transilk Treminals Pvt. Ltd.',
    subtitle: '',
    hero: hero
};

// 🔹 Main Page Component
export default function TransilkTemninalsPvtLtd() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className="container">
                <TextAreaWithHeadingAndLogo
                    title={TRANSILK_TERMINALS.overview.title}
                    description={TRANSILK_TERMINALS.overview.description}
                />

                <PeopleSection
                    title="Board of Directors"
                    people={TRANSILK_TERMINALS.boardOfDirectors}
                />

                <PeopleSection
                    title="Experience Behind the Wheel"
                    people={TRANSILK_TERMINALS.managementCommittee}
                />
            </section>
        </main>
    );
}
