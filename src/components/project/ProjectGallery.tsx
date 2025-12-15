"use client";

import { useState } from "react";
import { Image as ImageIcon, Video, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FilterType = "all" | "images" | "videos" | "360";

const galleryItems = [
    { id: 1, type: "image", category: "Entrance", placeholder: "Main Gate" },
    { id: 2, type: "image", category: "Amenities", placeholder: "Clubhouse" },
    { id: 3, type: "image", category: "Layout", placeholder: "Master Plan" },
    { id: 4, type: "video", category: "Walkthrough", placeholder: "Site Video" },
    { id: 5, type: "image", category: "Amenities", placeholder: "Swimming Pool" },
    { id: 6, type: "image", category: "Nature", placeholder: "Landscaping" },
    { id: 7, type: "360", category: "Virtual Tour", placeholder: "360° View" },
    { id: 8, type: "image", category: "Infrastructure", placeholder: "Roads" },
];

export default function ProjectGallery() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");

    const filteredItems =
        activeFilter === "all"
            ? galleryItems
            : galleryItems.filter((item) => {
                if (activeFilter === "images") return item.type === "image";
                if (activeFilter === "videos") return item.type === "video";
                if (activeFilter === "360") return item.type === "360";
                return false;
            });

    return (
        <section id="gallery" className="section-padding bg-bg-light">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-corporate-blue mb-4 md:mb-6">
                        Project <span className="text-gradient">Gallery</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600">
                        Explore Heritage County through images and videos
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
                    <button
                        onClick={() => setActiveFilter("all")}
                        className={cn(
                            "px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300",
                            activeFilter === "all"
                                ? "bg-project-gold text-white shadow-lg"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                        )}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setActiveFilter("images")}
                        className={cn(
                            "px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 flex items-center gap-2",
                            activeFilter === "images"
                                ? "bg-project-gold text-white shadow-lg"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                        )}
                    >
                        <ImageIcon className="h-4 w-4" />
                        Images
                    </button>
                    <button
                        onClick={() => setActiveFilter("videos")}
                        className={cn(
                            "px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 flex items-center gap-2",
                            activeFilter === "videos"
                                ? "bg-project-gold text-white shadow-lg"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                        )}
                    >
                        <Video className="h-4 w-4" />
                        Videos
                    </button>
                    <button
                        onClick={() => setActiveFilter("360")}
                        className={cn(
                            "px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 flex items-center gap-2",
                            activeFilter === "360"
                                ? "bg-project-gold text-white shadow-lg"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                        )}
                    >
                        <Maximize2 className="h-4 w-4" />
                        360° View
                    </button>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 hover:shadow-2xl transition-all duration-300 cursor-pointer card-hover"
                        >
                            {/* Placeholder */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600">
                                {item.type === "image" && (
                                    <ImageIcon className="h-12 w-12 mb-3 opacity-50" />
                                )}
                                {item.type === "video" && (
                                    <Video className="h-12 w-12 mb-3 opacity-50" />
                                )}
                                {item.type === "360" && (
                                    <Maximize2 className="h-12 w-12 mb-3 opacity-50" />
                                )}
                                <p className="text-sm font-medium">{item.placeholder}</p>
                                <p className="text-xs opacity-70 mt-1">{item.category}</p>
                            </div>

                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div className="text-white">
                                    <p className="font-semibold">{item.placeholder}</p>
                                    <p className="text-xs text-white/80">{item.category}</p>
                                </div>
                            </div>

                            {/* Type Badge */}
                            <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-corporate-blue">
                                {item.type === "360" ? "360°" : item.type}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Download Brochure CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg">
                        <p className="text-lg text-gray-700">
                            Want complete project details?
                        </p>
                        <button className="btn-primary text-lg px-8 py-4">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
