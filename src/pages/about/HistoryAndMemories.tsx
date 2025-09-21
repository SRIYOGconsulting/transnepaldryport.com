import hero from '../../assets/img/about/historyAndMemories/hero.png';
import Banner from '../../components/ui/Banner';
import { HISTORY_AND_MEMORIES } from '../../data/aboutUsData/historysAndMemories';

const BANNER = {
    title: 'History and Memories',
    subTitle: '',
    hero: hero
};

const paddign = 'px-4 py-5 sm:px-20 lg:px-15';

function Event() {
    return (
        <section className="my-8 px-4 sm:px-20 lg:px-10">
            <img
                className="mb-15 h-115 w-full"
                src={HISTORY_AND_MEMORIES.img}
                alt="Event"
            />
            <h1 className="mb-2 font-['Poppins'] text-base leading-relaxed font-medium text-blue-900">
                {HISTORY_AND_MEMORIES.eventTitle}
            </h1>
            <p className="font-['Poppins'] text-xs leading-relaxed font-normal tracking-wider text-neutral-600">
                {HISTORY_AND_MEMORIES.description}
            </p>
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
            <div className={`w-full ${paddign}`}>
                <Event />
            </div>
        </main>
    );
}
