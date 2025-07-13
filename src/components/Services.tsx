import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  Shield, 
  Gamepad2, 
  Video, 
  MessageSquare, 
  Star,
  Zap,
  Gift
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Microsoft Account",
      description: "Premium Microsoft account with Office 365 access",
      price: "5 Invites",
      icon: Shield,
      features: ["Can use as alt or backup", "Fast response", "Office 365 included"],
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Roblox Account",
      description: "Premium Roblox account with exclusive items",
      price: "3 Invites", 
      icon: Gamepad2,
      features: ["Normal account, can use for alts", "Ready to use", "Secure delivery"],
      popular: false,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "TikTok Account",
      description: "Verified TikTok account with premium features",
      price: "5 Invites",
      icon: Video,
      features: ["TikTok account for alts", "Clean history", "Instant access"],
      popular: false,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Premium Bundle",
      description: "Get all services at a massive discount",
      price: "10 Invites",
      icon: Gift,
      features: ["Better accounts", "More services", "Cheaper deals"],
      popular: true,
      color: "from-orange-500 to-red-500"
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    window.open('https://discord.gg/ebTTtnKb4N', '_blank');
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our premium selection of accounts and services. All delivered instantly with 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className={`relative gradient-card border-border hover-lift hover-glow transition-smooth animate-fade-in group ${
                  service.popular ? 'ring-2 ring-primary/50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <div className={`mx-auto p-4 rounded-full bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-smooth`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-gradient">
                      {service.price}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="hero"
                    className="w-full"
                    onClick={() => handleServiceClick(service.title)}
                  >
                    Get Service
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-sm text-muted-foreground mb-4">
            All services come with a 30-day guarantee and 24/7 support
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Crown className="h-4 w-4 text-purple-400" />
              <span>Verified Accounts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;