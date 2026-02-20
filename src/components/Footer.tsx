import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-900 text-white pt-20 pb-8 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="h-14 w-14 border-2 border-primary flex items-center justify-center mb-6">
                            <span className="font-display font-bold text-2xl text-primary">RG</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Meticulously crafted Perfection - we believe celebrations are a milestone. We provide an exceptional venue for your special day!
                        </p>
                        <div className="flex space-x-4">
                            <a className="text-gray-400 hover:text-white transition-colors" href="#">
                                <span className="material-icons text-sm">facebook</span>
                            </a>
                            <a className="text-gray-400 hover:text-white transition-colors" href="#">
                                <span className="material-icons text-sm">photo_camera</span>
                            </a>
                            <a className="text-gray-400 hover:text-white transition-colors" href="#">
                                <span className="material-icons text-sm">smart_display</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <Link className="hover:text-primary transition-colors" to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link className="hover:text-primary transition-colors" to="/features">Amenities</Link>
                            </li>
                            <li>
                                <Link className="hover:text-primary transition-colors" to="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link className="hover:text-primary transition-colors" to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="leading-relaxed">
                                Commercial plot 2, Sowmiya nagar,<br />
                                Perambur redhills road, Kathirvedu,<br />
                                Chennai 600 066
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-xs">email</span> info@mpweddings.in
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-xs">call</span> 9087 20 60 20 / 9087 66 76 86
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Subscribe</h4>
                        <p className="text-gray-400 text-sm mb-4">For latest updates &amp; offers</p>
                        <form className="flex w-64">
                            <input
                                className="w-full bg-white text-gray-900 px-4 py-2 text-sm focus:outline-none rounded-l-sm"
                                placeholder="Email Address"
                                type="email"
                            />
                            <button
                                className="bg-primary text-white px-4 py-2 text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors rounded-r-sm"
                                type="button"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-xs">© 2024. The Royal Grand &amp; Convention. All Rights Reserved</p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <a className="text-gray-500 text-xs hover:text-white" href="#">Terms &amp; Conditions</a>
                        <div className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded">Need Help?</div>
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <span className="material-icons text-white text-sm">chat</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
