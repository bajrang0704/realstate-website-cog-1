"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
    {
        id: 1,
        title: "Legacy",
        subtitle: "Building Tomorrow's Landmarks",
        description:
            "Premium plotted developments that stand the test of time with clear titles and world-class amenities.",
        cta: "Explore Projects",
        theme: "from-corporate-blue/90 to-corporate-blue-light/80",
    },
    {
        id: 2,
        title: "Trust",
        subtitle: "Transparent. Reliable. Proven.",
        description:
            "Years of excellence in real estate with a commitment to RERA compliance and customer satisfaction.",
        cta: "Why Choose Us",
        theme: "from-project-gold-dark/90 to-project-gold/80",
    },
    {
        id: 3,
        title: "Growth",
        subtitle: "Invest in Prime Locations",
        description:
            "Strategic locations with high appreciation potential. Your investment, our commitment.",
        cta: "View Locations",
        theme: "from-corporate-blue-light/90 to-project-gold-dark/80",
    },
];

export default function MainHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                {/* This would be replaced with user's images */}
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
            </div>

            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000",
                        currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                >
                    {/* Gradient Overlay */}
                    <div
                        className={cn(
                            "absolute inset-0 bg-gradient-to-r",
                            slide.theme
                        )}
                    />

                    {/* Content */}
                    <div className="relative h-full flex items-center">
                        <div className="container-custom">
                            <div className="max-w-3xl space-y-6 animate-slide-up">
                                <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90">
                                    {slide.subtitle}
                                </p>
                                <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                                    {slide.description}
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="btn-outline group">
                                        {slide.cta}
                                        <ChevronRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </button>
                                    <button className="px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                                        Download Brochure
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            currentSlide === index
                                ? "w-12 bg-project-gold"
                                : "w-2 bg-white/50 hover:bg-white/80"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-2 text-white/60 animate-bounce">
                <span className="text-xs uppercase tracking-widest rotate-90 origin-center mb-8">
                    Scroll
                </span>
                <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
            </div>
        </section>
    );
}
