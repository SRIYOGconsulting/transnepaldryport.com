import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Captions } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';

type ImgCardItem = {
    img: string;
    title?: string | null;
};

type ImgCardProps = {
    items: ImgCardItem[];
    grid?: number;
};

export default function ImgGrid({ items, grid = 4 }: ImgCardProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <>
            <section
                className={`grid gap-8 sm:grid-cols-2 md:grid-cols-${grid} lg:grid-cols-${grid}`}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex cursor-pointer flex-col items-center"
                        onClick={() => setOpenIndex(index)}
                    >
                        <img
                            src={item.img}
                            alt={item.title || `Image ${index}`}
                            className="h-full w-full object-cover"
                        />
                        {item.title && (
                            <p className="mt-5 text-center text-xl font-semibold text-blue-900">
                                {item.title}
                            </p>
                        )}
                    </div>
                ))}
            </section>

            {openIndex !== null && (
                <Lightbox
                    open={openIndex !== null}
                    close={() => setOpenIndex(null)}
                    index={openIndex}
                    slides={items.map(item => ({
                        src: item.img,
                        title: item.title ?? ''
                    }))}
                    plugins={[Captions]}
                    captions={{
                        showToggle: true,
                        descriptionTextAlign: 'center'
                    }}
                />
            )}
        </>
    );
}
