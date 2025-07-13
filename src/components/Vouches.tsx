import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MessageSquare, 
  Star, 
  Quote,
  Send,
  User,
  MessageCircle,
  ThumbsUp,
  Trash2,
  Plus
} from "lucide-react";

interface Vouch {
  id: number;
  username: string;
  message: string;
  rating: number;
  service: string;
  date: string;
}

const Vouches = () => {
  const [newVouch, setNewVouch] = useState({
    username: "",
    message: "",
    service: "Microsoft Account"
  });

  // Example vouches - now with state management for adding/deleting
  const [vouches, setVouches] = useState<Vouch[]>([
    {
      id: 1,
      username: "retrixzz",
      message: "+rep for Eternal Services, Wmicrosoft account.",
      rating: 5,
      service: "Microsoft Account",
      date: "2024-01-15"
    },
    {
      id: 2,
      username: "s_y_n_a_x",
      message: "+rep, fast account got 2.",
      rating: 5,
      service: "Roblox Account",
      date: "2024-01-14"
    },
    {
      id: 3,
      username: "qmarlin",
      message: "+rep Eternal Services, fast delivery",
      rating: 5,
      service: "TikTok Account",
      date: "2024-01-13"
    },
    {
      id: 4,
      username: "BundleBuyer",
      message: "Premium bundle is worth every invite! Got multiple accounts at an amazing price. Eternal Services is the best!",
      rating: 5,
      service: "Premium Bundle",
      date: "2024-01-12"
    },
    {
      id: 5,
      username: "DiscordUser123",
      message: "Joined their Discord and the community is amazing. Staff is always helpful and vouches for their legitimacy!",
      rating: 5,
      service: "Support",
      date: "2024-01-11"
    },
    {
      id: 6,
      username: "AltAccountPro",
      message: "Perfect for creating alts! Clean accounts with no issues. Fast delivery and great communication throughout.",
      rating: 5,
      service: "Microsoft Account",
      date: "2024-01-10"
    }
  ]);

  const handleSubmitVouch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVouch.username.trim() || !newVouch.message.trim()) {
      alert("Please fill in all fields");
      return;
    }
    
    const vouch: Vouch = {
      id: Date.now(),
      username: newVouch.username,
      message: newVouch.message,
      rating: 5,
      service: newVouch.service,
      date: new Date().toISOString().split('T')[0]
    };
    
    setVouches([vouch, ...vouches]);
    setNewVouch({ username: "", message: "", service: "Microsoft Account" });
  };

  const handleDeleteVouch = (id: number) => {
    setVouches(vouches.filter(vouch => vouch.id !== id));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
      />
    ));
  };

  return (
    <section id="vouches" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Customer Vouches
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our satisfied customers have to say about their experience with Eternal Services
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Vouches Display - Left Side (2/3 width) */}
          <div className="lg:col-span-2">
            <Card className="gradient-card border-primary/50 h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Customer Vouches ({vouches.length})
                </CardTitle>
                <CardDescription>
                  Real feedback from our satisfied customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {vouches.length === 0 ? (
                    <div className="text-center py-12">
                      <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No vouches yet. Be the first to leave one!</p>
                    </div>
                  ) : (
                    vouches.map((vouch, index) => (
                      <Card 
                        key={vouch.id} 
                        className="bg-background/50 border-border hover-lift transition-smooth animate-fade-in group"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 rounded-full bg-primary/20">
                                <User className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-base font-semibold">{vouch.username}</CardTitle>
                                <CardDescription className="text-xs">
                                  {new Date(vouch.date).toLocaleDateString()}
                                </CardDescription>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">
                                {vouch.service}
                              </Badge>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-400/10 opacity-0 group-hover:opacity-100 transition-smooth"
                                onClick={() => handleDeleteVouch(vouch.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {renderStars(vouch.rating)}
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="relative">
                            <Quote className="h-4 w-4 text-primary/50 absolute -top-1 -left-1" />
                            <p className="text-sm text-muted-foreground italic pl-4 leading-relaxed">
                              {vouch.message}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-border">
                            <ThumbsUp className="h-3 w-3 text-green-400" />
                            <span className="text-xs text-green-400">Verified Customer</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Add Vouch Form - Right Side (1/3 width) */}
          <div className="lg:col-span-1">
            <Card className="gradient-card border-primary/50 sticky top-24 animate-fade-in">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-xl">
                  <Plus className="h-5 w-5 text-primary" />
                  Add Your Vouch
                </CardTitle>
                <CardDescription>
                  Share your experience with our services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitVouch} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your username"
                      value={newVouch.username}
                      onChange={(e) => setNewVouch({ ...newVouch, username: e.target.value })}
                      className="gradient-card border-border focus:border-primary/50 transition-smooth"
                      required
                    />
                  </div>
                  <div>
                    <Select 
                      value={newVouch.service} 
                      onValueChange={(value) => setNewVouch({ ...newVouch, service: value })}
                    >
                      <SelectTrigger className="gradient-card border-border focus:border-primary/50 transition-smooth bg-background/90 backdrop-blur-sm">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-border z-50 backdrop-blur-sm">
                        <SelectItem value="Microsoft Account" className="hover:bg-primary/10 focus:bg-primary/10">
                          Microsoft Account
                        </SelectItem>
                        <SelectItem value="Roblox Account" className="hover:bg-primary/10 focus:bg-primary/10">
                          Roblox Account
                        </SelectItem>
                        <SelectItem value="TikTok Account" className="hover:bg-primary/10 focus:bg-primary/10">
                          TikTok Account
                        </SelectItem>
                        <SelectItem value="Premium Bundle" className="hover:bg-primary/10 focus:bg-primary/10">
                          Premium Bundle
                        </SelectItem>
                        <SelectItem value="Support" className="hover:bg-primary/10 focus:bg-primary/10">
                          Support Experience
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Share your experience with our service..."
                      value={newVouch.message}
                      onChange={(e) => setNewVouch({ ...newVouch, message: e.target.value })}
                      className="gradient-card border-border focus:border-primary/50 transition-smooth min-h-32 resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Vouch
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="p-6 rounded-xl gradient-card border border-primary/50 max-w-xl mx-auto">
            <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3 animate-bounce-slow" />
            <h3 className="text-xl font-bold mb-3">Join Our Discord</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Connect with our community for support and exclusive deals!
            </p>
            <Button 
              variant="discord" 
              onClick={() => window.open('https://discord.gg/ebTTtnKb4N', '_blank')}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Join Discord Server
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vouches;
