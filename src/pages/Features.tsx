import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEnquiry } from '../context/EnquiryContext';

const Features: React.FC = () => {
    const { openEnquiry } = useEnquiry();
    const navigate = useNavigate();
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const [hoveredIdx, setHoveredIdx] = useState<number>(0);

    const rooms = [
        {
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApZo9uTv9jgGbr-wlIiV25KCwSt3mKoJNHo8aGZ5T8vzaozbUV2AcYRy8W6g_40kh8IBaVIGJUJ-E6KLaGacTA1cIS_d6p7-UxYaMylbPxJzCViSDML9MtxmIdBYgIwmKlbmhFk4vD_6Jm5myxxieACozYbpI3EDOM3xrIBajFAwrlnoaB11u-tg0itm_z5CnTzHSVt2ZUuBfHX-l8OEbntc73X4U1a_yGJnmCbmj9ZwtZ34L2VNj6LdSJKjc9s2To2zquuDGj6u8',
            alt: 'Luxury Suite',
            title: 'Presidential Bridal Suite',
            desc: 'Spacious changing room with oversized mirrors, lounge area, and private restroom.',
            icon: 'checkroom',
        },
        {
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_d3EVzYXwQqtliBvsC_h12uyGwaA8Q5gv2inI0Sr16_UERkrRY0heOAzGPITuRDAYqCE0FQlAYFp5mUV_XIwNODTcOYYXBqRGXG899WmsMI_jhcNk84CCEQHvVwHpR_2EcbY01hXDfE360njIay14g1-79NmG2BmUQWWrV_hrjn0QUCiDnGupCY5pB352Gj6KPi-PTBnTZdAHqvAK9Il6zhhpDa7vxjMHwD-2wAl-L8mv_B7hlWTq2624tozdtLmpwn7uHGmZ7hQ',
            alt: 'Guest Rooms',
            title: 'Luxury Guest Rooms',
            desc: '20 fully furnished air-conditioned rooms for the comfortable stay of your close relatives.',
            icon: 'bedroom_parent',
        },
        {
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaOlHa8LIfRe87KYWIbWWKZ5zriYe1azr3JBLQw13ytmICt0TVOEeTLlgVDoZcLzt9cANtkBV61idJA2xBfgvLlGwQiezGbEsf9Q6TM1giK-CnIiPe2PlSjiPTd6m2up0MxzW_0SJldmtks_9UEcfMokb8WpWBOnFQ8tSj1OpjQB3neXMkCS3NsJpTWmXSexq5f-SD3X3gJbSbkNsWvurvInPQlQS0XMFGDFOkVCdb_eMCuhqP_auKzliWehs7Ze9vTnqTebD_5xg',
            alt: 'VIP Lounge',
            title: 'VIP Waiting Lounge',
            desc: 'A quiet, luxurious space for special guests to relax away from the main event bustle.',
            icon: 'weekend',
        },
        {
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtEe8vmRcXWmUVHNuZ8udXYvXLr0KGTPh6Sr_D7Dg3w3hKDT0h2N25YSPp3tdIauD4ik5PCR1bQKXqiL9RZWpOzUSXHC6Q9JIntvPxf-dSNfTrEiquUcQG5HsvQadH0icHzKHxP3mbAy8SLWrlj0ZtyjpjPPc4ErHWHV7ET3QA4VBgMPydaP9PNZBFEPZwA7SvIgcplWFoHaNGaF23fsa3CAkqHkU6szHmXHWrDXYY-yKIYbyBYivevyJPG_56jbthpEByg5Tw5RM',
            alt: 'Dining Hall',
            title: 'Grand Dining Hall',
            desc: 'Elegant banquet dining area with seating for 350 guests and fine-dining ambiance.',
            icon: 'restaurant',
        },
        {
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbnvNpO4xCXhoqNGNGfCqHUP4Y6q3ypeoRcLfDmgTn1SJqo9n8l2v76OVcGGZA6EOa6mVjHmRzKhuSflfUlnpJZl9NuTjHCb-kawlesWB3MLGHBWs9CDZ1JXAAqlWG9XNcpkWa5GyCH-Ra2ZN8NhdZxJ2YWQZJ5aQ3y15IRtxRkwuA2-CIdyhDzRDenDg89uWxADVFdKY-A41TVt4qy3-zhCa-KERQpwM4PnPrZjOyJeJ2i0y55lE_42pwT3ILhWb_ghzmpB4D8e4',
            alt: 'Conference Room',
            title: 'Executive Board Room',
            desc: 'Professional conference room with video conferencing, projector, and high-speed WiFi.',
            icon: 'meeting_room',
        },
        {
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv3yItDcUo7ILdksbUTQQ-DmOhNMguVxh-qiuLiGTQo9xbibEtMm14ComNdXqv-g86t31SYUA4-QcUXbWr95iXr06_7rKLczGXXXH8VAYctTKWqkOlgI98jvybeXbHVyN__3fvHz-yDYwH_JGoF64mVxFvcAGyOBMvYII4zJ4LOg3FI5VlWB9SMZRLw2Tp36Ua0SlbKcEiUxr1dt_X8UZ1WVG2AhpjAM2xxWpfK9SNp0k4yEuiI6acEZ_Cib1cMdOeJweBXGnf1BU',
            alt: 'Outdoor Terrace',
            title: 'Rooftop Terrace',
            desc: 'Open-air terrace for pre-wedding cocktails with panoramic city skyline views.',
            icon: 'deck',
        },
        {
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_d3EVzYXwQqtliBvsC_h12uyGwaA8Q5gv2inI0Sr16_UERkrRY0heOAzGPITuRDAYqCE0FQlAYFp5mUV_XIwNODTcOYYXBqRGXG899WmsMI_jhcNk84CCEQHvVwHpR_2EcbY01hXDfE360njIay14g1-79NmG2BmUQWWrV_hrjn0QUCiDnGupCY5pB352Gj6KPi-PTBnTZdAHqvAK9Il6zhhpDa7vxjMHwD-2wAl-L8mv_B7hlWTq2624tozdtLmpwn7uHGmZ7hQ',
            alt: 'Kids Play Area',
            title: 'Children\'s Play Zone',
            desc: 'Supervised play area to keep young guests entertained during the celebrations.',
            icon: 'toys',
        },
    ];

    const scrollCarousel = (dir: 'left' | 'right'): void => {
        if (!carouselRef.current) return;
        const cardWidth = carouselRef.current.querySelector('div')?.offsetWidth ?? 400;
        const gap = 32;
        const scrollAmount = cardWidth + gap;
        carouselRef.current.scrollBy({ left: dir === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    };

    const handleCarouselScroll = (): void => {
        if (!carouselRef.current) return;
        const { scrollLeft } = carouselRef.current;
        const cardWidth = (carouselRef.current.querySelector('div')?.offsetWidth ?? 400) + 32;
        setActiveIdx(Math.round(scrollLeft / cardWidth));
    };

    const scrollToCard = (idx: number): void => {
        if (!carouselRef.current) return;
        const cardWidth = (carouselRef.current.querySelector('div')?.offsetWidth ?? 400) + 32;
        carouselRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
    };

    const goToTour = (): void => {
        navigate('/');
        setTimeout(() => {
            const el = document.getElementById('tour');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    return (
        <>
            {/* Hero */}
            <header className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Blurred luxury interior background"
                        className="w-full h-full object-cover blur-sm scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_d3EVzYXwQqtliBvsC_h12uyGwaA8Q5gv2inI0Sr16_UERkrRY0heOAzGPITuRDAYqCE0FQlAYFp5mUV_XIwNODTcOYYXBqRGXG899WmsMI_jhcNk84CCEQHvVwHpR_2EcbY01hXDfE360njIay14g1-79NmG2BmUQWWrV_hrjn0QUCiDnGupCY5pB352Gj6KPi-PTBnTZdAHqvAK9Il6zhhpDa7vxjMHwD-2wAl-L8mv_B7hlWTq2624tozdtLmpwn7uHGmZ7hQ"
                    />
                    <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        World-Class <span className="text-primary italic font-normal">Amenities</span>
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                    <p className="text-gray-200 text-lg sm:text-xl font-light max-w-2xl mx-auto tracking-wide">
                        Every detail curated for perfection. Explore the features that make The Royal Grand the city's premier destination.
                    </p>
                </div>
            </header>

            {/* Banquet Excellence */}
            <section className="py-24 bg-surface-light dark:bg-surface-dark relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Capacity &amp; Technology</span>
                        <h2 className="font-display text-4xl text-text-light dark:text-text-dark font-bold mt-2">Banquet Excellence</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Grand Ballroom */}
                        <div className="group relative bg-background-light dark:bg-background-dark overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    alt="Grand Ballroom"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaOlHa8LIfRe87KYWIbWWKZ5zriYe1azr3JBLQw13ytmICt0TVOEeTLlgVDoZcLzt9cANtkBV61idJA2xBfgvLlGwQiezGbEsf9Q6TM1giK-CnIiPe2PlSjiPTd6m2up0MxzW_0SJldmtks_9UEcfMokb8WpWBOnFQ8tSj1OpjQB3neXMkCS3NsJpTWmXSexq5f-SD3X3gJbSbkNsWvurvInPQlQS0XMFGDFOkVCdb_eMCuhqP_auKzliWehs7Ze9vTnqTebD_5xg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="font-display text-2xl font-bold">The Grand Ballroom</h3>
                                    <p className="text-primary text-sm uppercase tracking-widest mt-1">Capacity: 1500 Pax</p>
                                </div>
                            </div>
                            <div className="p-8 border-b-4 border-transparent group-hover:border-primary transition-colors">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    A pillar-less architectural marvel designed for grand receptions and weddings. Features acoustic-treated walls and crystal chandeliers.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="material-symbols-outlined text-primary">speaker_group</span>
                                        <span>Bose Professional Audio System</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="material-symbols-outlined text-primary">live_tv</span>
                                        <span>4K LED Video Walls (P2.5 Pixel Pitch)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="material-symbols-outlined text-primary">tungsten</span>
                                        <span>Intelligent Mood Lighting</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sapphire Hall */}
                        <div className="group relative bg-background-light dark:bg-background-dark overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    alt="Mini Hall"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtEe8vmRcXWmUVHNuZ8udXYvXLr0KGTPh6Sr_D7Dg3w3hKDT0h2N25YSPp3tdIauD4ik5PCR1bQKXqiL9RZWpOzUSXHC6Q9JIntvPxf-dSNfTrEiquUcQG5HsvQadH0icHzKHxP3mbAy8SLWrlj0ZtyjpjPPc4ErHWHV7ET3QA4VBgMPydaP9PNZBFEPZwA7SvIgcplWFoHaNGaF23fsa3CAkqHkU6szHmXHWrDXYY-yKIYbyBYivevyJPG_56jbthpEByg5Tw5RM"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="font-display text-2xl font-bold">The Sapphire Hall</h3>
                                    <p className="text-primary text-sm uppercase tracking-widest mt-1">Capacity: 350 Pax</p>
                                </div>
                            </div>
                            <div className="p-8 border-b-4 border-transparent group-hover:border-primary transition-colors">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Perfect for engagement ceremonies, corporate meets, and intimate gatherings. Elegant interiors with flexible seating arrangements.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="material-symbols-outlined text-primary">podium</span>
                                        <span>Built-in Stage &amp; Podium</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="material-symbols-outlined text-primary">wifi</span>
                                        <span>High-Speed Dedicated WiFi</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="material-symbols-outlined text-primary">videocam</span>
                                        <span>Video Conferencing Ready</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gourmet Catering */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <img alt="Gourmet Plating" className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbnvNpO4xCXhoqNGNGfCqHUP4Y6q3ypeoRcLfDmgTn1SJqo9n8l2v76OVcGGZA6EOa6mVjHmRzKhuSflfUlnpJZl9NuTjHCb-kawlesWB3MLGHBWs9CDZ1JXAAqlWG9XNcpkWa5GyCH-Ra2ZN8NhdZxJ2YWQZJ5aQ3y15IRtxRkwuA2-CIdyhDzRDenDg89uWxADVFdKY-A41TVt4qy3-zhCa-KERQpwM4PnPrZjOyJeJ2i0y55lE_42pwT3ILhWb_ghzmpB4D8e4" />
                                    <img alt="Banquet Setup" className="rounded-lg shadow-lg w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv3yItDcUo7ILdksbUTQQ-DmOhNMguVxh-qiuLiGTQo9xbibEtMm14ComNdXqv-g86t31SYUA4-QcUXbWr95iXr06_7rKLczGXXXH8VAYctTKWqkOlgI98jvybeXbHVyN__3fvHz-yDYwH_JGoF64mVxFvcAGyOBMvYII4zJ4LOg3FI5VlWB9SMZRLw2Tp36Ua0SlbKcEiUxr1dt_X8UZ1WVG2AhpjAM2xxWpfK9SNp0k4yEuiI6acEZ_Cib1cMdOeJweBXGnf1BU" />
                                </div>
                                <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                                <div className="absolute -z-10 bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Gourmet Catering</span>
                            <h2 className="font-display text-4xl text-text-light dark:text-text-dark font-bold mb-6">A Culinary Symphony</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Our in-house culinary experts craft menus that delight the senses. From traditional South Indian feasts served on banana leaves to global multi-cuisine buffets, we ensure the food is as memorable as the occasion itself.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: 'soup_kitchen', title: 'Live Kitchens', desc: 'Interactive food counters' },
                                    { icon: 'eco', title: 'Pure Vegetarian', desc: 'Dedicated kitchen options' },
                                    { icon: 'workspace_premium', title: 'Premium Cutlery', desc: 'Gold & Silver plated service' },
                                    { icon: 'bakery_dining', title: 'Custom Bakery', desc: 'Wedding cakes & desserts' },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-surface-light dark:bg-surface-dark shadow-md flex items-center justify-center flex-shrink-0 text-primary">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guest Comfort */}
            <section className="py-24 bg-surface-light dark:bg-surface-dark overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs">Accommodation</span>
                            <h2 className="font-display text-4xl text-text-light dark:text-text-dark font-bold mt-2">Guest Comfort</h2>
                        </div>
                        <div className="flex items-center gap-4 mt-6 md:mt-0">
                            <span className="text-sm text-gray-400 font-medium">{activeIdx + 1} / {rooms.length}</span>
                            <button
                                className="w-12 h-12 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 active:scale-90"
                                onClick={() => scrollCarousel('left')}
                            >
                                <span className="material-icons">arrow_back</span>
                            </button>
                            <button
                                className="w-12 h-12 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 active:scale-90"
                                onClick={() => scrollCarousel('right')}
                            >
                                <span className="material-icons">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div
                        ref={carouselRef}
                        className="flex gap-4 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar px-[calc((100vw-300px)/2)] sm:px-0"
                        onScroll={handleCarouselScroll}
                    >
                        {rooms.map((room, index) => {
                            const isActive = index === hoveredIdx;
                            return (
                                <div
                                    key={room.title}
                                    className="w-[85vw] min-w-[85vw] sm:w-auto sm:min-w-[300px] md:min-w-[400px] snap-center md:snap-start group"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onMouseEnter={() => setHoveredIdx(index)}
                                    onMouseLeave={() => setHoveredIdx(0)}
                                >
                                    <div className={`relative h-[400px] rounded-xl overflow-hidden mb-6 shadow-lg transition-shadow duration-500 ${isActive ? 'shadow-2xl' : ''}`}>
                                        <img alt={room.alt} className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-110' : ''}`} src={room.img} />
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-80' : 'opacity-60'}`}></div>
                                        {/* Icon badge */}
                                        <div className={`absolute top-4 right-4 w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-500 ${isActive ? 'scale-100' : 'scale-0'}`}>
                                            <span className="material-symbols-outlined text-white text-lg">{room.icon}</span>
                                        </div>
                                        {/* Hover CTA */}
                                        <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                            <button className="inline-flex items-center gap-2 text-white text-sm uppercase tracking-widest border-b border-white/50 pb-1 hover:border-primary hover:text-primary transition-colors" onClick={openEnquiry}>
                                                Book Now <span className="material-icons text-sm">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className={`font-display text-2xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-primary' : ''}`}>{room.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{room.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                    {/* Dot indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {rooms.map((_, i) => (
                            <button
                                key={i}
                                className={`rounded-full transition-all duration-300 ${i === activeIdx
                                    ? 'w-8 h-2 bg-primary'
                                    : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                                    }`}
                                onClick={() => scrollToCard(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Logistics & Safety */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Convenience</span>
                        <h2 className="font-display text-4xl text-text-light dark:text-text-dark font-bold mt-2">Logistics &amp; Safety</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'local_parking',
                                title: 'Valet Parking',
                                desc: 'Hassle-free parking experience for all your guests.',
                                items: ['100+ Covered Spots', 'Valet Drivers Available', 'EV Charging Points'],
                            },
                            {
                                icon: 'security',
                                title: '24/7 Security',
                                desc: 'Complete peace of mind for you and your guests.',
                                items: ['CCTV Surveillance', 'Trained Security Personnel', 'Fire Safety Compliant'],
                            },
                            {
                                icon: 'compass_calibration',
                                title: 'Vasthu Compliance',
                                desc: 'Designed to bring prosperity and positive energy.',
                                items: ['100% Vasthu Compliant', 'East Facing Entrance', 'Positive Energy Flow'],
                            },
                        ].map((card) => (
                            <div key={card.title} className="bg-surface-light dark:bg-surface-dark p-8 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors duration-300 group">
                                <div className="w-16 h-16 bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                                </div>
                                <h3 className="font-display text-xl font-bold mb-3">{card.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{card.desc}</p>
                                <ul className="text-sm text-gray-500 space-y-2">
                                    {card.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <span className="material-icons text-primary text-xs">check_circle</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800" id="contact">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-display text-5xl text-text-light dark:text-text-dark font-bold mb-8">Experience it Yourself</h2>
                    <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                        Words can only describe so much. We invite you to take a virtual tour of our premises or visit us in person to truly appreciate the grandeur of The Royal Grand.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-10 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-sm font-bold shadow-lg" onClick={goToTour}>
                            Virtual Tour
                        </button>
                        <button className="px-10 py-4 bg-primary text-white hover:bg-primary-dark transition-all uppercase tracking-widest text-sm font-bold shadow-lg shadow-primary/30" onClick={openEnquiry}>
                            Enquire Now
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
