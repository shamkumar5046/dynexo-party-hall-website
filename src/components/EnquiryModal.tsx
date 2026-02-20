import { useState } from 'react';

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await fetch(
                'https://script.google.com/macros/s/AKfycbx3dZyAFyuMxbUUAt6jKO-Idn7nLFaWGBRfy8RMcMzRhiLIT8jxU5AezRHod34pr8J6JQ/exec',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                    mode: 'no-cors',
                }
            );

            // no-cors returns opaque response, so we treat it as success
            // If you switch to cors mode and your script returns JSON, use:
            // const data = await response.json();
            // if (data.result !== 'success') throw new Error('Submission failed');

            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => {
                setSubmitted(false);
                onClose();
            }, 2500);
        } catch {
            setError('Something went wrong. Please try again or call us directly.');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-lg bg-surface-light dark:bg-surface-dark rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
                {/* Gold accent top bar */}
                <div className="h-1.5 bg-gradient-to-r from-primary-dark via-primary to-primary-dark"></div>

                {/* Close button */}
                <button
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all z-10"
                    onClick={onClose}
                >
                    <span className="material-icons text-xl">close</span>
                </button>

                <div className="p-8 sm:p-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                            <span className="font-display font-bold text-lg text-primary">RG</span>
                        </div>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark">
                            Enquire <span className="text-primary italic font-normal">Now</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                            Let us help you plan your perfect event
                        </p>
                    </div>

                    {submitted ? (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-icons text-primary text-3xl">check_circle</span>
                            </div>
                            <h3 className="font-display text-xl font-bold text-text-light dark:text-text-dark mb-2">Thank You!</h3>
                            <p className="text-gray-500 text-sm">Our team will get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2" htmlFor="enquiry-name">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">person</span>
                                    <input
                                        className="w-full pl-10 pr-4 py-3 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded text-sm text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                                        id="enquiry-name"
                                        name="name"
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                        type="text"
                                        value={formData.name}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2" htmlFor="enquiry-email">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">email</span>
                                    <input
                                        className="w-full pl-10 pr-4 py-3 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded text-sm text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                                        id="enquiry-email"
                                        name="email"
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                        type="email"
                                        value={formData.email}
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2" htmlFor="enquiry-phone">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">call</span>
                                    <input
                                        className="w-full pl-10 pr-4 py-3 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded text-sm text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                                        id="enquiry-phone"
                                        name="phone"
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        required
                                        type="tel"
                                        value={formData.phone}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2" htmlFor="enquiry-message">
                                    Message
                                </label>
                                <div className="relative">
                                    <span className="material-icons absolute left-3 top-3 text-gray-400 text-lg">chat</span>
                                    <textarea
                                        className="w-full pl-10 pr-4 py-3 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded text-sm text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                                        id="enquiry-message"
                                        name="message"
                                        onChange={handleChange}
                                        placeholder="Tell us about your event..."
                                        required
                                        rows={4}
                                        value={formData.message}
                                    ></textarea>
                                </div>
                            </div>

                            {/* Error message */}
                            {error && (
                                <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded text-red-600 dark:text-red-400 text-sm">
                                    <span className="material-icons text-base">error_outline</span>
                                    {error}
                                </div>
                            )}

                            {/* Submit */}
                            <button
                                className="w-full py-3.5 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 rounded disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : 'Submit Enquiry'}
                            </button>

                            <p className="text-center text-gray-400 text-xs mt-2">
                                We typically respond within 24 hours
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnquiryModal;
