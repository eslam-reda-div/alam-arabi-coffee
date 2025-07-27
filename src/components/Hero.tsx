import { Button } from "@/components/ui/button";
import { Coffee, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";

interface HeroProps {
  onShopClick: () => void;
}

const Hero = ({ onShopClick }: HeroProps) => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Brand Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/logo.png" 
              alt="الهرم" 
              className="w-24 h-24 object-contain filter brightness-0 invert"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="font-arabic text-6xl md:text-8xl font-bold leading-tight">
            الهرم
          </h1>
          
          {/* Tagline */}
          <p className="font-arabic text-2xl md:text-3xl text-coffee-white/90 font-light">
            طعم أصيل... تراث عريق
          </p>
          
          {/* Description */}
          <p className="font-arabic text-lg md:text-xl text-coffee-white/80 max-w-2xl mx-auto leading-relaxed">
            اكتشف مجموعة قهوة الهرم الفاخرة المحمصة بعناية فائقة من أجود أنواع القهوة العربية الأصيلة
          </p>
          
          {/* Features */}
          <div className="flex justify-center gap-8 my-12">
            <div className="flex items-center gap-2 text-coffee-white/90">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="font-arabic">جودة عالية</span>
            </div>
            <div className="flex items-center gap-2 text-coffee-white/90">
              <Coffee className="w-6 h-6 text-amber-400" />
              <span className="font-arabic">طعم أصيل</span>
            </div>
            <div className="flex items-center gap-2 text-coffee-white/90">
              <Award className="w-6 h-6 text-orange-400" />
              <span className="font-arabic">تراث عريق</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onShopClick}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-arabic text-lg px-8 py-6 shadow-warm transition-smooth"
            >
              <Coffee className="w-5 h-5 ml-2" />
              تسوق الآن
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-coffee-white text-coffee-white hover:bg-coffee-white hover:text-foreground font-arabic text-lg px-8 py-6 transition-smooth"
            >
              اكتشف المجموعة
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-coffee-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-coffee-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;