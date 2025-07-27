import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Package, MapPin, Coffee } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: string;
  description: string;
  images: string[];
  category: string;
  origin: string;
  roastLevel: string;
  weight: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOrder: (product: Product) => void;
}

const ProductModal = ({ product, isOpen, onClose, onOrder }: ProductModalProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return null;

  const handleOrder = () => {
    onOrder(product);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-right">
          <DialogTitle className="font-arabic text-2xl font-bold text-foreground">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-80 object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded border-2 overflow-hidden transition-smooth ${
                      selectedImage === index 
                        ? 'border-primary' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-primary">
                {product.price}
              </span>
              <Badge className="bg-gradient-warm text-secondary-foreground">
                {product.category}
              </Badge>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h4 className="font-arabic text-lg font-semibold text-foreground">
                وصف المنتج
              </h4>
              <p className="font-arabic text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <Separator />
            
            {/* Product Specifications */}
            <div className="space-y-3">
              <h4 className="font-arabic text-lg font-semibold text-foreground">
                تفاصيل المنتج
              </h4>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div className="text-right">
                    <span className="font-arabic text-sm text-muted-foreground">المنشأ:</span>
                    <span className="font-arabic font-medium text-foreground mr-2">
                      {product.origin}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Coffee className="w-5 h-5 text-primary" />
                  <div className="text-right">
                    <span className="font-arabic text-sm text-muted-foreground">درجة التحميص:</span>
                    <span className="font-arabic font-medium text-foreground mr-2">
                      {product.roastLevel}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Package className="w-5 h-5 text-primary" />
                  <div className="text-right">
                    <span className="font-arabic text-sm text-muted-foreground">الوزن:</span>
                    <span className="font-arabic font-medium text-foreground mr-2">
                      {product.weight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            {/* Order Button */}
            <Button 
              onClick={handleOrder}
              className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-arabic text-lg py-6 shadow-warm transition-smooth"
            >
              <MessageCircle className="w-5 h-5 ml-2" />
              اطلب عبر الواتساب
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;