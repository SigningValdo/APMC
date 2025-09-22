import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { NewsSection } from "@/components/sections/news-section";
import { StatsSection } from "@/components/sections/stats-section";
import { CTASection } from "@/components/sections/cta-section";
import {
  OrganizationStructuredData,
  WebsiteStructuredData,
} from "@/components/seo/structured-data";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <OrganizationStructuredData locale="fr" />
      <WebsiteStructuredData locale="fr" />

      <Header />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <StatsSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
