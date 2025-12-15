import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
} from "lucide-react";

const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
];

const projects = [
    { name: "Heritage County", href: "/projects/heritage-county" },
    { name: "Upcoming Projects", href: "/projects#upcoming" },
];

const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
];

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
];

export default function MainFooter() {
    return (
        <footer className="bg-corporate-blue text-white">
            <div className="container-custom">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-display font-bold">Deccan Veda</h3>
                            <p className="text-project-gold text-sm font-semibold tracking-widest mt-1">
                                REALITY
                            </p>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Building legacies through premium plotted developments. Trust,
                            transparency, and excellence in every project.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-project-gold mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-gray-300">
                                    123 Business District, Road No. 36,
                                    <br />
                                    Jubilee Hills, Hyderabad - 500033
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-project-gold flex-shrink-0" />
                                <a
                                    href="tel:+919876543210"
                                    className="text-sm text-gray-300 hover:text-project-gold transition-colors"
                                >
                                    +91 98765 43210
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-project-gold flex-shrink-0" />
                                <a
                                    href="mailto:info@deccanveda.com"
                                    className="text-sm text-gray-300 hover:text-project-gold transition-colors"
                                >
                                    info@deccanveda.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-display font-semibold mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-project-gold transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Projects */}
                    <div>
                        <h4 className="text-lg font-display font-semibold mb-6">
                            Our Projects
                        </h4>
                        <ul className="space-y-3">
                            {projects.map((project) => (
                                <li key={project.name}>
                                    <Link
                                        href={project.href}
                                        className="text-gray-300 hover:text-project-gold transition-colors text-sm"
                                    >
                                        {project.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-display font-semibold mb-6">Legal</h4>
                        <ul className="space-y-3">
                            {legal.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-300 hover:text-project-gold transition-colors text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-10 w-10 rounded-full bg-white/10 hover:bg-project-gold flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        aria-label={social.name}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Copyright */}
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Deccan Veda Realty. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
