import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { CleaningChecklistSection } from "@/components/sections/CleaningChecklistSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-warm-ivory focus:px-4 focus:py-2 focus:text-near-black"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <CleaningChecklistSection />
        <ProcessSection />
        <ServiceAreasSection />
        <GallerySection />
        <ReviewsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
