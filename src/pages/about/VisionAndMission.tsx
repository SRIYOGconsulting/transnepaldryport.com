import hero from '../../assets/img/about/visionAndMission/hero.png';
import Banner from '../../components/ui/Banner';
import { VISION_AND_MISSION } from '../../data/aboutUsData/visionAndMission';

const ImageBlock = ({ src, alt, className }: any) => (
    <figure className={className}>
        <img src={src} alt={alt} className="h-full w-full object-cover" />
    </figure>
);

const VisionItem = ({ logo, title, statement }: any) => (
    <article className="flex w-full items-center justify-center gap-4 rounded-tl-3xl bg-[var(--primary)] p-4 text-white sm:gap-5 sm:p-6 lg:w-[35rem] lg:rounded-tl-[50px] lg:p-8">
        <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
            <div className="flex-shrink-0 rounded-full bg-white p-2 sm:p-3">
                <img
                    src={logo}
                    alt="Vision logo"
                    className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                <h2 className="border-b-2 border-white font-poppins text-base font-semibold text-white sm:text-lg lg:text-xl">
                    {title}
                </h2>
                <p className="text-justify font-poppins text-xs font-medium leading-relaxed text-white sm:text-sm lg:text-base">
                    {statement}
                </p>
            </div>
        </div>
    </article>
);

const MissionItem = ({ logo, title, statements }: any) => (
    <article className="flex w-full items-center justify-center gap-4 rounded-br-3xl bg-[var(--primary)] p-4 text-white sm:gap-5 sm:p-6 lg:w-[35rem] lg:rounded-br-[50px] lg:p-8">
        <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
            <div className="flex-shrink-0 rounded-full bg-white p-2 sm:p-3">
                <img
                    src={logo}
                    alt="Mission logo"
                    className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="border-b-2 border-white font-poppins text-base font-semibold text-white sm:text-lg lg:text-xl">
                    {title}
                </h2>
                <div className="space-y-2">
                    {statements.map((statement: any, idx: any) => (
                        <p
                            key={idx}
                            className="text-justify font-poppins text-xs font-medium leading-relaxed text-white sm:text-sm lg:text-base"
                        >
                            {statement}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </article>
);

export default function VisionAndMission() {
    const { vision, mission } = VISION_AND_MISSION;

    return (
        <main>
            <Banner
                title="Vision and Mission"
                subtitle="See the future, Make it Happen"
                img={hero}
            />
            <section className="mx-4 my-6 flex flex-col items-center gap-6 sm:mx-6 sm:my-8 lg:m-20 lg:gap-10">
                {/* Vision Section */}
                <section className="flex w-full max-w-6xl flex-col gap-4 lg:flex-row lg:gap-8">
                    <VisionItem
                        logo={vision.logo}
                        title={vision.title}
                        statement={vision.statement}
                        img={vision.img}
                    />
                    <ImageBlock
                        src={vision.img}
                        alt="Vision"
                        className="h-48 w-full overflow-hidden rounded-tr-3xl sm:h-56 lg:h-auto lg:w-[35rem] lg:rounded-tr-[50px]"
                    />
                </section>

                {/* Mission Section */}
                <section className="flex w-full max-w-6xl flex-col gap-4 lg:flex-row lg:gap-8">
                    <ImageBlock
                        src={mission.img}
                        alt="Mission"
                        className="h-48 w-full overflow-hidden rounded-bl-3xl sm:h-56 lg:h-auto lg:w-[35rem] lg:rounded-bl-[50px]"
                    />
                    <MissionItem
                        logo={mission.logo}
                        title={mission.title}
                        statements={mission.statements}
                        img={mission.img}
                    />
                </section>
            </section>
        </main>
    );
}
