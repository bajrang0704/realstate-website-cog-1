"use client";

import Link from "next/link";
import { ArrowRight, MapPin, TrendingUp } from "lucide-react";

const projects = [
    {
        id: 1,
        name: "Heritage County",
        location: "Shadnagar, Hyderabad",
        status: "Ongoing",
        plotSizes: "200-500 sq. yards",
        startingPrice: "₹35 Lakhs",
        highlights: ["RERA Approved", "Clear Titles", "Premium Amenities"],
        theme: "bg-gradient-to-br from-project-gold/10 to-project-gold-light/5",
        href: "/projects/heritage-county",
    },
    {
        id: 2,
        name: "Upcoming Project",
        location: "Coming Soon",
        status: "Pre-Launch",
        plotSizes: "TBA",
        startingPrice: "Register Interest",
        highlights: ["Prime Location", "Strategic Investment", "High ROI"],
        theme: "bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/5",
        href: "#",
    },
];

export default function FeaturedProjects() {
    return (
        <section className="section-padding bg-bg-light">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-corporate-blue mb-6">
                        Our <span className="text-gradient">Premium</span> Projects
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Carefully curated developments in prime locations, designed for
                        discerning investors and homeowners who value quality.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${project.theme} p-8 border border-gray-200 card-hover`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Status Badge */}
                            <div className="absolute top-6 right-6">
                                <span
                                    className={`px-4 py-1.5 rounded-full text-xs font-semibold ${project.status === "Ongoing"
                                            ? "bg-green-500 text-white"
                                            : "bg-project-gold text-white"
                                        }`}
                                >
                                    {project.status}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-corporate-blue mb-3 group-hover:text-project-gold transition-colors">
                                        {project.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <MapPin className="h-4 w-4 text-project-gold" />
                                        <span className="text-sm">{project.location}</span>
                                    </div>
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-200">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                                            Plot Sizes
                                        </p>
                                        <p className="text-sm font-semibold text-corporate-blue">
                                            {project.plotSizes}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                                            Starting From
                                        </p>
                                        <p className="text-sm font-semibold text-project-gold">
                                            {project.startingPrice}
                                        </p>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2">
                                    {project.highlights.map((highlight) => (
                                        <span
                                            key={highlight}
                                            className="px-3 py-1 bg-white rounded-full text-xs font-medium text-corporate-blue border border-gray-200"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <Link
                                    href={project.href}
                                    className="inline-flex items-center gap-2 text-project-gold font-semibold hover:gap-3 transition-all group/link"
                                >
                                    <span>View Details</span>
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-project-gold/5 blur-3xl group-hover:bg-project-gold/10 transition-colors" />
                        </div>
                    ))}
                </div>

                {/* View All Projects CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-corporate-blue text-white font-semibold rounded-lg hover:bg-corporate-blue-light transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        View All Projects
                        <TrendingUp className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
