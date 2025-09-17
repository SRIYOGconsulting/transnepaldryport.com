import Banner from '../../components/ui/Banner';
import hero from '../../assets/img/about/boardOfDirectors/hero.png';
import { BOARD_OF_DIRECTORS } from '../../data/aboutUsData/boardOfDirector';
import TeamCard from '../../components/ui/TeamCard';

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

            <section className="mt-10 flex flex-wrap justify-center gap-8 py-20">
                {BOARD_OF_DIRECTORS.director.map(director => (
                    <TeamCard
                        key={director.id}
                        imgSrc={director.img}
                        name={director.name}
                        role={director.post}
                        description={director.description}
                    />
                ))}
            </section>
        </main>
    );
}
