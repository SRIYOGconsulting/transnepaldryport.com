type ItemProps = {
  title: string;
  description: string[] | string;
};

export default function FeatureSection({ title, description }: ItemProps) {
  const sectionClasses =
    'flex h-auto items-center justify-center gap-10 self-stretch bg-slate-100 px-4 py-8 lg:h-75 lg:px-10';
  const containerClasses =
    'inline-flex h-auto max-w-6xl flex-col items-center justify-center gap-4 lg:h-44 lg:gap-2';
  const titleClasses =
    'mb-3 self-stretch text-center text-xl font-normal text-blue-900 lg:mb-5 lg:text-left lg:text-2xl';
  const paragraphClasses =
    'self-stretch text-justify text-sm leading-relaxed font-light text-neutral-600 lg:text-base';

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        <h2 className={titleClasses}>{title}</h2>
        {Array.isArray(description) ? (
          <div className="space-y-3 lg:space-y-2">
            {description.map((desc, index) => (
              <p key={index} className={paragraphClasses}>
                {desc}
              </p>
            ))}
          </div>
        ) : (
          <p className={paragraphClasses}>{description}</p>
        )}
      </div>
    </section>
  );
}
