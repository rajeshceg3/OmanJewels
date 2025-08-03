import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { Destination } from "@/types/destination";
import { getCategoryColor } from "@/lib/destinations";

// Leaflet imports with dynamic loading
let L: any;

interface InteractiveMapProps {
  onDestinationSelect: (destination: Destination) => void;
}

export default function InteractiveMap({ onDestinationSelect }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  const { data: destinations = [], isLoading } = useQuery<Destination[]>({
    queryKey: ['/api/destinations'],
  });

  // Dynamically load Leaflet
  useEffect(() => {
    const loadLeaflet = async () => {
      if (typeof window === 'undefined') return;
      
      // Load Leaflet CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Load Leaflet JS
      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = () => {
          L = window.L;
          setLeafletLoaded(true);
        };
        document.head.appendChild(script);
      } else {
        L = window.L;
        setLeafletLoaded(true);
      }
    };

    loadLeaflet();
  }, []);

  // Initialize map
  useEffect(() => {
    if (!leafletLoaded || !mapRef.current || mapInstanceRef.current) return;

    mapInstanceRef.current = L.map(mapRef.current).setView([21.0, 57.0], 6);

    // Add watercolor tile layer
    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', {
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://stamen.com/">Stamen Design</a>',
      maxZoom: 16
    }).addTo(mapInstanceRef.current);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [leafletLoaded]);

  // Add markers when destinations are loaded
  useEffect(() => {
    if (!mapInstanceRef.current || !destinations.length || !L) return;

    // Clear existing markers
    markersRef.current.forEach(marker => {
      mapInstanceRef.current.removeLayer(marker);
    });
    markersRef.current = [];

    // Add new markers
    destinations.forEach(destination => {
      const marker = L.circleMarker(destination.coords, {
        radius: 12,
        fillColor: getCategoryColor(destination.category),
        color: '#FFFFFF',
        weight: 3,
        opacity: 1,
        fillOpacity: 0.8,
        className: 'transition-all duration-300 hover:scale-110'
      }).addTo(mapInstanceRef.current);

      marker.bindPopup(`
        <div class="p-4 max-w-xs">
          <h3 class="font-semibold text-lg mb-2">${destination.name}</h3>
          <p class="text-sm text-gray-600 mb-3">${destination.description.substring(0, 100)}...</p>
          <button 
            onclick="window.showDestinationDetails(${destination.id})" 
            class="bg-[#D4A574] text-white px-4 py-2 rounded-lg text-sm hover:bg-opacity-80 transition-colors"
          >
            Learn More
          </button>
        </div>
      `);

      markersRef.current.push(marker);
    });

    // Global function for popup buttons
    (window as any).showDestinationDetails = (destinationId: number) => {
      const destination = destinations.find(d => d.id === destinationId);
      if (destination) {
        onDestinationSelect(destination);
      }
    };
  }, [destinations, onDestinationSelect]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // TODO: Implement search filtering
  };

  if (isLoading) {
    return (
      <div className="glass-morphism rounded-3xl p-8 shadow-2xl">
        <div className="w-full h-96 md:h-[600px] rounded-2xl bg-gray-200 animate-pulse flex items-center justify-center">
          <span className="text-gray-500">Loading map...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="glass-morphism rounded-3xl p-8 shadow-2xl">
        <div ref={mapRef} className="w-full h-96 md:h-[600px] rounded-2xl shadow-lg" />
      </div>

      {/* Floating Search */}
      <div className="absolute top-4 left-4 right-4 md:left-12 md:right-auto md:w-80">
        <div className="glass-morphism rounded-2xl p-4">
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-gray-600" />
            <input 
              type="text" 
              placeholder="Search destinations..." 
              className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
