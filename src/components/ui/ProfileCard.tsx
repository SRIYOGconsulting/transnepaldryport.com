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
        <section className="w-full rounded-2xl bg-slate-100 p-4 sm:p-5 md:p-6 lg:px-9 lg:py-5">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-9">
                <figure className="flex-shrink-0">
                    <img
                        src={imageUrl}
                        alt={alt}
                        className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                    />
                </figure>
                <figcaption className="flex min-w-0 flex-1 flex-col gap-1 sm:gap-1.5">
                    <p className="font-poppins text-sm leading-relaxed font-normal text-blue-900 sm:text-base">
                        {role}
                    </p>
                    <p className="font-poppins text-base leading-relaxed font-normal text-blue-900 sm:text-lg lg:text-left">
                        {name}
                    </p>
                </figcaption>
            </div>
        </section>
    );
}
