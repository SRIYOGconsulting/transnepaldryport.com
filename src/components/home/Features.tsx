import { FEATURES } from '../../data/homePageData/features';

export default function Features() {
    return (
        <section className="flex w-full flex-col items-center gap-11 bg-white px-20 py-16">
            <div className="flex w-full max-w-7xl flex-col items-center gap-12">
                <h2 className="max-w-7xl self-stretch font-[Padauk] text-4xl leading-normal font-bold tracking-wide text-black">
                    Features
                </h2>

                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map(({ title, description, img }, idx) => (
                        <div
                            key={idx}
                            className="flex h-[208px] w-full max-w-[384px] flex-col items-center justify-center rounded-[30px] bg-slate-100/75 px-6 py-5"
                        >
                            <div className="flex w-80 flex-col items-start justify-start gap-7">
                                <div className="relative inline-flex items-center justify-start gap-2.5">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-blue-900/10">
                                        <img
                                            src={img}
                                            alt={`${title} icon`}
                                            className="h-6 w-6 object-contain"
                                        />
                                    </div>
                                    <div className="font-[Poppins] text-xl font-semibold text-black">
                                        {title}
                                    </div>
                                </div>
                                <p className="text-justify font-[Poppins] text-xs leading-relaxed font-normal text-neutral-600">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
