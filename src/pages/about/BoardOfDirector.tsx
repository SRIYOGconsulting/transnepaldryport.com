import Banner from '../../components/ui/Banner';
import hero from '../../assets/img/about/boardOfDirectors/hero.png';

const BANNER = {
    title: 'Board of Directors',
    subtitle: 'Guiding towards excellence',
    img: hero
};
export default function BoardOfDirector() {
    return (
        <main>
            <Banner title={BANNER.title} subtitle={BANNER.subtitle} img={BANNER.img} /> 
        </main>
    );
}
