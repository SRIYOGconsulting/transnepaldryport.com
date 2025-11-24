
import Banner from '../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../components/ui/TextAreaWithHeadingAndLogo';
import { TRANSPORTATION_SERVICES } from '../../data/servicesData/transportationServices';
import ServiceCard from '../../components/ui/ServiceCard';
import { useMeta } from '../../utils/useMeta';

const BANNER = {
    title: 'Transportation',
    subtitle: '',
    hero: ''
};



export default function Transportation() {
  useMeta({
    title: " Transportation  |  TransNepal Freight Services Pvt. Ltd.",
    description: "Meet the executive board and leadership team of TransNepal Dry Port.",
    ogImage: "",
    canonical: "https://transnepaldryport.com/tariff"
  });
  return (
    <main>
      <Banner
        title={BANNER.title}
        subtitle={BANNER.subtitle}
        img={BANNER.hero}
      />

      <section className="container mx-auto px-5">
        <TextAreaWithHeadingAndLogo
          title={TRANSPORTATION_SERVICES.Heading}
          description={TRANSPORTATION_SERVICES.Sub}
        />

        {/* MAIN GRID */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* TOP ROW → 2 centered cards */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row justify-center gap-8">
              <div className="flex-1 sm:flex-none lg:w-1/3">
                <ServiceCard {...TRANSPORTATION_SERVICES.content[0]} />
              </div>

              <div className="flex-1 sm:flex-none lg:w-1/3">
                <ServiceCard {...TRANSPORTATION_SERVICES.content[1]} />
              </div>
            </div>

            {/* BOTTOM ROW → 3 even cards */}
            {TRANSPORTATION_SERVICES.content.slice(2, 5).map((item, index) => (
              <div key={index} className="flex-1 lg:w-auto">
                <ServiceCard {...item} />
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}

