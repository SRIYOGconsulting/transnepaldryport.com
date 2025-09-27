import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AppRoutes } from './utils/AppRoutes';
import ScrollToTop from './utils/ScrollOnTop';

function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <AppRoutes />
            <Footer />
        </>
    );
}

export default App;
