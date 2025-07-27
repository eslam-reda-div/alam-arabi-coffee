import { Coffee, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onContactClick: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="الهرم" 
              className="w-12 h-12 object-contain"
            />
            <div className="text-right">
              <h1 className="font-arabic text-2xl font-bold text-foreground">
                الهرم
              </h1>
              <p className="font-arabic text-sm text-muted-foreground">
                طعم أصيل... تراث عريق
              </p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              className="font-arabic text-foreground hover:text-primary transition-smooth"
            >
              الرئيسية
            </a>
            <a 
              href="#products" 
              className="font-arabic text-foreground hover:text-primary transition-smooth"
            >
              المنتجات
            </a>
            <a 
              href="#about" 
              className="font-arabic text-foreground hover:text-primary transition-smooth"
            >
              من نحن
            </a>
          </nav>
          
          {/* Contact Button */}
          <Button 
            onClick={onContactClick}
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-arabic shadow-warm transition-smooth"
          >
            <MessageCircle className="w-4 h-4 ml-2" />
            تواصل معنا
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;