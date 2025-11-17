import hero from '../../assets/img/about/managementTeam/hero.png';
import Members from '../../components/Members';
import Banner from '../../components/ui/Banner';
import { MANAGEMENT_TEAM } from '../../data/aboutUsData/managementTeam';

const BANNER = {
    title: 'Management Team',
    subtitle: 'Guiding towards excellence',
    img: hero
};
export default function ManagementTeam() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.img}
            />
            <div className="container">
                <Members teamData={MANAGEMENT_TEAM.map(member => ({
                    ...member,
                    description: [member.description]
                }))} />
            </div>
        </main>
    );
}
