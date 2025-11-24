import top_img from '../assets/img/csr/top_img.jpg';
import Banner from '../components/ui/Banner';
import NewsCard from '../components/ui/NewsCard';
import { CORPORATE_SOCIAL_RESPONSIBILITY } from '../data/csrData/csr';
import { useMeta } from '../utils/useMeta';
const BANNER = {
    title: 'Corporate Social Responsibility',
    subtitle: '',
    img: ''
};

type Props = {
    logo: string;
    title: string;
    description: string;
};

function TopSection({ logo, title, description }: Props) {
    useMeta({
    title: " CSR  |  TransNepal Freight Services Pvt. Ltd.",
    description: "Initiatives supporting communities and sustainable impact.",
    ogImage: "",
    canonical: "https://test.transnepaldryport.com/tariff"
  });
    return (
        
        <section className="flex gap-6 lg:gap-10">
            <img
                src={logo}
                alt={title}
                className="h-16 w-16 lg:h-auto lg:w-auto"
            />
            <div className="flex flex-col">
                <h1 className="text-xl font-normal text-sky-950">{title}</h1>
                <p className="text-sm leading-relaxed font-medium lg:text-base lg:leading-loose">
                    {description}
                </p>
            </div>
        </section>
    );
}

export default function CSR() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.img}
            />

            <section className="container">
                <div className="mb-10 flex flex-col gap-10 lg:flex-row lg:gap-25">
                    <img
                        className="h-80 w-full rounded-2xl object-cover lg:w-1/2"
                        src={top_img}
                        alt="CSR"
                    />
                    <div className="space-y-6">
                        {CORPORATE_SOCIAL_RESPONSIBILITY.csr.map(csr => (
                            <TopSection
                                key={csr.title}
                                logo={csr.logo}
                                title={csr.title}
                                description={csr.description}
                            />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 space-y-6 sm:grid-cols-2 md:grid-cols-3">
                    {CORPORATE_SOCIAL_RESPONSIBILITY.news.map(news => (
                        <NewsCard
                            date={news.date}
                            title={news.title}
                            description={news.description}
                            image={news.img}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
