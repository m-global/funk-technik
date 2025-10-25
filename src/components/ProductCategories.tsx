import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ampProduct from "@/assets/amp-product.jpg";
import headphonesProduct from "@/assets/headphones-product.jpg";
import earbudsProduct from "@/assets/earbuds-product.jpg";
import heroSpeaker from "@/assets/hero-speaker.jpg";
import { Speaker, Radio, Headphones, Ear } from "lucide-react";

const categories = [
  {
    title: "Party Speakers",
    description: "Massive sound for unforgettable moments",
    image: heroSpeaker,
    icon: Speaker,
    color: "primary",
  },
  {
    title: "Amplifiers",
    description: "Vintage meets modern engineering",
    image: ampProduct,
    icon: Radio,
    color: "secondary",
  },
  {
    title: "Headphones",
    description: "Immersive audio, stunning design",
    image: headphonesProduct,
    icon: Headphones,
    color: "accent",
  },
  {
    title: "Earbuds",
    description: "Premium sound, ultimate portability",
    image: earbudsProduct,
    icon: Ear,
    color: "primary",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Our <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every product crafted with precision, designed to elevate your audio experience
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="group relative overflow-hidden border-2 border-border hover:border-primary transition-all duration-500 bg-card hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-${category.color} flex items-center justify-center glow-${category.color}`}>
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary"
                  >
                    Explore →
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
