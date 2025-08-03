import { X, MapPin, Calendar } from "lucide-react";
import { Destination } from "@/types/destination";
import { getCategoryColorClass } from "@/lib/destinations";
import { motion, AnimatePresence } from "framer-motion";

interface DestinationSidebarProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DestinationSidebar({ destination, isOpen, onClose }: DestinationSidebarProps) {
  if (!destination) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md glass-morphism z-50 overflow-hidden"
          >
            <div className="p-8 h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold text-gray-800">Destination Details</h3>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-48 object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-semibold text-gray-800">{destination.name}</h4>
                    <span className={`px-3 py-1 ${getCategoryColorClass(destination.category)} text-white rounded-full text-sm font-medium`}>
                      {destination.category}
                    </span>
                  </div>
                  
                  <blockquote className="text-gray-600 leading-relaxed mb-6 italic border-l-4 border-[var(--desert-gold)] pl-4">
                    "{destination.description}"
                  </blockquote>
                  
                  <div className="space-y-4">
                    <h5 className="font-semibold text-gray-800 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Highlights
                    </h5>
                    <div className="space-y-3">
                      {destination.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-[var(--ocean-turquoise)] rounded-full flex-shrink-0" />
                          <span className="text-gray-600">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[var(--desert-gold)] to-[var(--frankincense)] text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Plan Your Visit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    View on Map
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
