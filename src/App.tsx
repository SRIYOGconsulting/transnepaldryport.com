import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AppRoutes } from './utils/AppRoutes';
import ScrollToTop from './utils/ScrollToTop';
import CookieConsent from './components/ui/Cookie';

function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <AppRoutes />
            <CookieConsent />
            <Footer />
        
        </>
    );
}

export default App;
