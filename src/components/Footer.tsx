import { MessageSquare, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import eternLogo from "@/assets/eternal-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <img 
              src={eternLogo} 
              alt="Eternal Services Logo" 
              className="h-8 w-8 animate-pulse-slow"
            />
            <span className="text-2xl font-bold text-gradient">Eternal Services</span>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your trusted source for premium accounts and digital services. 
            Secure, fast, and reliable - serving thousands of customers worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="discord"
              onClick={() => window.open('https://discord.gg/ebTTtnKb4N', '_blank')}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Support Discord
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
            <Button 
              variant="hero"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse Services
            </Button>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-400 animate-pulse" /> by Eternal Services
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © 2024 Eternal Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;