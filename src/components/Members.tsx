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
        return <p>No team data available.</p>;
    }

    return (
        <section className="mt-10 flex flex-wrap justify-center gap-8 py-20">
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
