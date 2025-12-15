"use client";

import { useState } from "react";
import { Phone, Mail, User, ArrowRight } from "lucide-react";

export default function LeadCapture() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({ name: "", phone: "", email: "" });
        alert("Thank you! We'll contact you shortly.");
    };

    return (
        <section className="section-padding bg-gradient-to-br from-project-gold-dark via-project-gold to-project-gold-light relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content Side */}
                        <div className="text-white">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                                Ready to Make Your{" "}
                                <span className="text-corporate-blue">Dream Investment?</span>
                            </h2>
                            <p className="text-lg text-white/90 leading-relaxed mb-8">
                                Get in touch with our expert team for a personalized
                                consultation. We'll help you find the perfect plot that matches
                                your vision and budget.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/70">Call us at</p>
                                        <a
                                            href="tel:+919876543210"
                                            className="font-semibold hover:text-corporate-blue transition-colors"
                                        >
                                            +91 98765 43210
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/70">Email us at</p>
                                        <a
                                            href="mailto:info@deccanveda.com"
                                            className="font-semibold hover:text-corporate-blue transition-colors"
                                        >
                                            info@deccanveda.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
                            <h3 className="text-2xl font-display font-bold text-corporate-blue mb-6">
                                Request a Callback
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-project-gold focus:border-transparent outline-none transition-all"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Phone Number *
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-project-gold focus:border-transparent outline-none transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Email (Optional)
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-project-gold focus:border-transparent outline-none transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
                                >
                                    Submit Request
                                    <ArrowRight className="h-5 w-5" />
                                </button>

                                <p className="text-xs text-gray-500 text-center mt-4">
                                    We respect your privacy. Your information is secure with us.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
