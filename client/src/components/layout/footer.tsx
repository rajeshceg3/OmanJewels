export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--desert-gold)] to-[var(--frankincense)] rounded-3xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Ω</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Discover Oman</h3>
                <p className="text-gray-400">Arabia's Hidden Jewel</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Where every journey becomes a story, and every story becomes a memory that colors the soul like watercolor on silk.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[var(--desert-gold)] transition-colors">Muscat</a></li>
              <li><a href="#" className="hover:text-[var(--desert-gold)] transition-colors">Nizwa</a></li>
              <li><a href="#" className="hover:text-[var(--desert-gold)] transition-colors">Salalah</a></li>
              <li><a href="#" className="hover:text-[var(--desert-gold)] transition-colors">Wahiba Sands</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Experience</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[var(--desert-gold)] transition-colors">Cultural Tours</a></li>
              <li><a href="#" className="hover:text-[var(--desert-gold)] transition-colors">Desert Adventures</a></li>
              <li><a href="#" className="hover:text-[var(--desert-gold)] transition-colors">Mountain Hiking</a></li>
              <li><a href="#" className="hover:text-[var(--desert-gold)] transition-colors">Coastal Escapes</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Discover Oman. Crafted with love for the Sultanate's timeless beauty.</p>
        </div>
      </div>
    </footer>
  );
}
