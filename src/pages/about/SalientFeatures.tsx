import hero from '../../assets/img/about/salientFeatures/hero.png';
import TerminalNetwork from '../../components/about/network/TerminalNetwork';
import Banner from '../../components/ui/Banner';
import EvStorageSolution from '../../components/about/EvStorageSolution';
import FeatureSection from '../../components/about/AdvancedStorageSolution';
import { SALIENT_FEATURES } from '../../data/aboutUsData/salientFeatures';

const BANNER = {
    title: 'Salient Features',
    subtitle: 'Key strengths that drive our success',
    hero: hero
};

const paddign = 'px-4 py-5 sm:px-20 lg:px-15';

export default function SalientFeatures() {
    return (
        <main className="w-full justify-center">
            <div></div>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <div
                className={`flex w-full justify-center bg-slate-100/60 ${paddign}`}
            >
                <TerminalNetwork />
            </div>
            <div className={`mt-5 flex w-full justify-center ${paddign}`}>
                <EvStorageSolution />
            </div>
            <div className={`${paddign} flex w-full justify-center`}>
                <FeatureSection
                    title={SALIENT_FEATURES.advancedStorage.title}
                    description={SALIENT_FEATURES.advancedStorage.description}
                />
            </div>
            <div className={`${paddign} mb-5 flex w-full justify-center`}>
                <FeatureSection
                    title={SALIENT_FEATURES.security.title}
                    description={SALIENT_FEATURES.security.description}
                />
            </div>
        </main>
    );
}
