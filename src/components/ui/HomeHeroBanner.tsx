import home_banner from '../../assets/img/home_banner.png';

export default function HomeHeroBanner() {
    return (
        <section
            className="relative flex h-[600px] w-full items-end bg-cover bg-center bg-no-repeat px-5"
            style={{ backgroundImage: `url(${home_banner})` }}
        >
            {/* Content */}
            <div className="relative z-10 flex w-full max-w-7xl flex-col px-4 pb-16 sm:px-20">
                <h1 className="font-poppins max-w-4xl text-5xl leading-tight font-semibold text-white">
                    Beyond The Imagination
                </h1>
                <p className="font-poppins text-2xl font-medium text-zinc-300">
                    Sailing your success since 2002
                </p>
            </div>
        </section>
    );
}
