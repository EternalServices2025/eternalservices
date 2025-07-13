import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Users, 
  Headphones, 
  Shield, 
  Star,
  ExternalLink,
  Crown,
  Zap
} from "lucide-react";

const Community = () => {
  return (
    <section id="community" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of satisfied customers in our Discord server
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card border-primary/50 hover-glow shadow-elegant animate-fade-in">
            <CardHeader className="text-center">
              <div className="mx-auto p-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 animate-pulse-slow">
                <MessageSquare className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
                Eternal Services Discord
                <Badge className="bg-green-500 text-white">
                  <div className="h-2 w-2 rounded-full bg-white mr-1 animate-pulse"></div>
                  Online
                </Badge>
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Official Server
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-smooth">
                    5,000+
                  </div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-smooth">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-smooth">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">Secure & Safe</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-smooth">
                    50K+
                  </div>
                  <div className="text-sm text-muted-foreground">Orders Completed</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center mb-6">What you'll get:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-smooth">
                    <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span>Instant access to all services</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-smooth">
                    <Headphones className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span>Direct support from our team</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-smooth">
                    <Crown className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span>Exclusive member-only deals</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-smooth">
                    <Users className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>Community of verified customers</span>
                  </div>
                </div>
              </div>

              {/* Join Button */}
              <div className="text-center space-y-4">
                <Button 
                  variant="discord"
                  size="xl" 
                  className="text-lg px-12 py-6 animate-bounce-slow"
                  onClick={() => window.open('https://discord.gg/ebTTtnKb4N', '_blank')}
                >
                  <MessageSquare className="h-6 w-6 mr-2" />
                  Join Discord Server
                  <ExternalLink className="h-5 w-5 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground">
                  Click to join our Discord community and get started!
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm pt-6 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Verified Server</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>5-Star Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span>Active Community</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;