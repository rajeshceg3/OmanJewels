import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToMap = () => {
    const mapSection = document.querySelector('section:nth-child(2)');
    mapSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden watercolor-texture">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
          Journey Through
          <span className="block font-semibold bg-gradient-to-r from-[var(--desert-gold)] to-[var(--frankincense)] bg-clip-text text-transparent">
            Oman's Wonders
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
          Where ancient frankincense routes meet turquoise waters, and every sunset paints the desert in gold
        </p>
        
        <button 
          onClick={scrollToMap}
          className="glass-morphism px-12 py-4 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-float"
        >
          Begin Your Journey
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
}
