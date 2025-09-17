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
    <article className="flex h-72 w-147 flex-col items-center gap-4 rounded-[30px] bg-slate-100 p-6 text-center">
        <img
            className="h-24 w-24 rounded-full object-cover"
            src={img ?? 'https://placehold.co/100x100'}
            alt={`Photo of ${name}`}
            loading="lazy"
            decoding="async"
        />
        <div className="w-full">
            <h3 className="font-poppins text-base leading-normal font-semibold tracking-tight text-sky-950">
                {name}
            </h3>
            <p className="font-poppins text-[10px] leading-loose font-normal text-neutral-600">
                {position}
            </p>
        </div>
        <p className="justify-start self-stretch text-center font-['Segoe_UI'] text-xs leading-loose font-normal text-indigo-950">
            &ldquo;{testimonial}&rdquo;
        </p>
    </article>
);

function Heading() {
    return (
        <header className="mb-10 flex flex-col items-start gap-6">
            <h1 className="font-poltawski_nowy text-2xl leading-normal font-semibold tracking-wide text-black">
                Testimonial
            </h1>
            <p className="font-segoe_ui text-base leading-normal tracking-tight text-black capitalize">
                We understand that in order to maximize customer satisfaction,
                the flow of your supply chain from product to information to
                finance needs to be responsive towards demand.
            </p>
        </header>
    );
}

export default function Testimonials() {
    return (
        <section className="w-full px-5 py-16">
            <div className="mx-auto max-w-7xl">
                <Heading />
                <div className="flex flex-wrap justify-between gap-16">
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
