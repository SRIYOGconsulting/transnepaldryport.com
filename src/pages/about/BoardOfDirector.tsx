import Banner from '../../components/ui/Banner';
import hero from '../../assets/img/about/boardOfDirectors/hero.png';
import { BOARD_OF_DIRECTORS } from '../../data/aboutUsData/boardOfDirector';
import Members from '../../components/Members';
import { useMeta } from '../../utils/useMeta';
const BANNER = {
    title: 'Board of Directors',
    subtitle: 'Guiding towards excellence',
    img: hero
};

export default function BoardOfDirector() {
    useMeta({
    title: " Board of Director  |  TransNepal Freight Services Pvt. Ltd.",
    description: "Meet the executive board and leadership team of TransNepal Dry Port.",
    ogImage: "",
    canonical: "https://transnepaldryport.com/tariff"
  });
    return (
        <main className="min-h-screen">
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.img}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Members teamData={BOARD_OF_DIRECTORS.map(member => ({
                    ...member,
                    description: [member.description]
                }))} />
            </div>
        </main>
    );
}
