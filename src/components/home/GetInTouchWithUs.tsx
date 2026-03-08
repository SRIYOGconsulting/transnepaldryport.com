import get_in_touch_with_us from '../../assets/img/home/getInTouch/get_in_touch_with_us.png';
import { GET_IN_TOUCH_WITH_US } from '../../data/homePageData/getInTouchWithUs';

type InfoCardProps = {
    logoSrc: string;
    title: string;
    children: React.ReactNode;
};

function InfoCard({ logoSrc, title, children }: InfoCardProps) {
    return (
        <div className="w-full rounded-md bg-white px-4 py-3 shadow-lg sm:px-5">
            <div className="flex gap-3 sm:gap-4">
                <div className="flex h-12 w-10 items-center sm:h-16 sm:w-12">
                    <img
                        src={logoSrc}
                        alt={`${title} logo`}
                        className="h-auto w-full object-contain"
                    />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <h3 className="font-padauk text-sm font-bold text-black sm:text-base">
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
        <section className="flex w-full justify-center bg-slate-100/60 py-8 sm:py-12">
            <div className="flex w-full max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12 lg:px-8 xl:gap-20">
                {/* Image Section */}
                <div className="flex w-full justify-center lg:w-1/2 lg:justify-start">
                    <img
                        src={get_in_touch_with_us}
                        alt="Get In Touch With Us"
                        className="w-full max-w-xs rounded-2xl object-cover shadow-md sm:max-w-sm md:max-w-md lg:h-[500px] lg:max-w-none lg:rounded-tl-3xl lg:rounded-bl-3xl xl:h-[608px]"
                    />
                </div>

                {/* Content Section */}
                <div className="flex w-full flex-col gap-6 lg:w-1/2 lg:max-w-lg lg:gap-8 lg:py-12 xl:py-20">
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        <h1 className="font-poltawski text-2xl font-semibold text-black sm:text-3xl lg:text-4xl">
                            Get In Touch With Us
                        </h1>
                        <p className="font-segoe text-sm font-light text-black sm:text-base">
                            Your Reliable Partner for Logistics Support
                        </p>
                        <div className="h-px w-14 self-center bg-black lg:self-start" />
                    </div>

                    {/* Info Cards */}
                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        <InfoCard
                            logoSrc={GET_IN_TOUCH_WITH_US.workingHours.logo}
                            title={GET_IN_TOUCH_WITH_US.workingHours.title}
                        >
                            <p className="font-poppins text-xs font-light text-black sm:text-sm">
                                {GET_IN_TOUCH_WITH_US.workingHours.timing}
                            </p>
                        </InfoCard>

                        <InfoCard
                            logoSrc={GET_IN_TOUCH_WITH_US.address.logo}
                            title={GET_IN_TOUCH_WITH_US.address.title}
                        >
                            <p className="font-poppins text-xs font-light text-black sm:text-sm">
                                {GET_IN_TOUCH_WITH_US.address.location}
                            </p>
                            <p className="font-poppins text-xs font-light text-black sm:text-sm">
                                {GET_IN_TOUCH_WITH_US.address.email}
                            </p>
                        </InfoCard>

                        <InfoCard
                            logoSrc={GET_IN_TOUCH_WITH_US.contact.logo}
                            title={GET_IN_TOUCH_WITH_US.contact.title}
                        >
                            <p className="font-poppins text-xs font-light text-black sm:text-sm">
                                Telephone:{' '}
                                <a href={'tel:${GET_IN_TOUCH_WITH_US.contact.telephone}'} className='hover:text-grey-500 hover:underline'>
                                {GET_IN_TOUCH_WITH_US.contact.telephone}
                                </a>
                            </p>
                            <p className="font-poppins text-xs font-light text-black sm:text-sm">
                                Mobile Phone: +977 9802700159
                            </p>
                        </InfoCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
