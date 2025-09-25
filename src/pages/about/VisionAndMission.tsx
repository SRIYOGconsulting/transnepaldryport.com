import hero from '../../assets/img/about/visionAndMission/hero.png';
import Banner from '../../components/ui/Banner';
import { VISION_AND_MISSION } from '../../data/aboutUsData/visionAndMission';

const ImageBlock = ({ src, alt, className }: any) => (
    <figure className={className}>
        <img src={src} alt={alt} className="h-full w-full object-cover" />
    </figure>
);

const VisionItem = ({ logo, title, statement }: any) => (
    <article className="flex w-full items-center justify-center gap-5 rounded-tl-[30px] bg-[var(--primary)] p-4 text-white lg:w-[35rem] lg:rounded-tl-[50px] lg:p-0">
        <div className="flex items-start justify-center gap-4 lg:gap-5">
            <div className="inline-block rounded-full bg-white p-2 lg:p-0">
                <img
                    src={logo}
                    alt="Vision logo"
                    className="h-8 w-8 lg:h-auto lg:w-auto"
                />
            </div>
            <div className="flex flex-col gap-3 lg:gap-4">
                <h2 className="w-full border-b-2 border-white font-['Poppins'] text-lg font-semibold text-white lg:w-20 lg:text-xl">
                    {title}
                </h2>
                <p className="custom-word-spacing w-full text-justify font-['Poppins'] text-sm font-medium tracking-wider text-white lg:w-96 lg:text-base">
                    {statement}
                </p>
            </div>
        </div>
    </article>
);

const MissionItem = ({ logo, title, statements }: any) => (
    <article className="flex w-full items-center justify-center gap-5 rounded-br-[30px] bg-[var(--primary)] p-4 text-white lg:w-[35rem] lg:rounded-br-[50px] lg:p-6">
        <div className="flex items-start justify-center gap-4 lg:gap-5">
            <div className="inline-block rounded-full bg-white p-2 lg:p-0">
                <img
                    src={logo}
                    alt="Mission logo"
                    className="h-8 w-8 lg:h-auto lg:w-auto"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="w-full border-b-2 border-white font-['Poppins'] text-lg font-semibold text-white lg:w-20 lg:text-xl">
                    {title}
                </h2>
                {statements.map((statement: any, idx: any) => (
                    <p
                        key={idx}
                        className="custom-word-spacing w-full text-justify font-['Poppins'] text-sm font-medium tracking-wider text-white lg:w-96 lg:text-base"
                    >
                        {statement}
                    </p>
                ))}
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
            <section className="m-5 flex flex-col items-center gap-6 lg:m-20 lg:gap-10">
                <section className="flex h-auto flex-col justify-center gap-4 lg:h-50 lg:flex-row lg:gap-5">
                    <VisionItem
                        logo={vision.logo}
                        title={vision.title}
                        statement={vision.statement}
                        img={vision.img}
                    />
                    <ImageBlock
                        src={vision.img}
                        alt="Vision"
                        className="h-48 w-full overflow-hidden rounded-tr-[30px] lg:h-auto lg:w-[35rem] lg:rounded-tr-[50px]"
                    />
                </section>

                <section className="flex h-auto flex-col justify-center gap-4 lg:h-80 lg:flex-row lg:gap-5">
                    <ImageBlock
                        src={mission.img}
                        alt="Mission"
                        className="h-48 w-full overflow-hidden rounded-bl-[30px] lg:h-auto lg:w-[35rem] lg:rounded-bl-[50px]"
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
