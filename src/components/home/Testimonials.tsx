"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Business Owner",
        location: "Heritage County",
        rating: 5,
        content:
            "Deccan Veda Realty exceeded all expectations. The transparency in documentation and the quality of amenities are truly outstanding. Best investment decision I've made!",
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "IT Professional",
        location: "Heritage County",
        rating: 5,
        content:
            "From site visits to documentation, the entire process was smooth and professional. The team is extremely helpful and responsive. Highly recommend!",
    },
    {
        id: 3,
        name: "Venkat Reddy",
        role: "Entrepreneur",
        location: "Heritage County",
        rating: 5,
        content:
            "Clear titles, excellent location, and premium amenities - everything they promised was delivered. This is what sets Deccan Veda apart from others.",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const current = testimonials[currentIndex];

    return (
        <section className="section-padding bg-bg-light">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-corporate-blue mb-6">
                        What Our <span className="text-gradient">Customers</span> Say
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Don't just take our word for it - hear from families who trusted us
                        with their dreams.
                    </p>
                </div>

                {/* Testimonial Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-white rounded-2xl shadow-2xl p-12 md:p-16">
                        {/* Quote Icon */}
                        <div className="absolute top-8 left-8 h-16 w-16 rounded-full bg-project-gold/10 flex items-center justify-center">
                            <Quote className="h-8 w-8 text-project-gold" />
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-6">
                            {Array.from({ length: current.rating }).map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-6 w-6 fill-project-gold text-project-gold"
                                />
                            ))}
                        </div>

                        {/* Content */}
                        <div className="text-center space-y-6">
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                                "{current.content}"
                            </p>

                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-xl font-display font-semibold text-corporate-blue">
                                    {current.name}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    {current.role} • {current.location}
                                </p>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="h-12 w-12 rounded-full bg-gray-100 hover:bg-project-gold hover:text-white flex items-center justify-center transition-all duration-300 group"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>

                            {/* Indicators */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={cn(
                                            "h-2 rounded-full transition-all duration-300",
                                            currentIndex === index
                                                ? "w-8 bg-project-gold"
                                                : "w-2 bg-gray-300 hover:bg-gray-400"
                                        )}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="h-12 w-12 rounded-full bg-gray-100 hover:bg-project-gold hover:text-white flex items-center justify-center transition-all duration-300 group"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
                    <div className="text-center">
                        <p className="text-4xl font-display font-bold text-project-gold mb-2">
                            4.9/5
                        </p>
                        <p className="text-sm text-gray-600">Average Rating</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-display font-bold text-project-gold mb-2">
                            500+
                        </p>
                        <p className="text-sm text-gray-600">Happy Customers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-display font-bold text-project-gold mb-2">
                            95%
                        </p>
                        <p className="text-sm text-gray-600">Referral Rate</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
