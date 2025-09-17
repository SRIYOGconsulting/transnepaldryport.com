type BannerProps = {
  title: string;
  subtitle: string;
  img: string;
};

export default function Banner({ title, subtitle, img }: BannerProps) {
  return (
    <section
      aria-label="Banner"
      className="relative inline-flex h-[462px] w-full flex-col items-start justify-center gap-2.5 bg-sky-950 px-25 py-24"
    >
      {/* Background image */}
      <img
        src={img}
        alt="Banner background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Content */}
      <div className="relative flex h-64 w-[575px] flex-col items-start justify-center gap-2.5 bg-sky-950/95 px-14 py-16">
        <div className="flex w-96 flex-col items-start justify-center gap-6">
          <h1 className="h-12 self-stretch font-['Segoe_UI'] text-5xl font-bold text-white">
            {title}
          </h1>
          <p className="self-stretch font-['Segoe_UI'] text-3xl font-light text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
