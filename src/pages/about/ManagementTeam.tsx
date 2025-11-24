import hero from '../../assets/img/about/managementTeam/hero.png';
import Members from '../../components/Members';
import Banner from '../../components/ui/Banner';
import { MANAGEMENT_TEAM } from '../../data/aboutUsData/managementTeam';
import { useMeta } from '../../utils/useMeta';
const BANNER = {
    title: 'Management Team',
    subtitle: 'Guiding towards excellence',
    img: hero
};
export default function ManagementTeam() {
    useMeta({
    title: " Management Team  |  TransNepal Freight Services Pvt. Ltd.",
    description: "Meet the executive board and leadership team of TransNepal Dry Port.",
    ogImage: "",
    canonical: "https://test.transnepaldryport.com/tariff"
  });
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
