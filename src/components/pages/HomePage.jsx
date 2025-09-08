import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import ComparisonSection from "@/components/organisms/ComparisonSection";
import ProcessSection from "@/components/organisms/ProcessSection";
import IndustriesSection from "@/components/organisms/IndustriesSection";
import ProductsSection from "@/components/organisms/ProductsSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import CTASection from "@/components/organisms/CTASection";
import Footer from "@/components/organisms/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ComparisonSection />
        <ProcessSection />
        <IndustriesSection />
        <ProductsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;