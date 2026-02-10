import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import ApproachSection from "@/components/ApproachSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import HomeSolutionsDeep from "@/components/HomeSolutionsDeep";
import HomeProductsDeep from "@/components/HomeProductsDeep";
import HomeIndustriesDeep from "@/components/HomeIndustriesDeep";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <SolutionsSection />
      <HomeSolutionsDeep />
      <ProductsSection />
      <HomeProductsDeep />
      <IndustriesSection />
      <HomeIndustriesDeep />
      <ApproachSection />
      <CaseStudiesSection />
      <InsightsSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
