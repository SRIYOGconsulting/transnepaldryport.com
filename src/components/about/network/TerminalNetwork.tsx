import { SALIENT_FEATURES } from '../../../data/aboutUsData/salientFeatures';
import NetworkBlock from './NetworkBlock';

export default function TerminalNetwork() {
    const { img, networks, title } = SALIENT_FEATURES.terminalNetwork;

    return (
        <section className="flex flex-col py-10">
            {/* Section Title */}
            <h1 className="mb-6 self-stretch font-['Poppins'] text-xl font-normal text-blue-900">
                {title}
            </h1>

            <div className="inline-flex flex-col items-start justify-end gap-24 self-stretch lg:flex-row">
                {/* Left Image Section */}
                <figure className="flex h-96 w-[479px] flex-col items-start justify-start gap-2.5 py-2.5 pr-2.5">
                    <img
                        src={img}
                        alt="Terminal Network"
                        className="h-80 self-stretch object-cover"
                    />
                </figure>

                {/* Right Network Text Blocks */}
                <div className="flex w-[626px] flex-col items-start justify-start gap-8">
                    {networks.map((network, index) => (
                        <NetworkBlock key={index} network={network} />
                    ))}
                </div>
            </div>
        </section>
    );
}
