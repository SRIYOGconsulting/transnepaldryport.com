import aboutUsImage from '../../assets/img/home/about_us.png';
import { ABOUT_US } from '../../data/homePageData/aboutUs';

export default function AboutUs() {
    const { title, description } = ABOUT_US;

    return (
        <section className="flex w-full justify-center bg-slate-100/60 px-4 py-12 sm:px-20 lg:px-15">
            <div className="flex w-full max-w-7xl items-center justify-between gap-14">
                <AboutImage src={aboutUsImage} alt="About Us" />
                <AboutContent title={title} description={description} />
            </div>
        </section>
    );
}

type AboutContentProps = {
    title: string;
    description: string;
};

function AboutContent({ title, description }: AboutContentProps) {
    return (
        <div className="inline-flex h-80 flex-col items-start justify-start gap-7">
            <h1 className="font-poppins h-6 self-stretch text-xl leading-snug font-medium text-blue-900">
                {title}
            </h1>
            <p className="font-poppins h-60 self-stretch text-justify text-sm leading-relaxed font-light text-black">
                {description}
            </p>
        </div>
    );
}

type AboutImageProps = {
    src: string;
    alt: string;
};

function AboutImage({ src, alt }: AboutImageProps) {
    return (
        <img
            className="h-80 w-96 rounded-tl-4xl rounded-bl-4xl object-cover"
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
        />
    );
}
