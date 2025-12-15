"use client";

import { Play } from "lucide-react";

export default function ProjectHero() {
    return (
        <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-corporate-blue">
                {/* User will replace this with their project image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 text-white">
                    <div className="text-center">
                        <p className="text-sm mb-2">Project Hero Image</p>
                        <p className="text-xs opacity-70">1920x1080 recommended</p>
                    </div>
                </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue/90 via-corporate-blue/50 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex items-end">
                <div className="container-custom pb-20 md:pb-32">
                    <div className="max-w-4xl">
                        {/* Project Logo/Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-project-gold/20 backdrop-blur-md border border-project-gold/30 rounded-full mb-6">
                            <div className="h-2 w-2 rounded-full bg-project-gold animate-pulse" />
                            <span className="text-white text-sm font-semibold">
                                Ongoing Development
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                            Heritage County
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-4">
                            Where Legacy Meets Luxury
                        </p>
                        <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                            Premium plotted development in Shadnagar with world-class
                            amenities, clear titles, and unmatched connectivity.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-white/20">
                            <div>
                                <p className="text-white/70 text-sm mb-1">Total Area</p>
                                <p className="text-white text-xl font-bold">50 Acres</p>
                            </div>
                            <div>
                                <p className="text-white/70 text-sm mb-1">Plot Sizes</p>
                                <p className="text-white text-xl font-bold">200-500 Sq.Yds</p>
                            </div>
                            <div>
                                <p className="text-white/70 text-sm mb-1">Status</p>
                                <p className="text-white text-xl font-bold">RERA Approved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Play Button (Optional) */}
            <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                aria-label="Play project video"
            >
                <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform" />
            </button>
        </section>
    );
}
