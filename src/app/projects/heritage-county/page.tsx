import type { Metadata } from "next";
import ProjectLayout from "@/components/project/ProjectLayout";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectHighlights from "@/components/project/ProjectHighlights";
import ProjectAmenities from "@/components/project/ProjectAmenities";
import PriceCalculator from "@/components/project/PriceCalculator";
import ProjectGallery from "@/components/project/ProjectGallery";

export const metadata: Metadata = {
    title: "Heritage County - Premium Plotted Development | Deccan Veda Reality",
    description:
        "Discover Heritage County - a premium plotted community in Shadnagar with world-class amenities, clear titles, and RERA approval.",
};

export default function HeritageCountyPage() {
    return (
        <ProjectLayout>
            <ProjectHero />
            <ProjectHighlights />
            <ProjectAmenities />
            <PriceCalculator />
            <ProjectGallery />
        </ProjectLayout>
    );
}
