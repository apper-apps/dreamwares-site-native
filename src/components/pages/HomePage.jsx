import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import MetricsSection from "@/components/organisms/MetricsSection";
import ComparisonSection from "@/components/organisms/ComparisonSection";
import ProcessSection from "@/components/organisms/ProcessSection";
import IndustriesSection from "@/components/organisms/IndustriesSection";
import ProductsSection from "@/components/organisms/ProductsSection";
import BlogSection from "@/components/organisms/BlogSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import CTASection from "@/components/organisms/CTASection";
import Footer from "@/components/organisms/Footer";
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
<main>
        <HeroSection />
        <MetricsSection />
        <ComparisonSection />
        <ProcessSection />
        <IndustriesSection />
        <ProductsSection />
        <BlogSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;