import TeamCard from './ui/TeamCard';

type TeamDataProps = {
    id: number;
    img: string;
    name: string;
    post: string;
    description: string;
};

type ManagementTeamProps = {
    teamData: TeamDataProps[];
};

const ManagementTeam = ({ teamData }: ManagementTeamProps) => {
    if (!teamData || teamData.length === 0) {
        return <p className="py-10 text-center">No team data available.</p>;
    }

    return (
        <section className="mt-8 grid grid-cols-1 gap-6 py-16 sm:mt-10 sm:grid-cols-2 sm:gap-8 sm:py-20 lg:gap-10">
            {teamData.map(director => (
                <TeamCard
                    key={director.id}
                    imgSrc={director.img}
                    name={director.name}
                    role={director.post}
                    description={director.description}
                />
            ))}
        </section>
    );
};

export default ManagementTeam;
