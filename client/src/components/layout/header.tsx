import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--desert-gold)] to-[var(--frankincense)] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">Ω</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">Discover Oman</h1>
              <p className="text-sm text-gray-600">Arabia's Hidden Jewel</p>
            </div>
          </div>
          
          <button className="glass-morphism p-3 rounded-xl hover:bg-white/20 transition-all duration-300">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
