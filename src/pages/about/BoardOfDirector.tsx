import Banner from '../../components/ui/Banner';
import hero from '../../assets/img/about/boardOfDirectors/hero.png';
import { BOARD_OF_DIRECTORS } from '../../data/aboutUsData/boardOfDirector';
import Members from '../../components/Members';

const BANNER = {
    title: 'Board of Directors',
    subtitle: 'Guiding towards excellence',
    img: hero
};

export default function BoardOfDirector() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.img}
            />

            <Members teamData={BOARD_OF_DIRECTORS} />
        </main>
    );
}
