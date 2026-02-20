import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EnquiryContext } from './context/EnquiryContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App: React.FC = () => {
    const [enquiryOpen, setEnquiryOpen] = useState<boolean>(false);

    const openEnquiry = (): void => setEnquiryOpen(true);

    return (
        <EnquiryContext.Provider value={{ openEnquiry }}>
            <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body antialiased transition-colors duration-300 overflow-x-hidden">
                <ScrollToTop />
                <Navbar onEnquireClick={openEnquiry} />
                <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
                <Footer />
            </div>
        </EnquiryContext.Provider>
    );
};

export default App;
