import { Coffee, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onContactClick: () => void;
}

const Footer = ({ onContactClick }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-van-dyke text-coffee-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="الهرم" 
                className="w-12 h-12 object-contain filter brightness-0 invert"
              />
              <div>
                <h3 className="font-arabic text-2xl font-bold">الهرم</h3>
                <p className="font-arabic text-sm text-coffee-white/80">طعم أصيل... تراث عريق</p>
              </div>
            </div>
            <p className="font-arabic text-coffee-white/70 leading-relaxed">
              اكتشف مجموعة قهوة الهرم الفاخرة المحمصة بعناية فائقة من أجود أنواع القهوة العربية الأصيلة
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-arabic text-lg font-bold">روابط سريعة</h4>
            <nav className="space-y-2">
              <a href="#home" className="block font-arabic text-coffee-white/80 hover:text-coffee-white transition-smooth">
                الرئيسية
              </a>
              <a href="#products" className="block font-arabic text-coffee-white/80 hover:text-coffee-white transition-smooth">
                المنتجات
              </a>
              <a href="#about" className="block font-arabic text-coffee-white/80 hover:text-coffee-white transition-smooth">
                من نحن
              </a>
            </nav>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="font-arabic text-lg font-bold">فئات المنتجات</h4>
            <nav className="space-y-2">
              <a href="#products" className="block font-arabic text-coffee-white/80 hover:text-coffee-white transition-smooth">
                قهوة مطحونة
              </a>
              <a href="#products" className="block font-arabic text-coffee-white/80 hover:text-coffee-white transition-smooth">
                قهوة عضوية
              </a>
              <a href="#products" className="block font-arabic text-coffee-white/80 hover:text-coffee-white transition-smooth">
                حبوب كاملة
              </a>
              <a href="#products" className="block font-arabic text-coffee-white/80 hover:text-coffee-white transition-smooth">
                مجموعة مميزة
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-arabic text-lg font-bold">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="font-arabic text-coffee-white/80">واتساب: +966501234567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-arabic text-coffee-white/80">info@al-haram.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-arabic text-coffee-white/80">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
            
            <Button 
              onClick={onContactClick}
              className="bg-gradient-warm hover:opacity-90 text-secondary-foreground font-arabic mt-4"
            >
              <MessageCircle className="w-4 h-4 ml-2" />
              اطلب الآن
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-coffee-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-coffee-white/60">
              <Coffee className="w-5 h-5" />
              <span className="font-arabic">
                © {currentYear} الهرم. جميع الحقوق محفوظة.
              </span>
            </div>
            
            <div className="flex gap-6 text-coffee-white/60 text-sm">
              <a href="#" className="font-arabic hover:text-coffee-white transition-smooth">
                سياسة الخصوصية
              </a>
              <a href="#" className="font-arabic hover:text-coffee-white transition-smooth">
                الشروط والأحكام
              </a>
              <a href="#" className="font-arabic hover:text-coffee-white transition-smooth">
                سياسة الإرجاع
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;