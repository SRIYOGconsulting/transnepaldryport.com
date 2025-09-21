type ProfileCardProps = {
    role: string;
    name: string;
    imageUrl: string;
    alt?: string;
};

export function ProfileCard({
    role,
    name,
    imageUrl,
    alt = 'Profile picture'
}: ProfileCardProps) {
    return (
        <section className="h-36 w-full rounded-2xl bg-slate-100 px-9 py-5">
            <div className="flex items-center gap-9">
                <figure className="flex-shrink-0">
                    <img
                        src={imageUrl}
                        alt={alt}
                        className="h-24 w-24 rounded-full object-cover"
                    />
                </figure>
                <figcaption className="flex w-64 flex-col gap-1.5">
                    <p className="font-['Poppins'] text-base leading-relaxed font-normal text-blue-900">
                        {role}
                    </p>
                    <p className="text-justify font-['Poppins'] text-lg leading-relaxed font-normal text-blue-900">
                        {name}
                    </p>
                </figcaption>
            </div>
        </section>
    );
}
