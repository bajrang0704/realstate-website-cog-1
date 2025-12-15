import {
    Dumbbell,
    TreePine,
    Waves,
    Shield,
    Wifi,
    Zap,
    Baby,
    ShoppingBag,
    ParkingCircle,
    Users,
    Building2,
    Sparkles,
} from "lucide-react";

const amenities = [
    { icon: Building2, name: "Clubhouse", category: "Recreation" },
    { icon: Waves, name: "Swimming Pool", category: "Recreation" },
    { icon: Dumbbell, name: "Gymnasium", category: "Fitness" },
    { icon: TreePine, name: "Landscaped Parks", category: "Nature" },
    { icon: Baby, name: "Kids Play Area", category: "Family" },
    { icon: Shield, name: "24/7 Security", category: "Safety" },
    { icon: Zap, name: "Power Backup", category: "Utilities" },
    { icon: Wifi, name: "High-Speed Internet", category: "Connectivity" },
    { icon: ParkingCircle, name: "Visitor Parking", category: "Convenience" },
    { icon: Users, name: "Community Hall", category: "Social" },
    { icon: ShoppingBag, name: "Retail Shops", category: "Convenience" },
    { icon: Sparkles, name: "Amphitheater", category: "Entertainment" },
];

export default function ProjectAmenities() {
    return (
        <section id="amenities" className="section-padding bg-bg-light">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-corporate-blue mb-4 md:mb-6">
                        World-Class <span className="text-gradient">Amenities</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Experience luxury living with premium amenities designed for your
                        comfort and convenience.
                    </p>
                </div>

                {/* Amenities Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                    {amenities.map((amenity, index) => {
                        const Icon = amenity.icon;
                        return (
                            <div
                                key={amenity.name}
                                className="group bg-white rounded-xl p-3 md:p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 card-hover"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-3 md:mb-4 rounded-full bg-project-gold/10 group-hover:bg-project-gold/20 flex items-center justify-center transition-colors">
                                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-project-gold" />
                                </div>
                                <h3 className="font-semibold text-sm md:text-base text-corporate-blue mb-1">
                                    {amenity.name}
                                </h3>
                                <span className="text-[10px] md:text-xs text-gray-500">{amenity.category}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Feature Callout */}
                <div className="mt-16 bg-gradient-to-br from-project-gold to-project-gold-light rounded-2xl p-12 text-center text-white">
                    <h3 className="text-3xl font-display font-bold mb-4">
                        And Much More...
                    </h3>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Explore our comprehensive amenities designed to elevate your
                        lifestyle. Book a site visit to experience them firsthand.
                    </p>
                    <button className="mt-6 px-8 py-3 bg-white text-project-gold font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                        Schedule Site Visit
                    </button>
                </div>
            </div>
        </section>
    );
}
