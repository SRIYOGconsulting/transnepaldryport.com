import AboutUs from '../components/home/AboutUs';
import GetInTouchWithUs from '../components/home/GetInTouchWithUs';
import Services from '../components/home/Services';
import HomeHeroBanner from '../components/ui/HomeHeroBanner';

export default function Home() {
    return (
        <main>
            <HomeHeroBanner />
            <AboutUs />
            <Services />
            <GetInTouchWithUs />
        </main>
    );
}
