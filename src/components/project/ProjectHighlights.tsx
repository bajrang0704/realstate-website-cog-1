import {
    CheckCircle2,
    MapPin,
    Ruler,
    Calendar,
    Award,
    TrendingUp,
} from "lucide-react";

const highlights = [
    {
        icon: CheckCircle2,
        title: "RERA Approved",
        description: "Registration No: P52100012345",
    },
    {
        icon: MapPin,
        title: "Prime Location",
        description: "15 mins from ORR, Near TSPA",
    },
    {
        icon: Ruler,
        title: "Plot Sizes",
        description: "200, 300, 400, 500 Sq. Yards",
    },
    {
        icon: Award,
        title: "Clear Titles",
        description: "100% Legal Documentation",
    },
];

const developmentStatus = [
    { phase: "Land Acquisition", status: "completed", progress: 100 },
    { phase: "RERA Approval", status: "completed", progress: 100 },
    { phase: "Infrastructure", status: "ongoing", progress: 70 },
    { phase: "Amenities", status: "ongoing", progress: 50 },
    { phase: "Handover", status: "upcoming", progress: 0 },
];

export default function ProjectHighlights() {
    return (
        <section id="overview" className="section-padding bg-white">
            <div className="container-custom">
                {/* Key Highlights */}
                <div className="mb-10 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-corporate-blue mb-8 md:mb-12 text-center">
                        Project <span className="text-gradient">Highlights</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-bg-light to-white border border-gray-200 hover:shadow-lg transition-all duration-300"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="h-10 w-10 md:h-14 md:w-14 mx-auto mb-3 md:mb-4 rounded-full bg-project-gold/10 flex items-center justify-center">
                                        <Icon className="h-5 w-5 md:h-7 md:w-7 text-project-gold" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-display font-semibold text-corporate-blue mb-1 md:mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Development Status Timeline */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-display font-bold text-corporate-blue mb-8 text-center">
                        Development Status
                    </h3>

                    <div className="space-y-6">
                        {developmentStatus.map((item, index) => (
                            <div
                                key={item.phase}
                                className="relative"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`h-3 w-3 rounded-full ${item.status === "completed"
                                                ? "bg-green-500"
                                                : item.status === "ongoing"
                                                    ? "bg-project-gold animate-pulse"
                                                    : "bg-gray-300"
                                                }`}
                                        />
                                        <span className="font-semibold text-corporate-blue">
                                            {item.phase}
                                        </span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-600">
                                        {item.progress}%
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="ml-6 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full transition-all duration-1000 ${item.status === "completed"
                                            ? "bg-green-500"
                                            : item.status === "ongoing"
                                                ? "bg-project-gold"
                                                : "bg-gray-300"
                                            }`}
                                        style={{ width: `${item.progress}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-bg-light rounded-xl border border-gray-200">
                        <p className="text-sm text-gray-600 mb-2">
                            <strong className="text-corporate-blue">
                                Expected Completion:
                            </strong>{" "}
                            Q4 2025
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong className="text-corporate-blue">Possession:</strong> Q1
                            2026
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
