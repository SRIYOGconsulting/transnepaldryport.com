type TextAreaWithHeadingProps = {
    title: string;
    description: string;
    bold?: boolean;
};

export default function TextAreaWithHeading({
    title,
    description,
    bold = false
}: TextAreaWithHeadingProps) {
    return (
        <section className="w-full max-w-7xl">
            <h1 className="mb-5 font-['Poppins'] text-xl font-bold text-blue-900">
                {title}
            </h1>
            <p
                className={`text-justify font-['Poppins'] text-base leading-6 text-neutral-600 ${
                    bold ? 'font-bold' : 'font-medium'
                }`}
            >
                {description}
            </p>
        </section>
    );
}
