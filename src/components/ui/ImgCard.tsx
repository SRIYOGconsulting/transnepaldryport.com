export default function ImgCard({
    img,
    grid = 4
}: {
    img: string[];
    grid: number;
}) {
    return (
        <section
            className={`grid gap-8 sm:grid-cols-2 md:grid-cols-${grid} lg:grid-cols-${grid}`}
        >
            {img.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className="h-full w-full object-cover"
                />
            ))}
        </section>
    );
}
