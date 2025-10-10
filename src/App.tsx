import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AppRoutes } from './utils/AppRoutes';
import ScrollToTop from './utils/ScrollToTop';

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
