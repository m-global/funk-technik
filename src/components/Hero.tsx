import { Button } from "@/components/ui/button";
import heroSpeaker from "@/assets/hero-speaker.jpg";
import logo from "@/assets/logo.jpeg";
import { Volume2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroSpeaker})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={logo} 
            alt="FunkTechnik Logo" 
            className="mx-auto w-64 md:w-80 lg:w-96 drop-shadow-2xl"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Sound That <span className="text-gradient">Moves You</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Premium audio engineering from Germany
        </p>
        
        <p className="text-lg md:text-xl text-secondary font-bold mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Designed & Engineered in Germany 🇩🇪
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" variant="default" className="group">
            <Volume2 className="mr-2 group-hover:animate-pulse" />
            Explore Products
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
