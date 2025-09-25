type TextAreaWithHeadingProps = {
    title: string;
    description: string | string[];
    bold?: boolean;
    logo?: string | null; // optional logo URL, can be null
};

export default function TextAreaWithHeadingAndLogo({
    title,
    description,
    bold = false,
    logo = null
}: TextAreaWithHeadingProps) {
    return (
        <section className="w-full max-w-7xl">
            <div className="mb-5 flex items-center gap-4">
                {logo && (
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 w-10 object-contain"
                    />
                )}
                <h1 className="text-2xl font-bold text-blue-900">{title}</h1>
            </div>
            <div
                className={`font-['Poppins'] text-xl text-neutral-600 ${
                    bold ? 'font-bold' : 'font-medium'
                }`}
            >
                {Array.isArray(description) ? (
                    description.map((item, index) => (
                        <p className="mb-3" key={index}>
                            {item}
                        </p>
                    ))
                ) : (
                    <p>{description}</p>
                )}
            </div>
        </section>
    );
}
