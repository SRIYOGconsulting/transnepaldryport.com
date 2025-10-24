import { ProfileCard } from './ui/ProfileCard';

interface PeopleSectionProps {
    title: string;
    people: {
        name: string;
        designation: string;
        img: string;
    }[];
}

export default function PeopleSection({ title, people }: PeopleSectionProps) {
    return (
        <>
            <h1 className="mt-6 mb-6 text-xl leading-relaxed font-semibold text-indigo-950 sm:mb-8 sm:text-2xl lg:mb-10 lg:text-3xl">
                {title}
            </h1>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-1 lg:grid-cols-2 xl:gap-10">
                {people.map(person => (
                    <ProfileCard
                        key={person.name}
                        role={person.designation}
                        name={person.name}
                        imageUrl={person.img}
                    />
                ))}
            </div>
        </>
    );
}
