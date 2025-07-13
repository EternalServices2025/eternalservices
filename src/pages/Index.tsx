import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Vouches from "@/components/Vouches";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Vouches />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
