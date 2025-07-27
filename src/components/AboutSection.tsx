import { Card } from "@/components/ui/card";
import { Coffee, Award, Heart, Leaf, Crown, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Coffee,
      title: "جودة استثنائية",
      description: "نختار أجود أنواع القهوة من أفضل المزارع العالمية"
    },
    {
      icon: Award,
      title: "خبرة عريقة",
      description: "سنوات من الخبرة في تحميص وإعداد القهوة العربية الأصيلة"
    },
    {
      icon: Heart,
      title: "شغف بالتميز",
      description: "نصنع كل كوب بحب وعناية لنقدم لك أفضل تجربة قهوة"
    },
    {
      icon: Leaf,
      title: "طبيعي ومستدام",
      description: "ملتزمون بالممارسات المستدامة والحفاظ على البيئة"
    },
    {
      icon: Crown,
      title: "تراث أصيل",
      description: "نحافظ على تقاليد القهوة العربية العريقة مع لمسة عصرية"
    },
    {
      icon: Globe,
      title: "وصول عالمي",
      description: "نوصل لك أفضل أنواع القهوة من جميع أنحاء العالم"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-arabic text-4xl md:text-5xl font-bold text-foreground mb-4">
            قصة الهرم
          </h2>
          <p className="font-arabic text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            منذ تأسيسنا، ونحن نسعى لتقديم أفضل أنواع القهوة العربية الأصيلة، محمصة بعناية فائقة 
            ومعدة بخبرة عريقة لنمنحك تجربة قهوة لا تُنسى تجمع بين عبق التراث وطعم الحداثة
          </p>
        </div>

        {/* Brand Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-arabic text-3xl font-bold text-foreground">
              رحلة من التراث إلى التميز
            </h3>
            <p className="font-arabic text-lg text-muted-foreground leading-relaxed">
              بدأت قصة "الهرم" من حب عميق للقهوة العربية الأصيلة وإيمان راسخ بأهمية الحفاظ على التراث. 
              نحن لا نبيع القهوة فحسب، بل نقدم تجربة ثقافية غنية تحمل في طياتها عبق التاريخ وطعم الأصالة.
            </p>
            <p className="font-arabic text-lg text-muted-foreground leading-relaxed">
              كل حبة قهوة نختارها بعناية فائقة، وكل عملية تحميص تتم وفقاً لأعلى معايير الجودة، 
              لنضمن لك كوباً مثالياً في كل مرة تتذوق فيها قهوة الهرم.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-warm rounded-lg p-8 text-center">
              <div className="bg-coffee-white rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="الهرم" 
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h4 className="font-arabic text-2xl font-bold text-coffee-white mb-2">
                رؤيتنا
              </h4>
              <p className="font-arabic text-coffee-white/90">
                أن نكون الخيار الأول لعشاق القهوة العربية الأصيلة في جميع أنحاء العالم
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center group hover:shadow-warm transition-smooth">
              <div className="bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-smooth">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-arabic text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h4>
              <p className="font-arabic text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-12 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-primary-foreground">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="font-arabic text-lg">سنة خبرة</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="font-arabic text-lg">نوع مختلف</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-4xl font-bold mb-2">10000+</div>
              <div className="font-arabic text-lg">عميل سعيد</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="font-arabic text-lg">دولة نوصل إليها</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;