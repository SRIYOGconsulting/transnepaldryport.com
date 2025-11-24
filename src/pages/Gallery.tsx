import ImgGrid from '../components/ImgGrid';
import Banner from '../components/ui/Banner';
import { GALLERY } from '../data/galleryData/gallery';
import hero from '../assets/img/gallery/hero.png';
import { useMeta } from '../utils/useMeta';
const BANNER = {
    title: 'Gallery',
    subTitle: 'Capturing Moments, Sharing Stories',
    hero: hero
};
export default function Gallery() {
    useMeta({
    title: " Gallery  |  TransNepal Freight Services Pvt. Ltd.",
    description: "Photos showcasing our services and operations.",
    ogImage: "",
    canonical: "https://test.transnepaldryport.com/gallery"
  });
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subTitle}
                img={BANNER.hero}
            />

            <section className="container">
                <ImgGrid items={GALLERY} grid={3} />
            </section>
        </main>
    );
}
