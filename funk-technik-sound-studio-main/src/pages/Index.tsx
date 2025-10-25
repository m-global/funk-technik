import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import GermanEngineering from "@/components/GermanEngineering";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCategories />
      <GermanEngineering />
      <Footer />
    </div>
  );
};

export default Index;
