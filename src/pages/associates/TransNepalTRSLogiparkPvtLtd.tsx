import hero from '../../assets/img/associates/hero.png';
import PeopleSection from '../../components/PeopleSection';
import Banner from '../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../components/ui/TextAreaWithHeadingAndLogo';
import { TRANSNEPAL_TRSLOGIPARK } from '../../data/associatesData/transNepalTRSLogiparkPvtLtd';

const BANNER = {
    title: 'TransNepal TRS Logipark Pvt. Ltd.',
    subtitle: '',
    hero: hero
};
import { useMeta } from '../../utils/useMeta';
export default function TransNepalTRSLogiparkPvtLtd() {
    useMeta({
    title: " TransNepal TRS LogicPark Pvt Ltd  |  TransNepal Freight Services Pvt. Ltd.",
    description: "Meet the executive board and leadership team of TransNepal Dry Port.",
    ogImage: "",
    canonical: "https://transnepaldryport.com/tariff"
  });
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className="container">
                <TextAreaWithHeadingAndLogo
                    title={TRANSNEPAL_TRSLOGIPARK.overview.title}
                    description={TRANSNEPAL_TRSLOGIPARK.overview.description}
                />
                <PeopleSection
                    title="Board of Directors"
                    people={TRANSNEPAL_TRSLOGIPARK.boardOfDirectors}
                />

                <PeopleSection
                    title="Experience Behind the Wheel"
                    people={TRANSNEPAL_TRSLOGIPARK.managementCommittee}
                />
            </section>
        </main>
    );
}
