import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    onEnquireClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onEnquireClick }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const location = useLocation();

    const isActive = (path: string): boolean => location.pathname === path;

    const toggleMenu = (): void => {
        setMobileMenuOpen((prev) => !prev);
        document.body.classList.toggle('overflow-hidden');
    };

    const closeMenu = (): void => {
        setMobileMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
    };

    return (
        <>
            <nav className="fixed w-full z-50 glassmorphism border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center gap-3">
                            <Link to="/" className="flex items-center gap-3">
                                <div className="h-10 w-10 border-2 border-primary flex items-center justify-center">
                                    <span className="font-display font-bold text-xl text-primary">RG</span>
                                </div>
                                <span className="font-display font-semibold text-xl tracking-wider uppercase hidden sm:block">The Royal Grand</span>
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-8 items-center">
                            <Link
                                className={`text-sm uppercase tracking-widest transition-colors ${isActive('/') ? 'text-primary font-bold' : 'hover:text-primary'}`}
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                className={`text-sm uppercase tracking-widest transition-colors ${isActive('/about') ? 'text-primary font-bold' : 'hover:text-primary'}`}
                                to="/about"
                            >
                                About
                            </Link>
                            <Link
                                className={`text-sm uppercase tracking-widest transition-colors ${isActive('/features') ? 'text-primary font-bold' : 'hover:text-primary'}`}
                                to="/features"
                            >
                                Features
                            </Link>
                            <Link
                                className={`text-sm uppercase tracking-widest transition-colors ${isActive('/gallery') ? 'text-primary font-bold' : 'hover:text-primary'}`}
                                to="/gallery"
                            >
                                Gallery
                            </Link>
                            <button
                                className="px-6 py-2 bg-primary text-white text-sm uppercase tracking-widest hover:bg-primary-dark transition-colors"
                                onClick={onEnquireClick}
                            >
                                Enquire Now
                            </button>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                className="text-text-light dark:text-text-dark hover:text-primary focus:outline-none"
                                onClick={toggleMenu}
                            >
                                <span className="material-icons text-3xl">menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-background-light dark:bg-background-dark transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-12">
                        <div className="h-10 w-10 border-2 border-primary flex items-center justify-center">
                            <span className="font-display font-bold text-xl text-primary">RG</span>
                        </div>
                        <button
                            className="text-text-light dark:text-text-dark"
                            onClick={closeMenu}
                        >
                            <span className="material-icons text-3xl">close</span>
                        </button>
                    </div>
                    <div className="flex flex-col space-y-8 text-center">
                        <Link
                            className={`text-2xl uppercase tracking-widest transition-colors ${isActive('/') ? 'text-primary font-bold' : 'hover:text-primary'}`}
                            to="/"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link
                            className={`text-2xl uppercase tracking-widest transition-colors ${isActive('/about') ? 'text-primary font-bold' : 'hover:text-primary'}`}
                            to="/about"
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                        <Link
                            className={`text-2xl uppercase tracking-widest transition-colors ${isActive('/features') ? 'text-primary font-bold' : 'hover:text-primary'}`}
                            to="/features"
                            onClick={closeMenu}
                        >
                            Features
                        </Link>
                        <Link
                            className={`text-2xl uppercase tracking-widest transition-colors ${isActive('/gallery') ? 'text-primary font-bold' : 'hover:text-primary'}`}
                            to="/gallery"
                            onClick={closeMenu}
                        >
                            Gallery
                        </Link>
                        <button
                            className="px-8 py-4 bg-primary text-white text-lg uppercase tracking-widest hover:bg-primary-dark transition-colors inline-block mt-4"
                            onClick={() => {
                                closeMenu();
                                onEnquireClick();
                            }}
                        >
                            Enquire Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
