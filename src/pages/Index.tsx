import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CompanyBanner } from "@/components/CompanyBanner";
import { AboutSection } from "@/components/AboutSection";
import { SpeakersCarousel } from "@/components/SpeakersCarousel";
import { ThemesSection } from "@/components/ThemesSection";
import { CxoSummitSection } from "@/components/CxoSummitSection";
import { TicketsSection } from "@/components/TicketsSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <CompanyBanner />
      <AboutSection />
      <SpeakersCarousel />
      <ThemesSection />
      <CxoSummitSection />
      <TicketsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
