import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import DiningSection from "@/components/DiningSection";
import LuxurySection from "@/components/LuxurySection";
import EventsSection from "@/components/EventsSection";
import CTASection from "@/components/CTASection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ExperiencesSection />
      <DiningSection />
      <LuxurySection />
      <EventsSection />
      <CTASection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
