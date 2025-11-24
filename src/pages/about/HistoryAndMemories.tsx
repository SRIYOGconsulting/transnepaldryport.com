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
    title: " History & Memories  |  TransNepal Freight Services Pvt. Ltd.",
    description: "Our journey and milestones over the years.",
    ogImage: "",
    canonical: "https://test.transnepaldryport.com/history-and-memories"
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
