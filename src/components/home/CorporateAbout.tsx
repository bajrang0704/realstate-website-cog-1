import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Building2, Award } from "lucide-react";

const stats = [
    { icon: Building2, value: "10+", label: "Years of Excellence" },
    { icon: Users, value: "500+", label: "Happy Families" },
    { icon: Award, value: "15+", label: "Awards Won" },
];

export default function CorporateAbout() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/company.jpg"
                                alt="Deccan Veda Realty Office"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -bottom-6 right-0 md:-bottom-8 md:-right-8 bg-white rounded-xl shadow-2xl p-2 md:p-6 max-w-[130px] md:max-w-xs">
                            <p className="text-[9px] md:text-sm text-gray-600 mb-0.5 md:mb-2">Trusted by</p>
                            <p className="text-lg md:text-4xl font-display font-bold text-project-gold">
                                500+
                            </p>
                            <p className="text-[9px] md:text-sm text-corporate-blue font-semibold">
                                Satisfied Customers
                            </p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-corporate-blue mb-6">
                                Who <span className="text-gradient">We Are</span>
                            </h2>
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    <strong className="text-corporate-blue">
                                        Deccan Veda Realty
                                    </strong>{" "}
                                    is a trusted name in premium plotted developments across
                                    Hyderabad. With over a decade of experience, we specialize in
                                    creating value-driven properties in strategic locations.
                                </p>
                                <p>
                                    Our commitment to transparency, RERA compliance, and customer
                                    satisfaction has made us the preferred choice for discerning
                                    investors and homeowners.
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-gray-200">
                            {stats.map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={stat.label} className="text-center">
                                        <Icon className="h-8 w-8 mx-auto mb-3 text-project-gold" />
                                        <p className="text-3xl font-display font-bold text-corporate-blue mb-1">
                                            {stat.value}
                                        </p>
                                        <p className="text-xs text-gray-600 leading-tight">
                                            {stat.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-project-gold font-semibold text-lg hover:gap-3 transition-all group"
                        >
                            <span>Learn More About Us</span>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
