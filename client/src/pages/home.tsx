import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/hero/hero-section";
import InteractiveMap from "@/components/map/interactive-map";
import DestinationGrid from "@/components/destination/destination-grid";
import DestinationSidebar from "@/components/destination/destination-sidebar";
import { Destination } from "@/types/destination";

export default function Home() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDestinationSelect = (destination: Destination) => {
    setSelectedDestination(destination);
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
    setSelectedDestination(null);
  };

  return (
    <div className="min-h-screen bg-[var(--warm-gray)]">
      <Header />
      
      <HeroSection />
      
      {/* Map Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[var(--soft-white)] to-[var(--warm-gray)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Fifteen Enchanted
              <span className="font-semibold text-[var(--desert-gold)]"> Destinations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Each location whispers stories of ancient traders, hidden oases, and timeless beauty
            </p>
          </div>

          <InteractiveMap onDestinationSelect={handleDestinationSelect} />
        </div>
      </section>

      <DestinationGrid onDestinationSelect={handleDestinationSelect} />
      
      <DestinationSidebar
        destination={selectedDestination}
        isOpen={sidebarOpen}
        onClose={handleCloseSidebar}
      />
      
      <Footer />
    </div>
  );
}
