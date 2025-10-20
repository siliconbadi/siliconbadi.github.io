import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 gradient-subtle z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">From Telugu Roots to Global Tech</span>
          </div>

          <h1 className="font-poppins font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Empowering Innovation
            </span>
            <br />
            <span className="text-foreground">through Software Excellence</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We craft scalable, secure, and cutting-edge software solutions that transform businesses and drive digital success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="rounded-full text-lg px-8 shadow-hover hover:shadow-glow group"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full text-lg px-8 border-2 hover-lift"
            >
              Explore Services
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-poppins font-bold text-4xl text-primary">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-poppins font-bold text-4xl text-accent">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="font-poppins font-bold text-4xl text-primary">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
