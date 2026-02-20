import { useEffect, useState } from 'react';
import { useEnquiry } from '../context/EnquiryContext';

interface GalleryItem {
    img: string;
    alt: string;
    tag: string;
    title: string;
    desc: string;
    aspect: string;
    extraClass?: string;
}

const galleryItems: GalleryItem[] = [
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_d3EVzYXwQqtliBvsC_h12uyGwaA8Q5gv2inI0Sr16_UERkrRY0heOAzGPITuRDAYqCE0FQlAYFp5mUV_XIwNODTcOYYXBqRGXG899WmsMI_jhcNk84CCEQHvVwHpR_2EcbY01hXDfE360njIay14g1-79NmG2BmUQWWrV_hrjn0QUCiDnGupCY5pB352Gj6KPi-PTBnTZdAHqvAK9Il6zhhpDa7vxjMHwD-2wAl-L8mv_B7hlWTq2624tozdtLmpwn7uHGmZ7hQ', alt: 'Grand Ballroom Wedding', tag: 'Weddings', title: 'Grand Ballroom', desc: 'A royal celebration with golden accents', aspect: '' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaOlHa8LIfRe87KYWIbWWKZ5zriYe1azr3JBLQw13ytmICt0TVOEeTLlgVDoZcLzt9cANtkBV61idJA2xBfgvLlGwQiezGbEsf9Q6TM1giK-CnIiPe2PlSjiPTd6m2up0MxzW_0SJldmtks_9UEcfMokb8WpWBOnFQ8tSj1OpjQB3neXMkCS3NsJpTWmXSexq5f-SD3X3gJbSbkNsWvurvInPQlQS0XMFGDFOkVCdb_eMCuhqP_auKzliWehs7Ze9vTnqTebD_5xg', alt: 'Reception Decoration', tag: 'Weddings', title: 'Floral Mandap', desc: 'Exquisite traditional setup', aspect: 'aspect-[3/4]' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbnvNpO4xCXhoqNGNGfCqHUP4Y6q3ypeoRcLfDmgTn1SJqo9n8l2v76OVcGGZA6EOa6mVjHmRzKhuSflfUlnpJZl9NuTjHCb-kawlesWB3MLGHBWs9CDZ1JXAAqlWG9XNcpkWa5GyCH-Ra2ZN8NhdZxJ2YWQZJ5aQ3y15IRtxRkwuA2-CIdyhDzRDenDg89uWxADVFdKY-A41TVt4qy3-zhCa-KERQpwM4PnPrZjOyJeJ2i0y55lE_42pwT3ILhWb_ghzmpB4D8e4', alt: 'Corporate Conference', tag: 'Corporate', title: 'Tech Summit 2024', desc: 'Global leaders conference', aspect: '' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_d3EVzYXwQqtliBvsC_h12uyGwaA8Q5gv2inI0Sr16_UERkrRY0heOAzGPITuRDAYqCE0FQlAYFp5mUV_XIwNODTcOYYXBqRGXG899WmsMI_jhcNk84CCEQHvVwHpR_2EcbY01hXDfE360njIay14g1-79NmG2BmUQWWrV_hrjn0QUCiDnGupCY5pB352Gj6KPi-PTBnTZdAHqvAK9Il6zhhpDa7vxjMHwD-2wAl-L8mv_B7hlWTq2624tozdtLmpwn7uHGmZ7hQ', alt: 'Entrance Detail', tag: 'Weddings', title: 'Grand Entrance', desc: 'Welcome your guests in style', aspect: 'aspect-[3/4]', extraClass: 'scale-125 origin-bottom' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv3yItDcUo7ILdksbUTQQ-DmOhNMguVxh-qiuLiGTQo9xbibEtMm14ComNdXqv-g86t31SYUA4-QcUXbWr95iXr06_7rKLczGXXXH8VAYctTKWqkOlgI98jvybeXbHVyN__3fvHz-yDYwH_JGoF64mVxFvcAGyOBMvYII4zJ4LOg3FI5VlWB9SMZRLw2Tp36Ua0SlbKcEiUxr1dt_X8UZ1WVG2AhpjAM2xxWpfK9SNp0k4yEuiI6acEZ_Cib1cMdOeJweBXGnf1BU', alt: 'Exterior Night View', tag: 'Interiors', title: 'Facade Illumination', desc: 'Night view of the venue', aspect: '' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtEe8vmRcXWmUVHNuZ8udXYvXLr0KGTPh6Sr_D7Dg3w3hKDT0h2N25YSPp3tdIauD4ik5PCR1bQKXqiL9RZWpOzUSXHC6Q9JIntvPxf-dSNfTrEiquUcQG5HsvQadH0icHzKHxP3mbAy8SLWrlj0ZtyjpjPPc4ErHWHV7ET3QA4VBgMPydaP9PNZBFEPZwA7SvIgcplWFoHaNGaF23fsa3CAkqHkU6szHmXHWrDXYY-yKIYbyBYivevyJPG_56jbthpEByg5Tw5RM', alt: 'Social Gathering Setup', tag: 'Social Events', title: 'Evening Gala', desc: 'Perfect for cocktail dinners', aspect: '' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApZo9uTv9jgGbr-wlIiV25KCwSt3mKoJNHo8aGZ5T8vzaozbUV2AcYRy8W6g_40kh8IBaVIGJUJ-E6KLaGacTA1cIS_d6p7-UxYaMylbPxJzCViSDML9MtxmIdBYgIwmKlbmhFk4vD_6Jm5myxxieACozYbpI3EDOM3xrIBajFAwrlnoaB11u-tg0itm_z5CnTzHSVt2ZUuBfHX-l8OEbntc73X4U1a_yGJnmCbmj9ZwtZ34L2VNj6LdSJKjc9s2To2zquuDGj6u8', alt: 'Table Setting', tag: 'Interiors', title: 'Fine Dining Setup', desc: 'Luxury table arrangements', aspect: 'aspect-[3/4]' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaOlHa8LIfRe87KYWIbWWKZ5zriYe1azr3JBLQw13ytmICt0TVOEeTLlgVDoZcLzt9cANtkBV61idJA2xBfgvLlGwQiezGbEsf9Q6TM1giK-CnIiPe2PlSjiPTd6m2up0MxzW_0SJldmtks_9UEcfMokb8WpWBOnFQ8tSj1OpjQB3neXMkCS3NsJpTWmXSexq5f-SD3X3gJbSbkNsWvurvInPQlQS0XMFGDFOkVCdb_eMCuhqP_auKzliWehs7Ze9vTnqTebD_5xg', alt: 'Lighting Detail', tag: 'Interiors', title: 'Ambience Lighting', desc: 'Mood lighting for every occasion', aspect: '', extraClass: 'scale-110' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtEe8vmRcXWmUVHNuZ8udXYvXLr0KGTPh6Sr_D7Dg3w3hKDT0h2N25YSPp3tdIauD4ik5PCR1bQKXqiL9RZWpOzUSXHC6Q9JIntvPxf-dSNfTrEiquUcQG5HsvQadH0icHzKHxP3mbAy8SLWrlj0ZtyjpjPPc4ErHWHV7ET3QA4VBgMPydaP9PNZBFEPZwA7SvIgcplWFoHaNGaF23fsa3CAkqHkU6szHmXHWrDXYY-yKIYbyBYivevyJPG_56jbthpEByg5Tw5RM', alt: 'Corporate Awards Night', tag: 'Corporate', title: 'Awards Ceremony', desc: 'Annual corporate awards gala', aspect: 'aspect-[3/4]' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbnvNpO4xCXhoqNGNGfCqHUP4Y6q3ypeoRcLfDmgTn1SJqo9n8l2v76OVcGGZA6EOa6mVjHmRzKhuSflfUlnpJZl9NuTjHCb-kawlesWB3MLGHBWs9CDZ1JXAAqlWG9XNcpkWa5GyCH-Ra2ZN8NhdZxJ2YWQZJ5aQ3y15IRtxRkwuA2-CIdyhDzRDenDg89uWxADVFdKY-A41TVt4qy3-zhCa-KERQpwM4PnPrZjOyJeJ2i0y55lE_42pwT3ILhWb_ghzmpB4D8e4', alt: 'Birthday Celebration', tag: 'Social Events', title: 'Grand Birthday', desc: 'Milestone celebration in style', aspect: '' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApZo9uTv9jgGbr-wlIiV25KCwSt3mKoJNHo8aGZ5T8vzaozbUV2AcYRy8W6g_40kh8IBaVIGJUJ-E6KLaGacTA1cIS_d6p7-UxYaMylbPxJzCViSDML9MtxmIdBYgIwmKlbmhFk4vD_6Jm5myxxieACozYbpI3EDOM3xrIBajFAwrlnoaB11u-tg0itm_z5CnTzHSVt2ZUuBfHX-l8OEbntc73X4U1a_yGJnmCbmj9ZwtZ34L2VNj6LdSJKjc9s2To2zquuDGj6u8', alt: 'Sangeet Night', tag: 'Weddings', title: 'Sangeet Night', desc: 'Dance and music celebration', aspect: '' },
    { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv3yItDcUo7ILdksbUTQQ-DmOhNMguVxh-qiuLiGTQo9xbibEtMm14ComNdXqv-g86t31SYUA4-QcUXbWr95iXr06_7rKLczGXXXH8VAYctTKWqkOlgI98jvybeXbHVyN__3fvHz-yDYwH_JGoF64mVxFvcAGyOBMvYII4zJ4LOg3FI5VlWB9SMZRLw2Tp36Ua0SlbKcEiUxr1dt_X8UZ1WVG2AhpjAM2xxWpfK9SNp0k4yEuiI6acEZ_Cib1cMdOeJweBXGnf1BU', alt: 'Lobby Interior', tag: 'Interiors', title: 'Grand Lobby', desc: 'Elegant entrance with marble floors', aspect: 'aspect-[3/4]' },
];

const Gallery: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('All');
    const { openEnquiry } = useEnquiry();
    const [hoveredIdx, setHoveredIdx] = useState<number>(0);

    // Sticky filter menu scroll behavior
    useEffect(() => {
        const handleScroll = (): void => {
            const filterMenu = document.getElementById('sticky-filter-menu');
            const ctaSection = document.getElementById('cta-section');

            if (filterMenu && ctaSection) {
                const ctaRect = ctaSection.getBoundingClientRect();
                if (ctaRect.top < 150) {
                    filterMenu.classList.add('filter-hidden');
                } else {
                    filterMenu.classList.remove('filter-hidden');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const filters = ['All', 'Weddings', 'Corporate', 'Social Events', 'Interiors'];

    const filteredItems = activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.tag === activeFilter);

    return (
        <>
            {/* Hero */}
            <section
                className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden parallax-bg"
                style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaOlHa8LIfRe87KYWIbWWKZ5zriYe1azr3JBLQw13ytmICt0TVOEeTLlgVDoZcLzt9cANtkBV61idJA2xBfgvLlGwQiezGbEsf9Q6TM1giK-CnIiPe2PlSjiPTd6m2up0MxzW_0SJldmtks_9UEcfMokb8WpWBOnFQ8tSj1OpjQB3neXMkCS3NsJpTWmXSexq5f-SD3X3gJbSbkNsWvurvInPQlQS0XMFGDFOkVCdb_eMCuhqP_auKzliWehs7Ze9vTnqTebD_5xg')",
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block drop-shadow-md">Our Portfolio</span>
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg text-4xl sm:text-6xl md:text-7xl">
                        Moments <span className="text-primary italic font-normal">Captured</span>
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto shadow-sm"></div>
                </div>
            </section>

            {/* Sticky Filter */}
            <section className="sticky top-20 z-40 glassmorphism backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-4 md:py-6 shadow-sm" id="sticky-filter-menu">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 lg:gap-12">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className={`filter-btn text-xs sm:text-sm uppercase tracking-widest font-medium transition-all whitespace-nowrap ${activeFilter === filter
                                    ? 'active text-primary font-bold'
                                    : 'text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary'
                                    }`}
                                onClick={() => { setActiveFilter(filter); setHoveredIdx(0); }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Masonry Gallery */}
            <section className="py-16 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="masonry-grid">
                        {filteredItems.map((item, index) => {
                            const isActive = index === hoveredIdx;
                            return (
                                <div
                                    key={`${item.tag}-${index}`}
                                    className="break-inside-avoid relative overflow-hidden rounded-sm cursor-pointer shadow-lg"
                                    onMouseEnter={() => setHoveredIdx(index)}
                                    onMouseLeave={() => setHoveredIdx(0)}
                                >
                                    <img
                                        alt={item.alt}
                                        className={`w-full h-auto object-cover ${item.aspect} transform transition-transform duration-700 ${isActive ? 'scale-105' : ''} ${item.extraClass || ''}`}
                                        src={item.img}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 flex flex-col justify-end p-8 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className={`transform transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                                            <span className="inline-block px-3 py-1 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest mb-3 backdrop-blur-sm">{item.tag}</span>
                                            <h3 className="text-white font-display text-2xl mb-1">{item.title}</h3>
                                            <p className="text-white/70 text-sm mb-6 font-light">{item.desc}</p>
                                            <button className="inline-flex items-center gap-2 text-primary text-xs uppercase font-bold tracking-widest border-b border-primary hover:text-white hover:border-white transition-colors pb-1" onClick={openEnquiry}>
                                                Enquire Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 block">photo_library</span>
                            <p className="text-gray-500 dark:text-gray-400 text-lg">No photos found in this category.</p>
                        </div>
                    )}

                    <div className="mt-16 text-center">
                        <button className="inline-flex items-center gap-3 px-10 py-4 border-2 border-primary text-text-light dark:text-text-dark uppercase tracking-widest text-xs font-bold hover:bg-primary hover:text-white transition-all duration-300 group">
                            Load More Memories
                            <span className="material-symbols-outlined text-base group-hover:rotate-180 transition-transform duration-300">expand_more</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-surface-light dark:bg-surface-dark relative overflow-hidden" id="cta-section">
                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent"></div>
                <div className="absolute left-0 bottom-0 h-full w-1/3 bg-gradient-to-r from-primary/5 to-transparent"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="font-display text-4xl md:text-5xl text-text-light dark:text-text-dark font-bold mb-6 text-3xl md:text-5xl">Create Your Own Memories</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Ready to plan an unforgettable event? Our team is dedicated to bringing your vision to life in our spectacular venues.
                    </p>
                    <button className="inline-block px-10 py-4 bg-primary text-white uppercase tracking-widest text-sm font-bold shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all transform hover:-translate-y-1" onClick={openEnquiry}>
                        Enquire Now
                    </button>
                </div>
            </section>

            {/* Instagram Feed */}
            <section className="bg-background-light dark:bg-background-dark py-20 border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Social Media</span>
                            <h3 className="text-3xl font-display text-text-light dark:text-text-dark font-bold">Follow Us On Instagram</h3>
                        </div>
                        <a className="text-primary hover:text-primary-dark text-sm font-bold tracking-wider flex items-center gap-2 pb-1 border-b border-transparent hover:border-primary transition-all" href="#">
                            @TheRoyalGrand
                            <span className="material-symbols-outlined text-sm">north_east</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_d3EVzYXwQqtliBvsC_h12uyGwaA8Q5gv2inI0Sr16_UERkrRY0heOAzGPITuRDAYqCE0FQlAYFp5mUV_XIwNODTcOYYXBqRGXG899WmsMI_jhcNk84CCEQHvVwHpR_2EcbY01hXDfE360njIay14g1-79NmG2BmUQWWrV_hrjn0QUCiDnGupCY5pB352Gj6KPi-PTBnTZdAHqvAK9Il6zhhpDa7vxjMHwD-2wAl-L8mv_B7hlWTq2624tozdtLmpwn7uHGmZ7hQ', extra: '' },
                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaOlHa8LIfRe87KYWIbWWKZ5zriYe1azr3JBLQw13ytmICt0TVOEeTLlgVDoZcLzt9cANtkBV61idJA2xBfgvLlGwQiezGbEsf9Q6TM1giK-CnIiPe2PlSjiPTd6m2up0MxzW_0SJldmtks_9UEcfMokb8WpWBOnFQ8tSj1OpjQB3neXMkCS3NsJpTWmXSexq5f-SD3X3gJbSbkNsWvurvInPQlQS0XMFGDFOkVCdb_eMCuhqP_auKzliWehs7Ze9vTnqTebD_5xg', extra: '' },
                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtEe8vmRcXWmUVHNuZ8udXYvXLr0KGTPh6Sr_D7Dg3w3hKDT0h2N25YSPp3tdIauD4ik5PCR1bQKXqiL9RZWpOzUSXHC6Q9JIntvPxf-dSNfTrEiquUcQG5HsvQadH0icHzKHxP3mbAy8SLWrlj0ZtyjpjPPc4ErHWHV7ET3QA4VBgMPydaP9PNZBFEPZwA7SvIgcplWFoHaNGaF23fsa3CAkqHkU6szHmXHWrDXYY-yKIYbyBYivevyJPG_56jbthpEByg5Tw5RM', extra: 'lg:col-span-2 lg:row-span-2', scaleClass: 'group-hover:scale-105', iconSize: 'text-3xl' },
                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbnvNpO4xCXhoqNGNGfCqHUP4Y6q3ypeoRcLfDmgTn1SJqo9n8l2v76OVcGGZA6EOa6mVjHmRzKhuSflfUlnpJZl9NuTjHCb-kawlesWB3MLGHBWs9CDZ1JXAAqlWG9XNcpkWa5GyCH-Ra2ZN8NhdZxJ2YWQZJ5aQ3y15IRtxRkwuA2-CIdyhDzRDenDg89uWxADVFdKY-A41TVt4qy3-zhCa-KERQpwM4PnPrZjOyJeJ2i0y55lE_42pwT3ILhWb_ghzmpB4D8e4', extra: '' },
                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv3yItDcUo7ILdksbUTQQ-DmOhNMguVxh-qiuLiGTQo9xbibEtMm14ComNdXqv-g86t31SYUA4-QcUXbWr95iXr06_7rKLczGXXXH8VAYctTKWqkOlgI98jvybeXbHVyN__3fvHz-yDYwH_JGoF64mVxFvcAGyOBMvYII4zJ4LOg3FI5VlWB9SMZRLw2Tp36Ua0SlbKcEiUxr1dt_X8UZ1WVG2AhpjAM2xxWpfK9SNp0k4yEuiI6acEZ_Cib1cMdOeJweBXGnf1BU', extra: '' },
                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApZo9uTv9jgGbr-wlIiV25KCwSt3mKoJNHo8aGZ5T8vzaozbUV2AcYRy8W6g_40kh8IBaVIGJUJ-E6KLaGacTA1cIS_d6p7-UxYaMylbPxJzCViSDML9MtxmIdBYgIwmKlbmhFk4vD_6Jm5myxxieACozYbpI3EDOM3xrIBajFAwrlnoaB11u-tg0itm_z5CnTzHSVt2ZUuBfHX-l8OEbntc73X4U1a_yGJnmCbmj9ZwtZ34L2VNj6LdSJKjc9s2To2zquuDGj6u8', extra: '' },
                            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaOlHa8LIfRe87KYWIbWWKZ5zriYe1azr3JBLQw13ytmICt0TVOEeTLlgVDoZcLzt9cANtkBV61idJA2xBfgvLlGwQiezGbEsf9Q6TM1giK-CnIiPe2PlSjiPTd6m2up0MxzW_0SJldmtks_9UEcfMokb8WpWBOnFQ8tSj1OpjQB3neXMkCS3NsJpTWmXSexq5f-SD3X3gJbSbkNsWvurvInPQlQS0XMFGDFOkVCdb_eMCuhqP_auKzliWehs7Ze9vTnqTebD_5xg', extra: 'md:hidden lg:block' },
                        ].map((item, index) => (
                            <a
                                key={index}
                                className={`group block relative aspect-square overflow-hidden bg-gray-200 cursor-pointer ${item.extra}`}
                                href="#"
                            >
                                <img
                                    alt="Insta Post"
                                    className={`w-full h-full object-cover transition-transform duration-700 ${item.scaleClass || 'group-hover:scale-110'}`}
                                    src={item.img}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className={`material-icons text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 ${item.iconSize || ''}`}>favorite</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
