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
    <article
    className="
        w-full
        max-w-xl
        rounded-3xl
        bg-slate-100
        px-8 py-10
        flex flex-col items-center
        text-center
        shadow
        gap-5
    "
>
    <img
        className="w-24 h-24 rounded-full object-cover"
        src={img}
        alt={name}
        loading="lazy"
    />

    <div>
        <h3 className="font-poppins text-lg font-semibold text-sky-950">
            {name}
        </h3>
        <p className="font-poppins text-sm text-neutral-700">
            {position}
        </p>
    </div>

    <p className="text-base text-slate-800 leading-relaxed">
        "{testimonial}"
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
                <div className="
                    flex
                    flex-col
                    md:flex-row
                    items-center
                    justify-center
                    gap-8
                    lg:gap-16
                    xl:gap-24
                ">
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