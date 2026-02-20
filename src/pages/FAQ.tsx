const FAQ: React.FC = () => {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[450px] w-full flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3M2YKijy1DHO2pcY0cyiKVQA0X2BZFaf4BanxWzfp6tl8301o9sOkFEn2fQEtnSUwJLZRLackolalHEFbldQP3Viah5dXr7_JKCb_akncLyFQpeuqUGSVVE2BI-pT-1-UfFMygYluuD_KdYKF-wyuwG3lMNoSgEYKf7EudbxmxNSJR6EdhD8EucQJqc0l7WY2UlFF7gBqVkYWZnvlSoHWQidf9J_mdWxY606vfRVarAIkyUJjwftnecxfjyyr2N-QTaIwlSlxKsI')",
                    }}
                >
                    <div className="absolute inset-0 bg-background-dark/70"></div>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="serif-font text-5xl md:text-7xl text-white mb-4">Frequently Asked Questions</h1>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-white/70 text-lg font-light leading-relaxed">
                        Everything you need to know about hosting your regal event at the city's premier destination for celebrations.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <main className="max-w-4xl mx-auto px-6 py-20">
                {/* Booking & Reservations */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="material-symbols-outlined text-primary text-3xl">calendar_month</span>
                        <h2 className="serif-font text-3xl text-primary">Booking &amp; Reservations</h2>
                    </div>
                    <div className="space-y-4">
                        <details className="group rounded-xl border border-primary/10 transition-all duration-300 bg-gray-50 open:bg-primary/5" open>
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium group-open:text-primary transition-colors">How far in advance should I book my event?</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 leading-relaxed border-t border-primary/5 pt-4 text-background-dark/70">
                                To ensure availability for your preferred date, we recommend booking at least 12 to 18 months in advance for weekend weddings, and 6 to 9 months for corporate events and weekdays.
                            </div>
                        </details>
                        <details className="group rounded-xl border border-primary/10 transition-all duration-300 bg-gray-50 open:bg-primary/5">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium group-open:text-primary transition-colors">What is required to secure a date?</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 leading-relaxed border-t border-primary/5 pt-4 text-background-dark/70">
                                To ensure availability for your preferred date, we recommend booking at least 12 to 18 months in advance for weekend weddings, and 6 to 9 months for corporate events and weekdays.
                            </div>
                        </details>
                        <details className="group rounded-xl border border-primary/10 transition-all duration-300 bg-gray-50 open:bg-primary/5">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium group-open:text-primary transition-colors">What is your cancellation policy?</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 leading-relaxed border-t border-primary/5 pt-4 text-background-dark/70">
                                To ensure availability for your preferred date, we recommend booking at least 12 to 18 months in advance for weekend weddings, and 6 to 9 months for corporate events and weekdays.
                            </div>
                        </details>
                    </div>
                </div>

                {/* Catering & Dining */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
                        <h2 className="serif-font text-3xl text-primary">Catering &amp; Dining</h2>
                    </div>
                    <div className="space-y-4">
                        <details className="group rounded-xl border border-primary/10 transition-all duration-300 bg-gray-50 open:bg-primary/5">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium group-open:text-primary transition-colors">Can we bring our own outside catering?</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 leading-relaxed border-t border-primary/5 pt-4 text-background-dark/70">
                                To ensure availability for your preferred date, we recommend booking at least 12 to 18 months in advance for weekend weddings, and 6 to 9 months for corporate events and weekdays.
                            </div>
                        </details>
                        <details className="group rounded-xl border border-primary/10 transition-all duration-300 bg-gray-50 open:bg-primary/5">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium group-open:text-primary transition-colors">Do you accommodate dietary restrictions?</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 leading-relaxed border-t border-primary/5 pt-4 text-background-dark/70">
                                To ensure availability for your preferred date, we recommend booking at least 12 to 18 months in advance for weekend weddings, and 6 to 9 months for corporate events and weekdays.
                            </div>
                        </details>
                    </div>
                </div>

                {/* Venue Facilities */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="material-symbols-outlined text-primary text-3xl">domain</span>
                        <h2 className="serif-font text-3xl text-primary">Venue Facilities</h2>
                    </div>
                    <div className="space-y-4">
                        <details className="group rounded-xl border border-primary/10 transition-all duration-300 bg-gray-50 open:bg-primary/5">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium group-open:text-primary transition-colors">Is parking available for guests?</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 leading-relaxed border-t border-primary/5 pt-4 text-background-dark/70">
                                To ensure availability for your preferred date, we recommend booking at least 12 to 18 months in advance for weekend weddings, and 6 to 9 months for corporate events and weekdays.
                            </div>
                        </details>
                        <details className="group rounded-xl border border-primary/10 transition-all duration-300 bg-gray-50 open:bg-primary/5">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium group-open:text-primary transition-colors">Do you provide bridal suites?</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 leading-relaxed border-t border-primary/5 pt-4 text-background-dark/70">
                                To ensure availability for your preferred date, we recommend booking at least 12 to 18 months in advance for weekend weddings, and 6 to 9 months for corporate events and weekdays.
                            </div>
                        </details>
                        <details className="group rounded-xl border border-primary/10 transition-all duration-300 bg-gray-50 open:bg-primary/5">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium group-open:text-primary transition-colors">What audio-visual equipment is included?</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 leading-relaxed border-t border-primary/5 pt-4 text-background-dark/70">
                                To ensure availability for your preferred date, we recommend booking at least 12 to 18 months in advance for weekend weddings, and 6 to 9 months for corporate events and weekdays.
                            </div>
                        </details>
                    </div>
                </div>
            </main>

            {/* CTA */}
            <section className="border-y border-primary/10 py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="serif-font text-4xl mb-6">Still have questions?</h2>
                    <p className="text-white/70 text-lg mb-10 leading-relaxed">
                        Our concierge is here to assist you in planning your perfect event. Download our full venue brochure or reach out directly for a personalized consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="w-full sm:w-auto bg-primary text-background-dark px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                            Contact Concierge
                        </button>
                        <button className="w-full sm:w-auto border border-primary text-primary px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
