import { Button } from "@/components/ui/button";
import { Shield, Zap, Headphones, TrendingUp } from "lucide-react";
import eternLogo from "@/assets/eternal-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 rounded-full bg-primary/20 blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-32 h-32 rounded-full bg-accent/20 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <img 
            src={eternLogo} 
            alt="Eternal Services" 
            className="h-24 w-24 mx-auto mb-6 animate-bounce-slow"
          />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-fade-in">
            Eternal Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Premium accounts and services at unbeatable prices. Discord, Microsoft, Roblox, TikTok and more.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center space-x-2 text-sm">
            <Shield className="h-5 w-5 text-green-400" />
            <span>100% Secure</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span>Instant Delivery</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Headphones className="h-5 w-5 text-blue-400" />
            <span>24/7 Support</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Browse Services
            <TrendingUp className="h-5 w-5" />
          </Button>
          <Button 
            variant="service" 
            size="xl"
            onClick={() => window.open('https://discord.gg/ebTTtnKb4N', '_blank')}
          >
            Join Our Discord
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Accounts Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;