"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export default function MainNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            )}
        >
            <nav className="container-custom flex items-center justify-between py-4 lg:py-6">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="flex flex-col">
                        <span
                            className={cn(
                                "text-2xl font-display font-bold tracking-tight transition-colors",
                                scrolled ? "text-corporate-blue" : "text-white"
                            )}
                        >
                            Deccan Veda
                        </span>
                        <span
                            className={cn(
                                "text-xs font-medium tracking-widest uppercase transition-colors",
                                scrolled ? "text-project-gold" : "text-project-gold-light"
                            )}
                        >
                            Reality
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-semibold transition-colors duration-200 hover:text-project-gold",
                                scrolled ? "text-corporate-blue" : "text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:flex lg:items-center lg:gap-x-4">
                    <a
                        href="tel:+919876543210"
                        className={cn(
                            "flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300",
                            scrolled
                                ? "bg-project-gold text-white hover:bg-project-gold-dark shadow-md hover:shadow-lg"
                                : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-corporate-blue"
                        )}
                    >
                        <Phone className="h-4 w-4" />
                        Book Site Visit
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    className="lg:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="sr-only">Toggle menu</span>
                    {mobileMenuOpen ? (
                        <X
                            className={cn(
                                "h-6 w-6",
                                scrolled ? "text-corporate-blue" : "text-white"
                            )}
                        />
                    ) : (
                        <Menu
                            className={cn(
                                "h-6 w-6",
                                scrolled ? "text-corporate-blue" : "text-white"
                            )}
                        />
                    )}
                </button>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-2xl">
                    <div className="space-y-1 px-4 pb-6 pt-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-base font-semibold text-corporate-blue hover:bg-bg-light rounded-lg transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+919876543210"
                            className="flex items-center justify-center gap-2 px-4 py-3 mt-4 bg-project-gold text-white font-semibold rounded-lg hover:bg-project-gold-dark transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            Book Site Visit
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
