import { FaSearch } from 'react-icons/fa';
import Banner from '../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../components/ui/TextAreaWithHeadingAndLogo';
import { TRANSPORTATION_SERVICES } from '../../data/servicesData/transportationServices';
import NewsCard from '../../components/ui/NewsCard';

const BANNER = {
    title: 'Transportation',
    subtitle: '',
    hero: ''
};

function Search() {
    return (
        <section className="flex h-10 w-full items-center justify-between rounded-2xl border border-gray-400/400 bg-white pl-4 shadow-sm md:w-80">
            {/* Search Input */}
            <input
                type="search"
                placeholder="Search"
                className="h-full w-full rounded-2xl px-4 py-2 text-sm text-gray-700 focus:outline-none"
                aria-label="Search"
            />

            {/* Search Icon */}
            <button
                aria-label="Search button"
                className="flex h-full w-12 items-center justify-center rounded-2xl bg-(--primary) text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
                <FaSearch />
            </button>
        </section>
    );
}

export default function Transportation() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className="container">
                <TextAreaWithHeadingAndLogo
                    title={TRANSPORTATION_SERVICES.content[0].title}
                    description={TRANSPORTATION_SERVICES.content[0].description}
                />

                <div className="mt-10 flex flex-col gap-0 px-5 lg:flex-row lg:gap-20">
                    <section className="">
                        {TRANSPORTATION_SERVICES.content.slice(1).map(item => (
                            <div className="mb-10">
                                <TextAreaWithHeadingAndLogo
                                    title={item.title}
                                    description={item.description}
                                    logo={item.logo}
                                />
                            </div>
                        ))}
                    </section>
                    <div className="mb-4 lg:mb-0">
                        <Search />
                        <aside className="mt-10">
                            {TRANSPORTATION_SERVICES.news.map((item, index) => (
                                <NewsCard
                                    key={index}
                                    image={item.img}
                                    date={item.date}
                                    title={item.title}
                                />
                            ))}
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
