import { Heart } from "lucide-react";
import logo from "@/assets/siliconbadi-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="SiliconBadi Logo" className="h-10 w-10" />
            <span className="font-poppins font-bold text-xl text-foreground">SiliconBadi</span>
          </div>
          
          <p className="text-center text-muted-foreground max-w-md">
            Empowering Innovation through Software Excellence
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>in Eindhoven, Netherlands</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SiliconBadi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
