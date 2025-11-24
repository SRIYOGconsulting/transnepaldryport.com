import Banner from '../components/ui/Banner';
import hero from '../assets/img/news_and_event/hero.png';
import our_journey from '../assets/img/news_and_event/our_journey.png';
import { NEWS_AND_EVENT } from '../data/newsAndEventData/newsAndEvent';
import { useMeta } from '../utils/useMeta';
const BANNER = {
    title: 'News & Events',
    subtitle: '',
    hero: hero
};

function FeaturedSection() {
    return (
        <section>
            <h1 className="title inline-block border-b-2 border-red-500">
                Featured
            </h1>
            <div className="flex flex-col items-center gap-15 md:flex-row">
                <img
                    className="h-full w-full rounded-2xl md:h-60 md:w-96"
                    src={NEWS_AND_EVENT.featured.img}
                    alt=""
                />
                <div>
                    <p className="mb-2 text-base font-medium text-blue-900">
                        {NEWS_AND_EVENT.featured.date}
                    </p>
                    <h1 className="title">{NEWS_AND_EVENT.featured.title}</h1>
                    <p className="text-base leading-loose font-medium text-black/50">
                        {NEWS_AND_EVENT.featured.description}
                    </p>
                </div>
            </div>
        </section>
    );
}

function NewsSection() {
    return (
        <section className="my-10 w-full">
            <h1 className="title">Latest News</h1>
           
        </section>
    );
}

export default function NewsAndEvent() {
    useMeta({
    title: " News & Events  |  TransNepal Freight Services Pvt. Ltd.",
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
                <FeaturedSection />
                <NewsSection />

                <section>
                    <h1 className="title inline-block border-b-2 border-red-500">
                        Featured
                    </h1>
                    <img src={our_journey} alt="" className="h-full w-full" />
                </section>
            </section>
        </main>
    );
}
