import { ProfileCard } from './ui/ProfileCard';

interface PeopleSectionProps {
    title: string;
    people: {
        name: string;
        designation: string;
        img: string;
    }[];
}

const padding = 'px-4 py-5 sm:px-20 lg:px-25';

export default function PeopleSection({ title, people }: PeopleSectionProps) {
    return (
        <section className={`w-full ${padding} my-10`}>
            <h1 className="mb-10 text-lg leading-relaxed font-normal text-indigo-950">
                {title}
            </h1>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                {people.map(person => (
                    <ProfileCard
                        key={person.name}
                        role={person.designation}
                        name={person.name}
                        imageUrl={person.img}
                    />
                ))}
            </div>
        </section>
    );
}
