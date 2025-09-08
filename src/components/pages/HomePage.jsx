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
<div className="min-h-screen bg-gradient-to-br from-deep-space via-void-black to-cyber-dark relative">
      {/* Global Futuristic Effects */}
      <div className="fixed inset-0 cyber-grid opacity-10 pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-gradient-radial from-electric-blue/5 via-transparent to-neon-purple/5 animate-pulse pointer-events-none z-0"></div>
      
      <Header />
      <main className="relative z-10">
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