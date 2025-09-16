import React from 'react';
import { TESTIMONIALS } from '../../data/homePageData/testimonials'; // Import testimonials data

const TestimonialCard: React.FC<{
    name: string;
    position: string;
    testimonial: string;
    img?: string;
}> = ({ name, position, testimonial, img }) => {
    return (
        <div className="flex h-72 w-[586px] flex-col items-center gap-4 rounded-[30px] bg-slate-100 p-6 text-center">
            {/* Image */}
            <img
                className="h-24 w-24 rounded-full object-cover"
                src={img || 'https://placehold.co/100x100'}
                alt={name}
            />
            {/* Name & Position */}
            <div className="w-full text-center">
                <h3 className="font-['Poppins'] text-base leading-normal font-semibold tracking-tight text-sky-950">
                    {name}
                </h3>
                <p className="font-['Poppins'] text-[10px] leading-loose font-normal text-neutral-600">
                    {position}
                </p>
            </div>
            {/* Testimonial Text */}
            <p className="mt-auto max-w-[472px] text-center font-['Segoe_UI'] text-xs leading-normal font-normal text-indigo-950">
                &ldquo;{testimonial}&rdquo;
            </p>
        </div>
    );
};

// Heading Component
function Heading() {
    return (
        <div className="flex flex-col items-start justify-start gap-6">
            <h1 className="font-['Poltawski_Nowy'] text-2xl leading-normal font-semibold tracking-wide text-black">
                Testimonial
            </h1>
            <p className="font-['Segoe_UI'] text-base leading-normal tracking-tight text-black capitalize">
                We understand that in order to maximize customer satisfaction,
                the flow of your supply chain from product to information to
                finance needs to be responsive towards demand.
            </p>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="w-full px-20 py-16">

            <div className="max-w-7xl">
                <Heading />

            <div className="flex justify-between gap-16">
                {TESTIMONIALS.map(testimonial => (
                    <TestimonialCard
                        key={testimonial.id}
                        name={testimonial.name}
                        position={testimonial.position}
                        testimonial={testimonial.testimonial}
                        img={testimonial.img}
                    />
                ))}
            </div>
            </div>
        </section>
    );
}
