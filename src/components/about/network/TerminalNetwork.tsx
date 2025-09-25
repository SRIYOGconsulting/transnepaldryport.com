import { SALIENT_FEATURES } from '../../../data/aboutUsData/salientFeatures';
import NetworkBlock from './NetworkBlock';

export default function TerminalNetwork() {
    const { img, networks, title } = SALIENT_FEATURES.terminalNetwork;

    return (
        <section className="flex flex-col py-6 lg:py-10">
            {/* Section Title */}
            <h1 className="mb-4 self-stretch text-center text-xl font-normal text-blue-900 lg:mb-6 lg:text-left lg:text-2xl">
                {title}
            </h1>

            <div className="inline-flex flex-col items-center justify-end gap-8 self-stretch lg:flex-row lg:items-start lg:gap-24">
                {/* Left Image Section */}
                <figure className="flex h-64 w-full max-w-md flex-col items-center justify-start gap-2.5 py-2.5 pr-0 lg:h-96 lg:w-[479px] lg:items-start lg:pr-2.5">
                    <img
                        src={img}
                        alt="Terminal Network"
                        className="h-56 w-full object-cover lg:h-80"
                    />
                </figure>

                {/* Right Network Text Blocks */}
                <div className="flex w-full flex-col items-start justify-start gap-6 lg:w-160 lg:gap-8">
                    {networks.map((network, index) => (
                        <NetworkBlock key={index} network={network} />
                    ))}
                </div>
            </div>
        </section>
    );
}
