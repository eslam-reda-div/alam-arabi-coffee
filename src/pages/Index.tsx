import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

interface Config {
  contact: {
    whatsappNumber: string;
    orderMessageTemplate: string;
  };
}

const Index = () => {
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    // Load config data
    fetch('/config.json')
      .then(response => response.json())
      .then(data => setConfig(data))
      .catch(error => console.error('Error loading config:', error));
  }, []);

  const handleContactClick = () => {
    if (!config) return;
    
    const message = "مرحباً، أريد الاستفسار عن منتجاتكم";
    const whatsappUrl = `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShopClick = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onContactClick={handleContactClick} />
      <Hero onShopClick={handleShopClick} />
      <ProductsSection />
      <AboutSection />
      <Footer onContactClick={handleContactClick} />
    </div>
  );
};

export default Index;
