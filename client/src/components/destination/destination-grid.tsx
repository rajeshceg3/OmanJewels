import { useQuery } from "@tanstack/react-query";
import { Destination } from "@/types/destination";
import { getCategoryColorClass } from "@/lib/destinations";

interface DestinationGridProps {
  onDestinationSelect: (destination: Destination) => void;
}

export default function DestinationGrid({ onDestinationSelect }: DestinationGridProps) {
  const { data: destinations = [], isLoading } = useQuery<Destination[]>({
    queryKey: ['/api/destinations'],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-[var(--warm-gray)] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass-morphism rounded-3xl overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-200" />
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />
                  <div className="h-6 bg-gray-200 rounded w-2/3 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[var(--warm-gray)] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-6">
            Stories from the
            <span className="font-semibold text-[var(--ocean-turquoise)]"> Sultanate</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each destination carries the poetry of time, waiting to be discovered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              onClick={() => onDestinationSelect(destination)}
              className="glass-morphism rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 ${getCategoryColorClass(destination.category)} text-white rounded-full text-sm font-medium opacity-80`}>
                    {destination.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[var(--desert-gold)] transition-colors">
                  {destination.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm italic">
                  {destination.description.substring(0, 120)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
