import { Shield, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality First",
    description: "Every component tested to exceed industry standards",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge technology meets timeless design",
  },
  {
    icon: Heart,
    title: "Crafted with Passion",
    description: "Designed by audio enthusiasts, for audio enthusiasts",
  },
];

const GermanEngineering = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-secondary/20 border-2 border-secondary rounded-full">
            <span className="text-secondary font-bold text-sm tracking-wider">
              🇩🇪 GERMAN ENGINEERING
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Precision. Performance. <span className="text-gradient">Perfection.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            FunkTechnik stands apart from mass-market alternatives with meticulous German engineering and premium materials.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6 group-hover:scale-110 transition-transform duration-300 glow-primary">
                  <Icon className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statement */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto">
            "We don't just make speakers. We create <span className="text-gradient">experiences</span> that connect people through the universal language of sound."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default GermanEngineering;
