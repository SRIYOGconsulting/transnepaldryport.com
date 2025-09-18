import Banner from "../../components/ui/Banner";
import hero from "../../assets/img/about/salientFeatures/hero.png";
import { SALIENT_FEATURES } from "../../data/aboutUsData/salientFeatures";

const BANNER = {
    title: "Salient Features",
    subtitle: "Key strengths that drive our success",
    hero: hero
};

function TerminalNetwork() {
    const { img, networks } = SALIENT_FEATURES.terminalNetwork;

    return (
        <div className="flex flex-col my-25">
            <div className="self-stretch justify-start text-blue-900 text-xl font-normal font-['Poppins']">
                <h1>{SALIENT_FEATURES.terminalNetwork.title}</h1>
            </div>
            <div className="self-stretch inline-flex justify-end items-start gap-24">
                <div className="w-[479px] h-96 pr-2.5 py-2.5 inline-flex flex-col justify-start items-start gap-2.5">
                    <img src={img} alt="Terminal Network" className="self-stretch h-80 object-cover" />
                </div>

                {/* Text Content Section */}
                <div className="w-[626px] inline-flex flex-col justify-start items-start gap-8">
                    {networks.map((network, idx) => (
                        <div key={idx} className="w-full flex flex-col justify-start items-start">
                            {/* Title */}
                            <div className="self-stretch h-9 justify-start text-indigo-900 text-base font-medium font-['Poppins']">
                                {network.title}
                            </div>

                            {/* Description and list */}
                            <div className="self-stretch text-justify justify-start text-neutral-600 text-xs font-light font-['Poppins'] leading-relaxed">
                                <p className="mb-1">{network.description}</p>
                                {Array.isArray(network.li) && (
                                    <ul className="list-disc list-inside ml-4">
                                        {network.li.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {!Array.isArray(network.li) && <p>{network.li}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function SalientFeatures() {
    return (
        <main>
            <Banner title={BANNER.title} subtitle={BANNER.subtitle} img={BANNER.hero} />
            <div className="flex w-full bg-slate-100/60 px-4 sm:px-20 lg:px-15 justify-center">
                <TerminalNetwork />
            </div>
        </main>
    );
}
