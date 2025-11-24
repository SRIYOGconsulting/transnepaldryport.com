import AboutUs from '../components/home/AboutUs';
import DetailsTransNepal from '../components/home/DetailsTransNepal';
import Features from '../components/home/Features';
import GetInTouchWithUs from '../components/home/GetInTouchWithUs';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import {
    DesktopContactUsButton,
    MobileContactUsButton
} from '../components/ui/ContactUsButton';
import HomeHeroBanner from '../components/ui/HomeHeroBanner';
import { useMeta } from '../utils/useMeta';

export default function Home() {
   useMeta({
            title: "TransNepal Freight Services Pvt. Ltd.",
            description: "Meet the executive board and leadership team of TransNepal Dry Port.",
            ogImage: "",
            canonical: "https://transnepaldryport.com/tariff"
          });
    return (
        
        <main>
            <HomeHeroBanner />
            <DetailsTransNepal />
            <AboutUs />
            <Services />
            <GetInTouchWithUs />
            <Features />
            <Stats />
            <Testimonials />

            <DesktopContactUsButton />
            <MobileContactUsButton />
        </main>
    );
}
