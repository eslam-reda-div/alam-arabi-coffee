import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: string;
  shortDescription: string;
  images: string[];
  category: string;
  featured: boolean;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <Card 
      className="product-card cursor-pointer overflow-hidden group bg-card border-border hover:border-primary/20"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
        />
        {product.featured && (
          <Badge className="absolute top-3 right-3 bg-gradient-primary text-primary-foreground border-0">
            مميز
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>
      
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-arabic text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-primary">
            {product.price}
          </span>
        </div>
        
        <p className="font-arabic text-muted-foreground line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>
        
        <div className="flex justify-between items-center pt-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          
          <div className="text-sm text-primary font-medium hover:text-primary/80 transition-smooth">
            عرض التفاصيل ←
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;