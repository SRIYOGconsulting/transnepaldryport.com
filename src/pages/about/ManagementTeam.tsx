import hero from '../../assets/img/about/managementTeam/hero.png';
import Banner from '../../components/ui/Banner';

const BANNER = {
    title: 'Management Team',
    subtitle: 'Guiding towards excellence',
    img: hero
};
export default function ManagementTeam() {
    return (
        <Banner
            title={BANNER.title}
            subtitle={BANNER.subtitle}
            img={BANNER.img}
        />
    );
}
