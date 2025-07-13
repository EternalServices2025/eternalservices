import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle } from "lucide-react";
import eternLogo from "@/assets/eternal-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={eternLogo} 
            alt="Eternal Services Logo" 
            className="h-8 w-8 animate-pulse-slow"
          />
          <span className="text-xl font-bold text-gradient">Eternal Services</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-smooth">
            Services
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-smooth">
            About
          </a>
          <a href="#community" className="text-foreground hover:text-primary transition-smooth">
            Community
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button 
            variant="discord" 
            size="sm"
            className="hidden sm:flex"
            onClick={() => window.open('https://discord.gg/ebTTtnKb4N', '_blank')}
          >
            <MessageCircle className="h-4 w-4" />
            Support
          </Button>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => window.open('https://discord.gg/ebTTtnKb4N', '_blank')}
          >
            Join Discord
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;