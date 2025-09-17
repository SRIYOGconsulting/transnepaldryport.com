import TeamCard from "./ui/TeamCard";

type MembersProps = {
    id: number;
    img: string;
    name: string;
    post: string;
    description: string;
}
export default function Members(members : MembersProps[]) {
    return (
            <section className="mt-10 flex flex-wrap justify-center gap-8 py-20">
                {members.map((director) => (
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
}
