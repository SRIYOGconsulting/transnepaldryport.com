import hero from '../../assets/img/about/visionAndMission/hero.png';
import Banner from '../../components/ui/Banner';
import { VISION_AND_MISSION } from '../../data/aboutUsData/visionAndMission';

function Vision() {
    return (
        <section className="flex h-50 justify-center gap-5">
            <div className="flex w-[35rem] items-center justify-center gap-5 rounded-tl-[50px] bg-[var(--primary)] text-white">
                <div className="flex items-start justify-center gap-5">
                    <div className="inline-block rounded-full bg-white">
                        <img
                            src={VISION_AND_MISSION.vision.logo}
                            alt="Vision logo"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="w-20 border-b-2 border-white font-['Poppins'] text-xl font-semibold text-white">
                            {VISION_AND_MISSION.vision.title}
                        </h1>
                        <p className="custom-word-spacing w-96 text-justify font-['Poppins'] text-base font-medium tracking-wider text-white">
                            {VISION_AND_MISSION.vision.statement}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[35rem] overflow-hidden rounded-tr-[50px]">
                <img
                    src={VISION_AND_MISSION.vision.img}
                    className="h-full w-full object-cover"
                    alt="Vision"
                />
            </div>
        </section>
    );
}

function Mission() {
    return (
        <section className="flex h-80 justify-center gap-5">
            <div className="w-[35rem] overflow-hidden rounded-bl-[50px]">
                <img
                    src={VISION_AND_MISSION.mission.img}
                    className="h-full w-full object-cover"
                    alt="Mission"
                />
            </div>
            <div className="flex w-[35rem] items-center justify-center gap-5 rounded-br-[50px] bg-[var(--primary)] p-6 text-white">
                <div className="flex items-start justify-center gap-5">
                    <div className="inline-block rounded-full bg-white">
                        <img
                            src={VISION_AND_MISSION.mission.logo}
                            alt="Mission logo"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="w-20 border-b-2 border-white font-['Poppins'] text-xl font-semibold text-white">
                            {VISION_AND_MISSION.mission.title}
                        </h1>
                        {VISION_AND_MISSION.mission.statements.map(
                            (statement, idx) => (
                                <p
                                    key={idx}
                                    className="custom-word-spacing w-96 text-justify font-['Poppins'] text-base font-medium tracking-wider text-white"
                                >
                                    {statement}
                                </p>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function VisionAndMission() {
    return (
        <main>
            <Banner
                title="Vision and Mission"
                subtitle="See the future, Make it Happen"
                img={hero}
            />
            <div className="m-20 flex flex-col items-center gap-10">
                <Vision />
                <Mission />
            </div>
        </main>
    );
}
