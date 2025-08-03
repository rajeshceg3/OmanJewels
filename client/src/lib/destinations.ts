import { CategoryColors } from "@/types/destination";

export const getCategoryColor = (category: string): string => {
  const colors: CategoryColors = {
    'Cultural': 'hsl(39, 49%, 67%)',
    'Desert': 'hsl(33, 59%, 70%)',
    'Historical': 'hsl(95, 8%, 58%)',
    'Nature': 'hsl(174, 56%, 60%)',
    'Coastal': 'hsl(220, 85%, 40%)',
    'Mountain': 'hsl(95, 8%, 58%)',
    'UNESCO': 'hsl(39, 49%, 67%)',
    'Oasis': 'hsl(174, 56%, 60%)',
    'Natural Wonder': 'hsl(174, 56%, 60%)',
    'Maritime': 'hsl(220, 85%, 40%)',
    'Island': 'hsl(220, 85%, 40%)'
  };
  return colors[category] || 'hsl(39, 49%, 67%)';
};

export const getCategoryColorClass = (category: string): string => {
  const colorClasses: CategoryColors = {
    'Cultural': 'bg-[#D4A574]',
    'Desert': 'bg-[#E6B17A]',
    'Historical': 'bg-[#7D8471]',
    'Nature': 'bg-[#4ECDC4]',
    'Coastal': 'bg-[#1E40AF]',
    'Mountain': 'bg-[#7D8471]',
    'UNESCO': 'bg-[#D4A574]',
    'Oasis': 'bg-[#4ECDC4]',
    'Natural Wonder': 'bg-[#4ECDC4]',
    'Maritime': 'bg-[#1E40AF]',
    'Island': 'bg-[#1E40AF]'
  };
  return colorClasses[category] || 'bg-[#D4A574]';
};
