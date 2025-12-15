import MainNavbar from "@/components/layout/MainNavbar";
import MainFooter from "@/components/layout/MainFooter";
import MainHero from "@/components/home/MainHero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CorporateAbout from "@/components/home/CorporateAbout";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import LeadCapture from "@/components/home/LeadCapture";

export default function HomePage() {
    return (
        <>
            <MainNavbar />
            <main>
                <MainHero />
                <FeaturedProjects />
                <CorporateAbout />
                <WhyChooseUs />
                <Testimonials />
                <LeadCapture />
            </main>
            <MainFooter />
        </>
    );
}
