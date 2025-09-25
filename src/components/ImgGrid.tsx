type ImgCardItem = {
    img: string;
    title?: string | null;
};

type ImgCardProps = {
    items: ImgCardItem[];
    grid?: number;
};

export default function ImgGrid({ items, grid = 4 }: ImgCardProps) {
    return (
        <section
            className={`grid gap-8 sm:grid-cols-2 md:grid-cols-${grid} lg:grid-cols-${grid}`}
        >
            {items.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    <img
                        src={item.img}
                        alt={`Image ${index}`}
                        className="h-full w-full object-cover"
                    />
                    {item.title ? (
                        <p className="mt-5 font-semibold text-center text-xl text-blue-900">
                            {item.title}
                        </p>
                    ) : null}
                </div>
            ))}
        </section>
    );
}
