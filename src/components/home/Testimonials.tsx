import React from 'react';
import { TESTIMONIALS } from '../../data/homePageData/testimonials';

type Testimonial = {
    id: string | number;
    name: string;
    position: string;
    testimonial: string;
    img?: string;
};

const TestimonialCard: React.FC<Testimonial> = ({
    name,
    position,
    testimonial,
    img
}) => (
    <article className="flex h-auto w-full flex-col items-center gap-4 rounded-[30px] bg-slate-100 p-4 text-center sm:w-80 lg:h-72 lg:w-147 lg:p-6">
        <img
            className="h-16 w-16 rounded-full object-cover lg:h-24 lg:w-24"
            src={img ?? 'https://placehold.co/100x100'}
            alt={`Photo of ${name}`}
            loading="lazy"
            decoding="async"
        />
        <div className="w-full">
            <h3 className="font-poppins text-sm leading-normal font-semibold tracking-tight text-sky-950 lg:text-base">
                {name}
            </h3>
            <p className="font-poppins text-[10px] leading-loose font-normal text-neutral-600">
                {position}
            </p>
        </div>
        <p className="justify-start self-stretch text-center font-['Segoe_UI'] leading-relaxed font-normal text-indigo-950 lg:leading-loose">
            &ldquo;{testimonial}&rdquo;
        </p>
    </article>
);

function Heading() {
    return (
        <header className="mb-8 flex flex-col items-start gap-4 lg:mb-10 lg:gap-6">
            <h1 className="font-poltawski_nowy text-xl leading-normal font-semibold tracking-wide text-black lg:text-2xl">
                Testimonial
            </h1>
            <p className="font-segoe_ui text-sm leading-relaxed tracking-tight text-black capitalize lg:text-base lg:leading-normal">
                We understand that in order to maximize customer satisfaction,
                the flow of your supply chain from product to information to
                finance needs to be responsive towards demand.
            </p>
        </header>
    );
}

export default function Testimonials() {
    return (
        <section className="w-full px-4 py-12 lg:px-5 lg:py-16">
            <div className="mx-auto max-w-7xl">
                <Heading />
                <div className="flex flex-col items-center justify-center gap-8 sm:grid sm:grid-cols-2 md:flex-row lg:flex lg:flex-wrap lg:justify-between lg:gap-16">
                    {TESTIMONIALS.map(testimonial => (
                        <TestimonialCard
                            key={testimonial.id}
                            {...testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
