import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/siliconbadi-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img src={logo} alt="SiliconBadi Logo" className="h-12 w-12" />
            <span className="font-poppins font-bold text-2xl text-foreground">SiliconBadi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <Button onClick={() => scrollToSection("contact")} className="rounded-full">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full rounded-full"
            >
              Get in Touch
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
