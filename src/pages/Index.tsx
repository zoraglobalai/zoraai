import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import ApproachSection from "@/components/ApproachSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import CookiePopup from "@/components/CookiePopup";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <ProductsSection />
      <IndustriesSection />
      <ApproachSection />
      <CaseStudiesSection />
      <InsightsSection />
      <ContactSection />
      <SiteFooter />
      <CookiePopup />
      <ChatWidget />
    </div>
  );
};

export default Index;
