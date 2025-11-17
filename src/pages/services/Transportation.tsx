
import Banner from '../../components/ui/Banner';
import TextAreaWithHeadingAndLogo from '../../components/ui/TextAreaWithHeadingAndLogo';
import { TRANSPORTATION_SERVICES } from '../../data/servicesData/transportationServices';
import ServiceCard from '../../components/ui/ServiceCard';


const BANNER = {
    title: 'Transportation',
    subtitle: '',
    hero: ''
};



export default function Transportation() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.hero}
            />

            <section className="container">
                <TextAreaWithHeadingAndLogo
                    title={TRANSPORTATION_SERVICES.Heading}
                    description={TRANSPORTATION_SERVICES.Sub}
                />

                <div className="mt-10 flex flex-col gap-0 px-5 lg:flex-row lg:gap-20">
                       <section className="container mx-auto px-5 py-10">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {TRANSPORTATION_SERVICES.content.map((item, index) => (
      <ServiceCard
        key={index}
        title={item.title}
        description={item.description}
        logo={item.logo}
      />
    ))}
  </div>
</section>
                 

                    
                </div>
            </section>
        </main>
    );
}
