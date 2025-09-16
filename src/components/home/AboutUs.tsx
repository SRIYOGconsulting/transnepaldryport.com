import about_us from '../../assets/img/home/about_us.png';
import { ABOUT_US } from '../../data/homePageData/aboutUs';

export default function AboutUs() {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-2.5 bg-slate-100/60 px-20 py-16">
            <div className="inline-flex h-80 max-w-7xl items-center justify-center gap-14">
                <img
                    className="h-80 w-96 rounded-tl-4xl rounded-bl-4xl"
                    src={about_us}
                    alt="About Us"
                />

                <div className="inline-flex h-80 flex-col items-start justify-start gap-7">
                    <h1 className="h-6 justify-start self-stretch font-['Poppins'] text-xl leading-snug font-medium text-blue-900">
                        {ABOUT_US.title}
                    </h1>
                    <p className="h-60 justify-start self-stretch text-justify font-['Poppins'] text-sm leading-relaxed font-light text-black">
                        {ABOUT_US.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
