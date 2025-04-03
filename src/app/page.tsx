import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import DocumentationArea from "@/components/DocumentationArea";
import DownloadSection from "@/components/DownloadSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesShowcase />
      <DocumentationArea />
      <DownloadSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <CookieConsent />
      <ScrollToTopButton />
    </main>
  );
}
