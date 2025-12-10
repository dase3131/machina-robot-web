import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExhibitorSection } from "@/components/ExhibitorSection";
import { ThemesSection } from "@/components/ThemesSection";
import { QuoteSection } from "@/components/QuoteSection";
import { HackathonSection } from "@/components/HackathonSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExhibitorSection />
      <ThemesSection />
      <QuoteSection />
      <HackathonSection />
      <SpeakersSection />
      <FooterSection />
    </main>
  );
};

export default Index;
