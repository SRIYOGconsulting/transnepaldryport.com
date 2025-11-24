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
            description: "Reliable logistics and transport services across Nepal.",
            ogImage: "",
            canonical: "https://test.transnepaldryport.com/"
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
