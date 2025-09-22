type TextAreaWithHeadingProps = {
    title: string;
    description: string | string[]; // Accepting either a single string or an array of strings
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
            <div
                className={`text-justify font-['Poppins'] text-base leading-6 text-neutral-600 ${
                    bold ? 'font-bold' : 'font-medium'
                }`}
            >
                {Array.isArray(description) ? (
                    <ul>
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{description}</p>
                )}
            </div>
        </section>
    );
}
