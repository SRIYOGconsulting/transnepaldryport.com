import aboutUsImage from '../../assets/img/home/about_us.png';
import { ABOUT_US } from '../../data/homePageData/aboutUs';

type AboutContentProps = {
    title: string;
    description: string;
};

type AboutImageProps = {
    src: string;
    alt: string;
};

function AboutImage({ src, alt }: AboutImageProps) {
    return (
        <div className="flex justify-center lg:justify-start">
            <img
                className="h-64 w-full max-w-md rounded-tl-4xl rounded-bl-4xl object-cover shadow-lg lg:h-80 lg:w-96"
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
            />
        </div>
    );
}

function AboutContent({ title, description }: AboutContentProps) {
    return (
        <div className="flex w-full flex-col items-center gap-6 lg:items-start lg:gap-7">
            <h1 className="font-poppins text-center text-xl leading-snug font-medium text-blue-900 lg:text-left lg:text-2xl">
                {title}
            </h1>
            <p className="font-poppins text-justify text-sm leading-relaxed font-light text-black lg:text-base">
                {description}
            </p>
        </div>
    );
}

export default function AboutUs() {
    const { title, description } = ABOUT_US;

    return (
        <section className="flex w-full justify-center bg-slate-100/60 px-4 py-8 sm:px-6 lg:px-15 lg:py-12">
            <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row lg:gap-14">
                {/* Image on top for mobile, left for desktop */}
                <AboutImage src={aboutUsImage} alt="About Us" />

                {/* Content below image for mobile, right for desktop */}
                <AboutContent title={title} description={description} />
            </div>
        </section>
    );
}
