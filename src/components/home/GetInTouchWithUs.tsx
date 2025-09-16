import get_in_touch_with_us from '../../assets/img/home/getInTouch/get_in_touch_with_us.png';
import { GET_IN_TOUCH_WITH_US } from '../../data/homePageData/getInTouchWithUs';

export default function GetInTouchWithUs() {
    return (
        <section className="self-stretch h-150 px-24 bg-slate-100/60 flex flex-col justify-center items-center gap-2.5">
            <div className='max-w-7xl h-150 inline-flex justify-center items-center gap-36'>
                <img
                    className='w-152 h-152 rounded-tl-3xl rounded-bl-3xl'
                    src={get_in_touch_with_us} alt="Get In Touch With Us" />
                <div className='w-96 inline-flex flex-col justify-start items-start gap-16'>
                    <div className='self-stretch flex flex-col justify-start items-start gap-8'>
                        <h1 className="self-stretch justify-start text-black text-4xl font-semibold font-['Poltawski_Nowy'] leading-normal">
                            Get In Touch With Us
                        </h1>
                        <div className='w-72 flex flex-col justify-start items-start gap-3.5'>
                            <p className="self-stretch h-4 text-justify justify-start text-black text-base font-light font-['Segoe_UI'] leading-snug">
                                Your Reliable Partner for Logistics Support
                            </p>
                            <div className="w-14 h-0 outline  outline-offset-[-0.50px] outline-black"></div>
                        </div>
                    </div>

                    <div className='self-stretch h-16 px-5 py-3.5 bg-white rounded-[5px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.20)] flex flex-col justify-start items-start gap-2.5'>
                        <div className='inline-flex justify-start items-start gap-4'>
                            <img src={GET_IN_TOUCH_WITH_US.workingHours.logo} />
                            <div className='w-44 h-9 inline-flex flex-col justify-start items-start gap-[5px]'>
                                <h3 className="self-stretch h-4 justify-start text-black text-base font-bold font-['Padauk'] leading-normal tracking-tight">
                                {GET_IN_TOUCH_WITH_US.workingHours.title}
                                </h3>
                                <p className="self-stretch justify-start text-black text-[10px] font-light font-['Poppins'] leading-normal tracking-tight">
                                    {GET_IN_TOUCH_WITH_US.workingHours.timing}
                                </p>
                            </div>
                        </div>


                    </div>

                    <div className='self-stretch h-16 px-5 py-3.5 bg-white rounded-[5px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.20)] flex flex-col justify-start items-start gap-2.5'>
                        <div className='inline-flex justify-start items-start gap-4'>
                            <img src={GET_IN_TOUCH_WITH_US.address.logo} />
                            <div className='w-44 h-9 inline-flex flex-col justify-start items-start gap-[5px]'>
                                <h3 className="self-stretch h-4 justify-start text-black text-base font-bold font-['Padauk'] leading-normal tracking-tight">
                                {GET_IN_TOUCH_WITH_US.address.title}
                                </h3>
                                <p className="self-stretch justify-start text-black text-[10px] font-light font-['Poppins'] leading-normal tracking-tight">
                                    {GET_IN_TOUCH_WITH_US.address.location}
                                </p> <p className="self-stretch justify-start text-black text-[10px] font-light font-['Poppins'] leading-normal tracking-tight">
                                    {GET_IN_TOUCH_WITH_US.address.email}
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className='self-stretch h-16 px-5 py-3.5 bg-white rounded-[5px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.20)] flex flex-col justify-start items-start gap-2.5'>
                        <div className='inline-flex justify-start items-start gap-4'>
                            <img src={GET_IN_TOUCH_WITH_US.workingHours.logo} />
                            <div className='w-44 h-9 inline-flex flex-col justify-start items-start gap-[5px]'>
                                <h3 className="self-stretch h-4 justify-start text-black text-base font-bold font-['Padauk'] leading-normal tracking-tight">
                                {GET_IN_TOUCH_WITH_US.workingHours.title}
                                </h3>
                                <p className="self-stretch justify-start text-black text-[10px] font-light font-['Poppins'] leading-normal tracking-tight">
                                    {GET_IN_TOUCH_WITH_US.workingHours.timing}
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
