import AboutUs from '../components/home/AboutUs';
import DetailsTransNepal from '../components/home/DetailsTransNepal';
import Features from '../components/home/Features';
import GetInTouchWithUs from '../components/home/GetInTouchWithUs';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import HomeHeroBanner from '../components/ui/HomeHeroBanner';

export default function Home() {
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
        </main>
    );
}
