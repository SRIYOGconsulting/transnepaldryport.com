import home_banner from '../../assets/img/home_banner.png';

export default function HomeHeroBanner() {
    return (
        <section
            className="inline-flex h-150 w-full flex-col items-start justify-end gap-2.5 bg-cover bg-center px-20 py-16"
            style={{ backgroundImage: `url(${home_banner})` }}
        >
            <h1 className="h-14 w-170 justify-start font-['Poppins'] text-5xl font-semibold text-white">
                Beyond The Imagination
            </h1>
            <p className="justify-start font-['Poppins'] text-2xl font-medium text-zinc-300">
                Sailing your success since 2002
            </p>
        </section>
    );
}
