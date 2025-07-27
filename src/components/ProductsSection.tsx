import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { Badge } from "@/components/ui/badge";
import { Coffee, Sparkles } from "lucide-react";

interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: string;
  description: string;
  shortDescription: string;
  images: string[];
  category: string;
  origin: string;
  roastLevel: string;
  weight: string;
  featured: boolean;
}

interface Config {
  contact: {
    whatsappNumber: string;
    orderMessageTemplate: string;
  };
}

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [config, setConfig] = useState<Config | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    // Load products data
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error loading products:', error));

    // Load config data
    fetch('/config.json')
      .then(response => response.json())
      .then(data => setConfig(data))
      .catch(error => console.error('Error loading config:', error));
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleOrder = (product: Product) => {
    if (!config) return;
    
    const message = config.contact.orderMessageTemplate.replace('{productName}', product.name);
    const whatsappUrl = `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const categories = ["all", "قهوة مطحونة", "قهوة عضوية", "حبوب كاملة"];
  
  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(product => product.category === filter);

  const featuredProducts = products.filter(product => product.featured);

  return (
    <section id="products" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Coffee className="w-8 h-8 text-primary" />
            <h2 className="font-arabic text-4xl md:text-5xl font-bold text-foreground">
              مجموعة منتجاتنا
            </h2>
            <Coffee className="w-8 h-8 text-primary" />
          </div>
          <p className="font-arabic text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            اختر من بين مجموعة واسعة من أفضل أنواع القهوة العربية الأصيلة المحمصة بعناية فائقة
          </p>
        </div>

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <div className="mb-16">
            <div className="flex justify-center items-center gap-2 mb-8">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="font-arabic text-2xl font-bold text-foreground">
                المنتجات المميزة
              </h3>
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={filter === category ? "default" : "secondary"}
              className={`cursor-pointer px-6 py-2 text-base font-arabic transition-smooth ${
                filter === category 
                  ? 'bg-gradient-primary text-primary-foreground shadow-warm' 
                  : 'hover:bg-primary/10 hover:text-primary'
              }`}
              onClick={() => setFilter(category)}
            >
              {category === "all" ? "جميع المنتجات" : category}
            </Badge>
          ))}
        </div>

        {/* All Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Coffee className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="font-arabic text-xl text-muted-foreground">
              لا توجد منتجات في هذه الفئة حالياً
            </p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOrder={handleOrder}
      />
    </section>
  );
};

export default ProductsSection;