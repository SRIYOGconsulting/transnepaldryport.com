import hero from '../../assets/img/about/qacAndCoc/hero.png';
import Banner from '../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../components/ui/TextAreaWithHeadingAndLogo';
import { QAC_AND_COC } from '../../data/aboutUsData/qacAndCoc';

const BANNER = {
    title: 'Quality Assurance & Code of Conduct',
    subTitle: '',
    hero: hero
};

function QualityPolicy() {
    return (
        <section className="py-12">
            <h1 className="mb-6 text-2xl font-semibold text-indigo-950">
                {QAC_AND_COC.qualityPolicy.title}
            </h1>

            <div className="relative mx-auto w-full max-w-7xl rounded-2xl bg-slate-500/5 px-6 py-8 text-center sm:px-10">
                <span className="absolute top-4 left-8 font-serif text-4xl text-neutral-400 select-none">
                    &ldquo;
                </span>

                <p className="mx-auto text-center font-['Inter'] text-xl leading-relaxed font-medium text-neutral-600">
                    {QAC_AND_COC.qualityPolicy.description}
                </p>

                <span className="absolute right-4 bottom-4 font-serif text-4xl text-neutral-400 select-none">
                    &rdquo;
                </span>
            </div>
        </section>
    );
}

type PolicyManagementProps = {
    title: string;
    description: string;
};

function PolicyManagement({ title, description }: PolicyManagementProps) {
    return (
        <section className="relative mt-16">
            <div className="relative mx-auto w-96">
                {/* Paragraph background card */}
                <div className="relative z-0 h-52 w-full rounded-2xl bg-indigo-50 px-10 py-10">
                    <p className="text-base tracking-tight text-sky-950">
                        {description}
                    </p>
                </div>

                {/* Overlapping heading box */}
                <div className="absolute -top-20 left-1/2 z-10 flex h-24 w-72 -translate-x-1/2 transform items-center justify-center rounded-2xl bg-purple-300 px-10 shadow-md">
                    <h2 className="text-center font-['Segoe_UI'] text-lg font-normal text-sky-950">
                        {title}
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default function QACANDCOC() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subTitle}
                img={BANNER.hero}
            />
            <div className="container">
                <QualityPolicy />

                <TextAreaWithHeadingAndLogo
                    title={QAC_AND_COC.codeOfConduct.title}
                    description={QAC_AND_COC.codeOfConduct.description}
                    bold={true}
                />
                <div className="m-5 px-10">
                    {QAC_AND_COC.codeOfConduct.sections.map(section => (
                        <TextAreaWithHeadingAndLogo
                            title={section.title}
                            description={section.description}
                        />
                    ))}
                </div>
                <h1 className="mb-10 font-['Poppins'] text-xl font-bold text-blue-900">
                    Policy Management
                </h1>
                <div className="mb-10 flex flex-col items-center justify-center gap-12 lg:flex-row">
                    {QAC_AND_COC.policyManagement.map(policy => (
                        <PolicyManagement
                            title={policy.title}
                            description={policy.description}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
