import { useEnquiry } from '../context/EnquiryContext';

const About: React.FC = () => {
    const { openEnquiry } = useEnquiry();

    return (
        <>
            {/* Hero */}
            <header
                className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden parallax"
                style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDv3yItDcUo7ILdksbUTQQ-DmOhNMguVxh-qiuLiGTQo9xbibEtMm14ComNdXqv-g86t31SYUA4-QcUXbWr95iXr06_7rKLczGXXXH8VAYctTKWqkOlgI98jvybeXbHVyN__3fvHz-yDYwH_JGoF64mVxFvcAGyOBMvYII4zJ4LOg3FI5VlWB9SMZRLw2Tp36Ua0SlbKcEiUxr1dt_X8UZ1WVG2AhpjAM2xxWpfK9SNp0k4yEuiI6acEZ_Cib1cMdOeJweBXGnf1BU')",
                }}
            >
                <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                    <span className="text-primary text-sm sm:text-base font-bold tracking-[0.2em] uppercase mb-4 block">Est. 2010</span>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Our Legacy of <span className="italic font-normal text-primary">Excellence</span>
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
            </header>

            {/* Our Story */}
            <section className="py-20 lg:py-28 bg-surface-light dark:bg-surface-dark overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                            <div className="relative z-10 p-2 border-2 border-primary/20">
                                <img
                                    alt="Interior view of the grand ballroom with chandeliers"
                                    className="w-full h-auto object-cover shadow-2xl"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_d3EVzYXwQqtliBvsC_h12uyGwaA8Q5gv2inI0Sr16_UERkrRY0heOAzGPITuRDAYqCE0FQlAYFp5mUV_XIwNODTcOYYXBqRGXG899WmsMI_jhcNk84CCEQHvVwHpR_2EcbY01hXDfE360njIay14g1-79NmG2BmUQWWrV_hrjn0QUCiDnGupCY5pB352Gj6KPi-PTBnTZdAHqvAK9Il6zhhpDa7vxjMHwD-2wAl-L8mv_B7hlWTq2624tozdtLmpwn7uHGmZ7hQ"
                                />
                            </div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-background-light dark:bg-background-dark rounded-full opacity-50 z-0"></div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-primary/30 z-0"></div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Our Story</span>
                            <h2 className="font-display text-4xl text-text-light dark:text-text-dark font-bold mb-8">Crafting Memories Since Inception</h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
                                <p>
                                    It began with a vision to redefine luxury celebrations in the heart of the city. The Royal Grand was conceived not just as a venue, but as a canvas where dreams are painted with the hues of elegance and tradition.
                                </p>
                                <p>
                                    Over the last decade, we have evolved from a modest banquet hall into a premier convention center, hosting some of the most prestigious weddings, corporate galas, and cultural events. Our architecture blends contemporary aesthetics with timeless grandeur, ensuring every corner offers a photo-perfect moment.
                                </p>
                                <p>
                                    We believe that every event tells a story. Our mission is to provide the perfect setting, impeccable service, and an atmosphere of sophistication that allows your story to unfold seamlessly, leaving an indelible mark on you and your guests.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder's Note */}
            <section className="py-20 bg-background-light dark:bg-background-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-surface-light dark:bg-surface-dark p-8 md:p-12 shadow-xl border-t-4 border-primary relative">
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0 relative">
                                <div className="absolute inset-0 border-2 border-primary rotate-6 transform translate-x-2 translate-y-2"></div>
                                <img
                                    alt="Portrait of the Founder"
                                    className="w-full h-full object-cover grayscale relative z-10 shadow-lg"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuApZo9uTv9jgGbr-wlIiV25KCwSt3mKoJNHo8aGZ5T8vzaozbUV2AcYRy8W6g_40kh8IBaVIGJUJ-E6KLaGacTA1cIS_d6p7-UxYaMylbPxJzCViSDML9MtxmIdBYgIwmKlbmhFk4vD_6Jm5myxxieACozYbpI3EDOM3xrIBajFAwrlnoaB11u-tg0itm_z5CnTzHSVt2ZUuBfHX-l8OEbntc73X4U1a_yGJnmCbmj9ZwtZ34L2VNj6LdSJKjc9s2To2zquuDGj6u8"
                                />
                            </div>
                            <div className="text-center md:text-left flex-grow">
                                <span className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-2 block">Founder's Note</span>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-4">"Service is the Rent We Pay for the Privilege of Living on This Earth."</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                                    At The Royal Grand, we don't just host events; we curate experiences. My promise to you is uncompromised quality and a personal touch in every detail. We look forward to being part of your journey.
                                </p>
                                <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                                    <div>
                                        <h4 className="font-display text-xl font-bold text-text-light dark:text-text-dark">Rajesh Kumar</h4>
                                        <p className="text-primary text-sm uppercase tracking-wide">Managing Director</p>
                                    </div>
                                    <div className="mt-4 md:mt-0 font-signature text-4xl text-gray-500 transform -rotate-3">
                                        Rajesh Kumar
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-symbols-outlined text-9xl">format_quote</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white divide-y md:divide-y-0 md:divide-x divide-white/20">
                        <div className="p-4 group">
                            <span className="material-symbols-outlined text-5xl mb-4 group-hover:scale-110 transition-transform">celebration</span>
                            <h3 className="text-5xl font-display font-bold mb-2">1500+</h3>
                            <p className="uppercase tracking-widest text-sm font-medium opacity-80">Events Hosted</p>
                        </div>
                        <div className="p-4 group">
                            <span className="material-symbols-outlined text-5xl mb-4 group-hover:scale-110 transition-transform">sentiment_satisfied_alt</span>
                            <h3 className="text-5xl font-display font-bold mb-2">12k+</h3>
                            <p className="uppercase tracking-widest text-sm font-medium opacity-80">Happy Guests</p>
                        </div>
                        <div className="p-4 group">
                            <span className="material-symbols-outlined text-5xl mb-4 group-hover:scale-110 transition-transform">history_edu</span>
                            <h3 className="text-5xl font-display font-bold mb-2">14</h3>
                            <p className="uppercase tracking-widest text-sm font-medium opacity-80">Years of Service</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline / Milestones */}
            <section className="py-20 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Journey</span>
                        <h2 className="font-display text-4xl text-text-light dark:text-text-dark font-bold mt-2">Milestones</h2>
                        <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
                    </div>
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300 dark:bg-gray-700"></div>
                        <div className="space-y-12">
                            {/* 2010 */}
                            <div className="flex flex-col md:flex-row items-center justify-between w-full group">
                                <div className="order-1 w-full md:w-5/12 text-center md:text-right p-6 bg-surface-light dark:bg-surface-dark shadow-lg rounded hover:-translate-y-2 transition-transform duration-300">
                                    <h3 className="font-display text-2xl font-bold text-primary mb-2">2010</h3>
                                    <h4 className="font-bold text-lg mb-2 text-text-light dark:text-text-dark">The Beginning</h4>
                                    <p className="text-gray-500 text-sm">Founded as a modest banquet hall with a vision for excellence.</p>
                                </div>
                                <div className="order-1 md:w-2/12 flex justify-center py-4 md:py-0 relative z-10">
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-white dark:border-background-dark shadow-md group-hover:scale-125 transition-transform">
                                        <span className="material-symbols-outlined text-white text-sm">flag</span>
                                    </div>
                                </div>
                                <div className="order-1 w-full md:w-5/12 md:pl-8"></div>
                            </div>
                            {/* 2015 */}
                            <div className="flex flex-col md:flex-row items-center justify-between w-full group">
                                <div className="order-1 w-full md:w-5/12 md:pr-8"></div>
                                <div className="order-1 md:w-2/12 flex justify-center py-4 md:py-0 relative z-10">
                                    <div className="w-10 h-10 bg-background-dark dark:bg-white rounded-full flex items-center justify-center border-4 border-white dark:border-background-dark shadow-md group-hover:scale-125 transition-transform">
                                        <span className="material-symbols-outlined text-white dark:text-black text-sm">expand_circle_down</span>
                                    </div>
                                </div>
                                <div className="order-1 w-full md:w-5/12 text-center md:text-left p-6 bg-surface-light dark:bg-surface-dark shadow-lg rounded hover:-translate-y-2 transition-transform duration-300">
                                    <h3 className="font-display text-2xl font-bold text-primary mb-2">2015</h3>
                                    <h4 className="font-bold text-lg mb-2 text-text-light dark:text-text-dark">Grand Expansion</h4>
                                    <p className="text-gray-500 text-sm">Added the main convention hall with 1500 pax capacity.</p>
                                </div>
                            </div>
                            {/* 2018 */}
                            <div className="flex flex-col md:flex-row items-center justify-between w-full group">
                                <div className="order-1 w-full md:w-5/12 text-center md:text-right p-6 bg-surface-light dark:bg-surface-dark shadow-lg rounded hover:-translate-y-2 transition-transform duration-300">
                                    <h3 className="font-display text-2xl font-bold text-primary mb-2">2018</h3>
                                    <h4 className="font-bold text-lg mb-2 text-text-light dark:text-text-dark">Eco Certification</h4>
                                    <p className="text-gray-500 text-sm">Recognized as the first eco-friendly convention center in the district.</p>
                                </div>
                                <div className="order-1 md:w-2/12 flex justify-center py-4 md:py-0 relative z-10">
                                    <div className="w-10 h-10 bg-background-dark dark:bg-white rounded-full flex items-center justify-center border-4 border-white dark:border-background-dark shadow-md group-hover:scale-125 transition-transform">
                                        <span className="material-symbols-outlined text-white dark:text-black text-sm">eco</span>
                                    </div>
                                </div>
                                <div className="order-1 w-full md:w-5/12 md:pl-8"></div>
                            </div>
                            {/* 2023 */}
                            <div className="flex flex-col md:flex-row items-center justify-between w-full group">
                                <div className="order-1 w-full md:w-5/12 md:pr-8"></div>
                                <div className="order-1 md:w-2/12 flex justify-center py-4 md:py-0 relative z-10">
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-white dark:border-background-dark shadow-md group-hover:scale-125 transition-transform">
                                        <span className="material-symbols-outlined text-white text-sm">diamond</span>
                                    </div>
                                </div>
                                <div className="order-1 w-full md:w-5/12 text-center md:text-left p-6 bg-surface-light dark:bg-surface-dark shadow-lg rounded hover:-translate-y-2 transition-transform duration-300">
                                    <h3 className="font-display text-2xl font-bold text-primary mb-2">2023</h3>
                                    <h4 className="font-bold text-lg mb-2 text-text-light dark:text-text-dark">Award of Excellence</h4>
                                    <p className="text-gray-500 text-sm">Voted Best Wedding Venue by City Lifestyle Magazine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-surface-light dark:bg-surface-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Why Choose Us</span>
                        <h2 className="font-display text-4xl text-text-light dark:text-text-dark font-bold mt-2">The Royal Advantage</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: 'equalizer', title: 'Acoustic Excellence', desc: 'State-of-the-art soundproofing and acoustic treatments ensure crystal clear audio for speeches and music, creating an immersive experience.' },
                            { icon: 'recycling', title: 'Eco-Conscious', desc: 'We are committed to sustainability with solar power integration, waste management systems, and eco-friendly lighting throughout the venue.' },
                            { icon: 'concierge', title: 'Service Excellence', desc: 'Our dedicated team of event planners and hospitality staff ensures a seamless experience from initial booking to the final farewell.' },
                            { icon: 'kitchen', title: 'Gourmet Catering', desc: 'Partnered with top-tier culinary experts to provide a diverse range of authentic cuisines that delight every palate.' },
                            { icon: 'security', title: 'Premium Security', desc: '24/7 surveillance and professional security personnel ensure the safety and privacy of your guests and your special event.' },
                            { icon: 'local_parking', title: 'Ample Parking', desc: 'Spacious, well-lit parking facilities with valet services to accommodate large guest lists without any hassle.' },
                        ].map((item) => (
                            <div key={item.title} className="p-8 border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-colors group bg-background-light dark:bg-background-dark">
                                <div className="w-14 h-14 bg-surface-light dark:bg-surface-dark rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3 text-text-light dark:text-text-dark">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800" id="contact">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-display text-3xl font-bold mb-6">Ready to create history with us?</h2>
                    <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                        Visit us to experience the grandeur in person. Our team is ready to walk you through the possibilities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="px-8 py-3 bg-primary text-white uppercase tracking-widest text-sm hover:bg-primary-dark transition-all shadow-lg font-bold"
                            onClick={openEnquiry}
                        >
                            Schedule a Visit
                        </button>
                        <button
                            className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-text-light dark:text-text-dark uppercase tracking-widest text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-bold"
                            onClick={openEnquiry}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
