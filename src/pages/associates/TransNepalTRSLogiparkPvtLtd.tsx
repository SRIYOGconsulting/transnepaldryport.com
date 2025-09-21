import hero from '../../assets/img/associates/hero.png';
import PeopleSection from '../../components/PeopleSection';
import Banner from '../../components/ui/Banner';
import TextAreaWithHeading from '../../components/ui/TextAreaWithHeading';
import { TRANSNEPAL_TRSLOGIPARK } from '../../data/associatesData/transNepalTRSLogiparkPvtLtd';

const BANNER = {
    title: 'TransNepal TRS Logipark Pvt. Ltd.',
    subtitle: '',
    hero: hero
};

const padding = 'px-4 py-5 sm:px-20 lg:px-25';

export default function TransNepalTRSLogiparkPvtLtd() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className={`w-full ${padding} my-10`}>
                <TextAreaWithHeading
                    title={TRANSNEPAL_TRSLOGIPARK.overview.title}
                    description={TRANSNEPAL_TRSLOGIPARK.overview.description}
                />
            </section>

            <PeopleSection
                title="Board of Directors"
                people={TRANSNEPAL_TRSLOGIPARK.boardOfDirectors}
            />

            <PeopleSection
                title="Experience Behind the Wheel"
                people={TRANSNEPAL_TRSLOGIPARK.managementCommittee}
            />
        </main>
    );
}
