type NewsCardProps = {
    image: string;
    date: string;
    title: string;
    description?: string;
};

const NewsCard = ({ image, date, title, description }: NewsCardProps) => {
    return (
        <article className="w-full max-w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg sm:max-w-sm">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover object-center sm:h-52"
            />

            {/* Content */}
            <div className="p-4">
                {/* Date */}
                <p className="mb-1 text-xs text-gray-500 sm:text-sm">{date}</p>

                {/* Title */}
                <h3 className="mb-2 line-clamp-2 text-base font-semibold text-blue-900 sm:text-lg">
                    {title}
                </h3>

                {/* Optional Description */}
                {description && (
                    <p className="line-clamp-3 text-sm text-gray-600">
                        {description}
                    </p>
                )}
            </div>
        </article>
    );
};

export default NewsCard;
