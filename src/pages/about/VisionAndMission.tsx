import hero from '../../assets/img/about/visionAndMission/hero.png';
import Banner from '../../components/ui/Banner';
import { VISION_AND_MISSION } from '../../data/aboutUsData/visionAndMission';

function Vision() {
    return (
        <section className='flex justify-center gap-5 h-50'>
            <div className="w-[35rem] bg-[var(--primary)] rounded-tl-[50px] text-white flex items-center justify-center gap-5">
                <div className='flex items-start justify-center gap-5'>
                    <div className="rounded-full bg-white inline-block">
                        <img src={VISION_AND_MISSION.vision.logo} alt="Vision logo" />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className="w-20 border-b-2 border-white text-white text-xl font-semibold font-['Poppins']">
                            {VISION_AND_MISSION.vision.title}
                        </h1>
                        <p className="w-96 text-justify text-white text-base font-medium font-['Poppins'] tracking-wider custom-word-spacing">
                            {VISION_AND_MISSION.vision.statement}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[35rem] rounded-tr-[50px] overflow-hidden">
                <img
                    src={VISION_AND_MISSION.vision.img}
                    className='w-full h-full object-cover'
                    alt="Vision"
                />
            </div>
        </section>
    );
}

function Mission() {
    return (
        <section className='flex justify-center gap-5 h-80'>
            <div className="w-[35rem] rounded-bl-[50px] overflow-hidden">
                <img
                    src={VISION_AND_MISSION.mission.img}
                    className='w-full h-full object-cover'
                    alt="Mission"
                />
            </div>
            <div className="w-[35rem] bg-[var(--primary)] rounded-br-[50px] text-white flex items-center justify-center gap-5 p-6">
                <div className='flex items-start justify-center gap-5'>
                    <div className="rounded-full bg-white inline-block">
                        <img src={VISION_AND_MISSION.mission.logo} alt="Mission logo" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className="w-20 border-b-2 border-white text-white text-xl font-semibold font-['Poppins']">
                            {VISION_AND_MISSION.mission.title}
                        </h1>
                        {VISION_AND_MISSION.mission.statements.map((statement, idx) => (
                            <p
                                key={idx}
                                className="w-96 text-justify text-white text-base font-medium font-['Poppins'] tracking-wider custom-word-spacing"
                            >
                                {statement}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function VisionAndMission() {
    return (
        <main>
            <Banner title='Vision and Mission' subtitle='See the future, Make it Happen' img={hero} />
            <div className='flex flex-col items-center m-20 gap-10'>
                <Vision />
                <Mission />
            </div>
        </main>
    );
}
