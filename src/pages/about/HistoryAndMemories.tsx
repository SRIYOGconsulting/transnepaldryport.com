import hero from '../../assets/img/about/historyAndMemories/hero.png';
import Banner from '../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../components/ui/TextAreaWithHeadingAndLogo';
import { HISTORY_AND_MEMORIES } from '../../data/aboutUsData/historysAndMemories';
import { useMeta } from '../../utils/useMeta';
const BANNER = {
    title: 'History and Memories',
    subTitle: '',
    hero: hero
};

function Event() {
    useMeta({
    title: " Tariff  |  TransNepal Freight Services Pvt. Ltd.",
    description: "Meet the executive board and leadership team of TransNepal Dry Port.",
    ogImage: "",
    canonical: "https://transnepaldryport.com/tariff"
  });
    return (
        <section className="my-8 px-4 sm:px-20 lg:px-10">
            <img
                className="mb-15 h-full w-full"
                src={HISTORY_AND_MEMORIES.img}
                alt="Event"
            />
            <TextAreaWithHeadingAndLogo
                title={HISTORY_AND_MEMORIES.eventTitle}
                description={HISTORY_AND_MEMORIES.description}
            />
        </section>
    );
}

export default function HistoryAndMemories() {
    return (
        <main className="w-full justify-center">
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subTitle}
                img={BANNER.hero}
            />
            <div className="container">
                <Event />
            </div>
        </main>
    );
}
