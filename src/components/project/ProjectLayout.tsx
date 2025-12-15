"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MainNavbar from "@/components/layout/MainNavbar";
import MainFooter from "@/components/layout/MainFooter";

const subNavItems = [
    { name: "Overview", href: "#overview" },
    { name: "Amenities", href: "#amenities" },
    { name: "Master Plan", href: "#masterplan" },
    { name: "Location", href: "#location" },
    { name: "Pricing", href: "#pricing" },
    { name: "Gallery", href: "#gallery" },
];

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activeSection, setActiveSection] = useState("overview");
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Make sub-nav sticky after scrolling past hero
            setIsSticky(window.scrollY > 600);

            // Update active section based on scroll position
            const sections = subNavItems.map((item) =>
                item.href.replace("#", "")
            );
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.replace("#", ""));
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <MainNavbar />

            {/* Project Sub-Navigation - Only visible when scrolled past hero */}
            {isSticky && (
                <nav
                    className="fixed left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-md transition-all duration-300"
                    style={{ top: "96px" }}
                >
                    <div className="container-custom">
                        <div className="flex items-center justify-between py-4 overflow-x-auto">
                            <div className="flex items-center gap-1">
                                {subNavItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className={cn(
                                            "px-4 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap",
                                            activeSection === item.href.replace("#", "")
                                                ? "bg-project-gold text-white"
                                                : "text-gray-600 hover:bg-gray-100"
                                        )}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                            <Link
                                href="#pricing"
                                className="hidden md:block btn-primary text-sm px-6 py-2"
                            >
                                Get Pricing
                            </Link>
                        </div>
                    </div>
                </nav>
            )}

            <main className={cn(isSticky && "mt-[156px]")}>{children}</main>

            <MainFooter />
        </>
    );
}
