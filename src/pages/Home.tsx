import { Link } from 'react-router-dom';
import { useEnquiry } from '../context/EnquiryContext';

const Home: React.FC = () => {
    const { openEnquiry } = useEnquiry();
    return (
        <>
            {/* Hero */}
            <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Grand luxury ballroom decorated for a wedding"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_d3EVzYXwQqtliBvsC_h12uyGwaA8Q5gv2inI0Sr16_UERkrRY0heOAzGPITuRDAYqCE0FQlAYFp5mUV_XIwNODTcOYYXBqRGXG899WmsMI_jhcNk84CCEQHvVwHpR_2EcbY01hXDfE360njIay14g1-79NmG2BmUQWWrV_hrjn0QUCiDnGupCY5pB352Gj6KPi-PTBnTZdAHqvAK9Il6zhhpDa7vxjMHwD-2wAl-L8mv_B7hlWTq2624tozdtLmpwn7uHGmZ7hQ"
                    />
                    <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h2 className="text-primary text-sm sm:text-base font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">Welcome to The Royal Grand</h2>
                    <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Where Celebrations <br /> Become <span className="italic font-normal text-primary">Legends</span>
                    </h1>
                    <p className="text-gray-200 text-lg sm:text-xl font-light mb-10 max-w-2xl mx-auto">
                        Experience the epitome of luxury and elegance in the heart of the city. A venue crafted for your most cherished moments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-primary text-white uppercase tracking-widest text-sm hover:bg-primary-dark transition-all transform hover:scale-105" onClick={openEnquiry}>
                            Book A Visit
                        </button>
                        <a className="px-8 py-3 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all" href="#tour">
                            Virtual Tour
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <span className="material-icons text-white text-3xl">keyboard_arrow_down</span>
                </div>
            </header>

            {/* About Section */}
            <section className="py-20 bg-background-light dark:bg-background-dark" id="about">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">About Us</span>
                            <h2 className="font-display text-4xl text-text-light dark:text-text-dark font-bold mb-6">Luxury Wedding Venue <br />In The City</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                The Royal Grand Convention Center is an oasis for couples to celebrate their picture-perfect wedding with loved ones. Thoughtfully designed and elegantly styled, our spaces provide a stunning setting catering to your style, whether it be a flamboyant celebration or intimate nuptials with panache.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                With a dedicated team offering a bouquet of services to make every couple's dream wedding an exquisite reality, we create memories that will be cherished forever.
                            </p>
                            <Link className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors uppercase text-xs tracking-widest font-semibold" to="/about">
                                Learn More
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    alt="Modern exterior of The Royal Grand building at night"
                                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv3yItDcUo7ILdksbUTQQ-DmOhNMguVxh-qiuLiGTQo9xbibEtMm14ComNdXqv-g86t31SYUA4-QcUXbWr95iXr06_7rKLczGXXXH8VAYctTKWqkOlgI98jvybeXbHVyN__3fvHz-yDYwH_JGoF64mVxFvcAGyOBMvYII4zJ4LOg3FI5VlWB9SMZRLw2Tp36Ua0SlbKcEiUxr1dt_X8UZ1WVG2AhpjAM2xxWpfK9SNp0k4yEuiI6acEZ_Cib1cMdOeJweBXGnf1BU"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 z-[-1] rounded-full"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 border border-primary/30 z-[-1]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-surface-light dark:bg-surface-dark" id="features">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Highlights</span>
                    <h2 className="font-display text-4xl text-text-light dark:text-text-dark font-bold mt-2">Key Features</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800">
                        <div className="group p-10 flex flex-col items-center justify-center hover:bg-background-light dark:hover:bg-background-dark transition-colors cursor-pointer relative overflow-hidden">
                            <span className="material-icons-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors mb-4">apartment</span>
                            <h3 className="font-display font-semibold text-lg mb-2 text-text-light dark:text-text-dark">Convention Hall</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">1500 Pax Capacity</p>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <div className="group p-10 flex flex-col items-center justify-center hover:bg-background-light dark:hover:bg-background-dark transition-colors cursor-pointer relative overflow-hidden">
                            <span className="material-icons-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors mb-4">restaurant</span>
                            <h3 className="font-display font-semibold text-lg mb-2 text-text-light dark:text-text-dark">Grand Dining</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">350 Pax Seating</p>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <div className="group p-10 flex flex-col items-center justify-center hover:bg-background-light dark:hover:bg-background-dark transition-colors cursor-pointer relative overflow-hidden">
                            <span className="material-icons-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors mb-4">bedroom_parent</span>
                            <h3 className="font-display font-semibold text-lg mb-2 text-text-light dark:text-text-dark">Luxury Suites</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">Attached Guest Rooms</p>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <div className="group p-10 flex flex-col items-center justify-center hover:bg-background-light dark:hover:bg-background-dark transition-colors cursor-pointer relative overflow-hidden">
                            <span className="material-icons-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors mb-4">weekend</span>
                            <h3 className="font-display font-semibold text-lg mb-2 text-text-light dark:text-text-dark">VIP Lounge</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">Exclusive Access</p>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <div className="group p-10 flex flex-col items-center justify-center hover:bg-background-light dark:hover:bg-background-dark transition-colors cursor-pointer relative overflow-hidden lg:border-t lg:border-gray-200 dark:lg:border-gray-800">
                            <span className="material-icons-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors mb-4">checkroom</span>
                            <h3 className="font-display font-semibold text-lg mb-2 text-text-light dark:text-text-dark">Bridal Suite</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">Private &amp; Spacious</p>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <div className="group p-10 flex flex-col items-center justify-center hover:bg-background-light dark:hover:bg-background-dark transition-colors cursor-pointer relative overflow-hidden lg:border-t lg:border-gray-200 dark:lg:border-gray-800">
                            <span className="material-icons-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors mb-4">directions_car</span>
                            <h3 className="font-display font-semibold text-lg mb-2 text-text-light dark:text-text-dark">Valet Parking</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">100+ Covered Spots</p>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <div className="group p-10 flex flex-col items-center justify-center hover:bg-background-light dark:hover:bg-background-dark transition-colors cursor-pointer relative overflow-hidden lg:border-t lg:border-gray-200 dark:lg:border-gray-800">
                            <span className="material-icons-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors mb-4">compass_calibration</span>
                            <h3 className="font-display font-semibold text-lg mb-2 text-text-light dark:text-text-dark">Vasthu Compliant</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">100% Assurance</p>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <Link to="/features" className="group p-10 flex flex-col items-center justify-center bg-primary text-white hover:bg-primary-dark transition-colors cursor-pointer relative overflow-hidden lg:border-t lg:border-gray-200 dark:lg:border-gray-800">
                            <h3 className="font-display font-semibold text-xl mb-2">View More</h3>
                            <span className="material-icons text-white transition-transform group-hover:translate-x-2">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Video Tour Section */}
            <section className="relative py-32 bg-background-dark" id="tour">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        alt="Dark ambient video background placeholder"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuApZo9uTv9jgGbr-wlIiV25KCwSt3mKoJNHo8aGZ5T8vzaozbUV2AcYRy8W6g_40kh8IBaVIGJUJ-E6KLaGacTA1cIS_d6p7-UxYaMylbPxJzCViSDML9MtxmIdBYgIwmKlbmhFk4vD_6Jm5myxxieACozYbpI3EDOM3xrIBajFAwrlnoaB11u-tg0itm_z5CnTzHSVt2ZUuBfHX-l8OEbntc73X4U1a_yGJnmCbmj9ZwtZ34L2VNj6LdSJKjc9s2To2zquuDGj6u8"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-8 tracking-wide">VIDEO WALKTHROUGH</h2>
                    <button className="group w-24 h-24 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto hover:bg-primary hover:border-primary transition-all duration-300">
                        <span className="material-icons text-5xl text-white ml-2 group-hover:scale-110 transition-transform">play_arrow</span>
                    </button>
                    <p className="text-gray-300 mt-6 tracking-widest uppercase text-sm">Click to play tour</p>
                </div>
            </section>

            {/* Distance Stats */}
            <section className="py-16 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="w-16 h-16 bg-surface-dark dark:bg-surface-light rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <span className="material-icons text-3xl text-white dark:text-black">location_on</span>
                            </div>
                            <p className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">Distance From CMBT</p>
                            <h3 className="text-3xl font-display font-bold text-text-light dark:text-text-dark">9 KM</h3>
                        </div>
                        <div className="p-4">
                            <div className="w-16 h-16 bg-surface-dark dark:bg-surface-light rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <span className="material-icons text-3xl text-white dark:text-black">train</span>
                            </div>
                            <p className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">Central Railway Stn</p>
                            <h3 className="text-3xl font-display font-bold text-text-light dark:text-text-dark">11.5 KM</h3>
                        </div>
                        <div className="p-4">
                            <div className="w-16 h-16 bg-surface-dark dark:bg-surface-light rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <span className="material-icons text-3xl text-white dark:text-black">flight</span>
                            </div>
                            <p className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">From Airport</p>
                            <h3 className="text-3xl font-display font-bold text-text-light dark:text-text-dark">24 KM</h3>
                        </div>
                        <div className="p-4">
                            <div className="w-16 h-16 bg-surface-dark dark:bg-surface-light rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <span className="material-icons text-3xl text-white dark:text-black">domain</span>
                            </div>
                            <p className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">From Anna Nagar</p>
                            <h3 className="text-3xl font-display font-bold text-text-light dark:text-text-dark">6 KM</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events We Host */}
            <section className="py-20 bg-surface-light dark:bg-surface-dark" id="gallery">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">What We Do</span>
                        <h2 className="font-display text-4xl text-text-light dark:text-text-dark font-bold mt-2">Events We Host</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group relative h-80 overflow-hidden rounded-lg cursor-pointer">
                            <img
                                alt="Weddings &amp; Receptions setup"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaOlHa8LIfRe87KYWIbWWKZ5zriYe1azr3JBLQw13ytmICt0TVOEeTLlgVDoZcLzt9cANtkBV61idJA2xBfgvLlGwQiezGbEsf9Q6TM1giK-CnIiPe2PlSjiPTd6m2up0MxzW_0SJldmtks_9UEcfMokb8WpWBOnFQ8tSj1OpjQB3neXMkCS3NsJpTWmXSexq5f-SD3X3gJbSbkNsWvurvInPQlQS0XMFGDFOkVCdb_eMCuhqP_auKzliWehs7Ze9vTnqTebD_5xg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-primary dark:bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white font-display font-bold text-lg text-center uppercase tracking-widest">Weddings &amp; Receptions</h3>
                            </div>
                            <h3 className="absolute bottom-6 left-0 w-full text-center text-white font-display font-bold text-lg uppercase tracking-widest group-hover:opacity-0 transition-opacity duration-300">Weddings &amp; Receptions</h3>
                        </div>
                        <div className="group relative h-80 overflow-hidden rounded-lg cursor-pointer">
                            <img
                                alt="Lifestyle Occasions setup"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtEe8vmRcXWmUVHNuZ8udXYvXLr0KGTPh6Sr_D7Dg3w3hKDT0h2N25YSPp3tdIauD4ik5PCR1bQKXqiL9RZWpOzUSXHC6Q9JIntvPxf-dSNfTrEiquUcQG5HsvQadH0icHzKHxP3mbAy8SLWrlj0ZtyjpjPPc4ErHWHV7ET3QA4VBgMPydaP9PNZBFEPZwA7SvIgcplWFoHaNGaF23fsa3CAkqHkU6szHmXHWrDXYY-yKIYbyBYivevyJPG_56jbthpEByg5Tw5RM"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-primary dark:bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white font-display font-bold text-lg text-center uppercase tracking-widest">Lifestyle Occasions</h3>
                            </div>
                            <h3 className="absolute bottom-6 left-0 w-full text-center text-white font-display font-bold text-lg uppercase tracking-widest group-hover:opacity-0 transition-opacity duration-300">Lifestyle Occasions</h3>
                        </div>
                        <div className="group relative h-80 overflow-hidden rounded-lg cursor-pointer">
                            <img
                                alt="Fest &amp; Screenings setup"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbnvNpO4xCXhoqNGNGfCqHUP4Y6q3ypeoRcLfDmgTn1SJqo9n8l2v76OVcGGZA6EOa6mVjHmRzKhuSflfUlnpJZl9NuTjHCb-kawlesWB3MLGHBWs9CDZ1JXAAqlWG9XNcpkWa5GyCH-Ra2ZN8NhdZxJ2YWQZJ5aQ3y15IRtxRkwuA2-CIdyhDzRDenDg89uWxADVFdKY-A41TVt4qy3-zhCa-KERQpwM4PnPrZjOyJeJ2i0y55lE_42pwT3ILhWb_ghzmpB4D8e4"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-primary dark:bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white font-display font-bold text-lg text-center uppercase tracking-widest">Fest &amp; Screenings</h3>
                            </div>
                            <h3 className="absolute bottom-6 left-0 w-full text-center text-white font-display font-bold text-lg uppercase tracking-widest group-hover:opacity-0 transition-opacity duration-300">Fest &amp; Screenings</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location / Contact */}
            <section className="py-20 bg-background-light dark:bg-background-dark" id="contact">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display text-4xl text-center text-text-light dark:text-text-dark font-bold mb-16 uppercase tracking-widest">Location</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-lg overflow-hidden">
                        <div className="relative h-96 lg:h-auto bg-gray-200">
                            <iframe
                                allowFullScreen
                                height="100%"
                                loading="lazy"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.095655320573!2d80.2223793148227!3d13.093121990776203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265c71708892f%3A0xe677426189916964!2sMP%20Convention%20Center!5e0!3m2!1sen!2sin!4v1620022234000!5m2!1sen!2sin"
                                style={{ border: 0 }}
                                width="100%"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark p-10 lg:p-16 flex flex-col justify-center">
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center flex-shrink-0 text-primary">
                                        <span className="material-icons">phone</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Anytime</p>
                                        <p className="text-lg font-bold text-text-light dark:text-text-dark">9087 20 60 20 / 9087 66 76 86</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center flex-shrink-0 text-primary">
                                        <span className="material-icons">email</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Send Email</p>
                                        <p className="text-lg font-bold text-text-light dark:text-text-dark">info@mpweddings.in</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center flex-shrink-0 text-primary">
                                        <span className="material-icons">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Us</p>
                                        <p className="text-sm font-semibold text-text-light dark:text-text-dark leading-relaxed uppercase">
                                            Commercial Plot 2, Sowmiya Nagar,<br />Perambur Redhills Road, Chennai.
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-8 flex gap-4">
                                    <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 uppercase text-sm tracking-widest font-bold shadow-lg transition-colors w-full md:w-auto" onClick={openEnquiry}>
                                        Enquire Now
                                    </button>
                                    <button className="bg-gray-800 text-white px-8 py-3 uppercase text-sm tracking-widest font-bold shadow-lg flex items-center gap-2 hover:bg-black transition-colors w-full md:w-auto justify-center">
                                        <span className="material-icons text-sm">call</span> 9087 20 60 20
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
