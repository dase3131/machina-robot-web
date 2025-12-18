import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CompanyBanner } from "@/components/CompanyBanner";
import { AboutSection } from "@/components/AboutSection";
import { ThemesSection } from "@/components/ThemesSection";
import { QuoteSection } from "@/components/QuoteSection";
import { WhyAttendSection } from "@/components/WhyAttendSection";
import { HallOfFameSection } from "@/components/HallOfFameSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <CompanyBanner />
      <AboutSection />
      <ThemesSection />
      <QuoteSection />
      <WhyAttendSection />
      <HallOfFameSection />
      <ContactFormSection />
      <FooterSection />
    </main>
  );
};

export default Index;