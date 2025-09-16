import home_banner from '../../assets/img/home_banner.png';

export default function HomeHeroBanner() {
    return (
        <section
            className="inline-flex h-[600px] w-full flex-col items-start justify-end gap-3 bg-cover bg-center px-20 pb-20"
            style={{ backgroundImage: `url(${home_banner})` }}
        >
            <h1 className="font-poppins max-w-4xl text-5xl leading-tight font-semibold text-white">
                Beyond The Imagination
            </h1>
            <p className="font-poppins text-2xl font-medium text-zinc-300">
                Sailing your success since 2002
            </p>
        </section>
    );
}
