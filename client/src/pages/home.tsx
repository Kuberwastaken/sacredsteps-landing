import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import DemoSection from "@/components/demo-section";
import WaitlistSection from "@/components/waitlist-section";
import FAQSection from "@/components/faq-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <DemoSection />
      <WaitlistSection />
      <FAQSection />

      {/* Simple Footer */}
      <footer className="bg-sacred-light border-t border-sacred-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-sacred-accent rounded-lg flex items-center justify-center">
                <span className="text-sacred-primary font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-semibold sacred-primary">Sacred Steps</span>
            </div>
            <p className="text-sm sacred-secondary">
              © 2024 Sacred Steps. Made with respect for all spiritual traditions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
