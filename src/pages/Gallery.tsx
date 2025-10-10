import ImgGrid from '../components/ImgGrid';
import Banner from '../components/ui/Banner';
import { GALLERY } from '../data/galleryData/gallery';
import hero from '../assets/img/gallery/hero.png';

const BANNER = {
    title: 'Gallery',
    subTitle: 'Capturing Moments, Sharing Stories',
    hero: hero
};
export default function Gallery() {
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
