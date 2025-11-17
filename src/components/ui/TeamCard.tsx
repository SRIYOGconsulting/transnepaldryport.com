type DirectorCardProps = {
  imgSrc: string;
  name: string;
  role: string;
  description: string[];
};

export default function TeamCard({
  imgSrc,
  name,
  role,
  description,
}: DirectorCardProps) {
  return (
    <article
      className="flex w-full flex-col items-center rounded-xl bg-white p-4 shadow-[0px_1px_5px_0px_rgba(0,0,0,0.25)] sm:p-6 lg:p-8 h-full"
      aria-labelledby="director-name"
    >
      {/* Header */}
      <header className="flex flex-col items-center gap-4 sm:gap-5">
        <img
          className="h-48 w-48 rounded-[10px] object-cover sm:h-56 sm:w-56 lg:h-64 lg:w-64"
          src={imgSrc}
          alt={`Portrait of ${name}`}
          loading="lazy"
          width={256}
          height={256}
        />
        <div
          className="flex flex-col items-center"
          role="group"
          aria-label={`Details for ${name}`}
        >
          <h2
            id="director-name"
            className="text-center font-poppins text-xl font-semibold text-indigo-950 sm:text-2xl"
          >
            {name}
          </h2>
          <p className="text-center font-poppins text-base font-normal text-indigo-900/90 sm:text-lg">
            {role}
          </p>
        </div>
      </header>

      {/* Biography / Description */}
      <section
        className="mt-4 w-full text-justify font-poppins text-sm leading-relaxed text-black sm:text-base flex flex-col gap-4"
        aria-label={`Biography of ${name}`}
      >
        {description.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>
    </article>
  );
}
