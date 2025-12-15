import { Shield, MapPin, Award, FileCheck, Leaf, TrendingUp } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Clear Titles",
        description:
            "100% verified legal documentation with clear, dispute-free titles for peace of mind.",
    },
    {
        icon: MapPin,
        title: "Prime Locations",
        description:
            "Strategic properties in high-growth corridors with excellent connectivity.",
    },
    {
        icon: FileCheck,
        title: "RERA Approved",
        description:
            "Fully compliant with RERA regulations ensuring transparency and accountability.",
    },
    {
        icon: Leaf,
        title: "Premium Amenities",
        description:
            "World-class infrastructure including clubhouse, parks, and modern facilities.",
    },
    {
        icon: TrendingUp,
        title: "High ROI",
        description:
            "Proven track record of property appreciation in our developed areas.",
    },
    {
        icon: Award,
        title: "Trusted Brand",
        description:
            "Award-winning developer with over a decade of excellence and integrity.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-gradient-to-br from-corporate-blue via-corporate-blue-light to-corporate-blue text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Why Choose{" "}
                        <span className="text-project-gold">Deccan Veda Reality</span>
                    </h2>
                    <p className="text-lg text-white/80 leading-relaxed">
                        We don't just sell plots; we build relationships and create
                        long-term value for our customers through integrity and excellence.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 card-hover"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Icon */}
                                <div className="h-14 w-14 rounded-lg bg-project-gold/20 flex items-center justify-center mb-6 group-hover:bg-project-gold/30 transition-colors">
                                    <Icon className="h-7 w-7 text-project-gold" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-display font-semibold mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-white/70 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Decorative Element */}
                                <div className="absolute top-0 right-0 h-24 w-24 bg-project-gold/5 rounded-full blur-2xl group-hover:bg-project-gold/10 transition-colors" />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-white/80 mb-6 text-lg">
                        Ready to invest in your future?
                    </p>
                    <button className="btn-outline text-lg px-8 py-4">
                        Schedule a Site Visit
                    </button>
                </div>
            </div>
        </section>
    );
}
