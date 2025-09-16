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
                <div className="flex flex-col gap-1">
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
        <section className="flex w-full justify-center bg-slate-100/60 px-20">
            <div className="flex max-w-7xl items-center justify-center gap-20">
                {/* Left Image */}
                <img
                    src={get_in_touch_with_us}
                    alt="Get In Touch With Us"
                    className="h-[608px] max-w-[60%] rounded-tl-3xl rounded-bl-3xl object-cover"
                />

                {/* Right Content */}
                <div className="flex w-full max-w-sm flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-poltawski text-4xl font-semibold text-black">
                            Get In Touch With Us
                        </h1>
                        <p className="font-segoe text-justify text-base font-light text-black">
                            Your Reliable Partner for Logistics Support
                        </p>
                        <div className="h-px w-14 bg-black" />
                    </div>

                    {/* Info Cards */}
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
                            Telephone: {GET_IN_TOUCH_WITH_US.contact.telephone}
                        </p>
                        <p className="font-poppins text-xs font-light text-black">
                            Fax: {GET_IN_TOUCH_WITH_US.contact.fax}
                        </p>
                    </InfoCard>
                </div>
            </div>
        </section>
    );
}
