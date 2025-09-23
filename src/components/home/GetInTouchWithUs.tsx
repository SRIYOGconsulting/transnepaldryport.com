import get_in_touch_with_us from '../../assets/img/home/getInTouch/get_in_touch_with_us.png';
import { GET_IN_TOUCH_WITH_US } from '../../data/homePageData/getInTouchWithUs';

type InfoCardProps = {
    logoSrc: string;
    title: string;
    children: React.ReactNode;
};

function InfoCard({ logoSrc, title, children }: InfoCardProps) {
    return (
        <div className="w-full rounded-md bg-white px-5 py-3 shadow-lg">
            <div className="flex gap-4">
                <div className="flex h-16 w-12 items-center">
                    <img src={logoSrc} alt={`${title} logo`} />
                </div>
                <div className="flex flex-col gap-1 whitespace-nowrap">
                    <h3 className="font-padauk text-base font-bold text-black">
                        {title}
                    </h3>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function GetInTouchWithUs() {
    return (
        <section className="flex w-full justify-center bg-slate-100/60">
            <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch lg:justify-between lg:gap-20">
                <div className="flex w-full justify-center lg:w-auto">
                    <img
                        src={get_in_touch_with_us}
                        alt="Get In Touch With Us"
                        className="w-full max-w-md rounded-2xl object-cover lg:h-[608px] lg:max-w-none lg:rounded-tl-3xl lg:rounded-bl-3xl"
                    />
                </div>

                {/* Right Content - Full width on mobile, original size on desktop */}
                <div className="flex w-full flex-col gap-6 px-10 lg:px-0 lg:max-w-sm lg:gap-8 lg:py-20">
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        <h1 className="font-poltawski text-3xl font-semibold text-black lg:text-4xl">
                            Get In Touch With Us
                        </h1>
                        <p className="font-segoe text-base font-light text-black">
                            Your Reliable Partner for Logistics Support
                        </p>
                        <div className="h-px w-14 self-center bg-black lg:self-start" />
                    </div>

                    {/* Info Cards - Unchanged except container spacing */}
                    <div className="space-y-6 lg:space-y-8">
                        <InfoCard
                            logoSrc={GET_IN_TOUCH_WITH_US.workingHours.logo}
                            title={GET_IN_TOUCH_WITH_US.workingHours.title}
                        >
                            <p className="font-poppins text-xs font-light text-black">
                                {GET_IN_TOUCH_WITH_US.workingHours.timing}
                            </p>
                        </InfoCard>

                        <InfoCard
                            logoSrc={GET_IN_TOUCH_WITH_US.address.logo}
                            title={GET_IN_TOUCH_WITH_US.address.title}
                        >
                            <p className="font-poppins text-xs font-light text-black">
                                {GET_IN_TOUCH_WITH_US.address.location}
                            </p>
                            <p className="font-poppins text-xs font-light text-black">
                                {GET_IN_TOUCH_WITH_US.address.email}
                            </p>
                        </InfoCard>

                        <InfoCard
                            logoSrc={GET_IN_TOUCH_WITH_US.contact.logo}
                            title={GET_IN_TOUCH_WITH_US.contact.title}
                        >
                            <p className="font-poppins text-xs font-light text-black">
                                Telephone:{' '}
                                {GET_IN_TOUCH_WITH_US.contact.telephone}
                            </p>
                            <p className="font-poppins text-xs font-light text-black">
                                Fax: {GET_IN_TOUCH_WITH_US.contact.fax}
                            </p>
                        </InfoCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
