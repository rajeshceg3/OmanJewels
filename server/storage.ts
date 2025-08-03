import { type Destination, type InsertDestination } from "@shared/schema";

export interface IStorage {
  getDestinations(): Promise<Destination[]>;
  getDestination(id: number): Promise<Destination | undefined>;
  searchDestinations(query: string): Promise<Destination[]>;
}

export class MemStorage implements IStorage {
  private destinations: Map<number, Destination>;

  constructor() {
    this.destinations = new Map();
    this.initializeDestinations();
  }

  private initializeDestinations() {
    const destinations: Destination[] = [
      {
        id: 1,
        name: "Sultan Qaboos Grand Mosque",
        coords: [23.5859, 58.3829],
        category: "Cultural",
        description: "Like a prayer carved in marble and light, this sacred sanctuary rises from the earth with the grace of a thousand whispered devotions. Here, beneath domes that mirror the heavens, silence itself becomes a form of worship.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Magnificent Islamic architecture", "World's second-largest carpet", "Stunning Swarovski chandeliers"]
      },
      {
        id: 2,
        name: "Wahiba Sands",
        coords: [22.2, 58.7],
        category: "Desert",
        description: "The desert breathes here in waves of golden silk, where each dune tells stories older than memory. As the sun sets, the sands blush like a shy maiden, painting the world in shades of amber and dreams.",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Rolling sand dunes", "Bedouin culture", "Desert camping experiences"]
      },
      {
        id: 3,
        name: "Nizwa Fort",
        coords: [22.9333, 57.5333],
        category: "Historical",
        description: "Standing sentinel over centuries, this ancient guardian holds within its stone embrace the whispers of sultans and the echoes of ancient markets. Time flows gently around its walls like a river around weathered stones.",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["17th-century architecture", "Traditional souq", "Panoramic mountain views"]
      },
      {
        id: 4,
        name: "Wadi Shab",
        coords: [22.8333, 59.2167],
        category: "Nature",
        description: "Where emerald waters thread through ancient limestone like nature's own embroidery, this hidden valley sings with the music of flowing streams and rustling palms. Each pool reflects the sky like scattered pieces of heaven.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Crystal-clear pools", "Hidden waterfall cave", "Dramatic limestone cliffs"]
      },
      {
        id: 5,
        name: "Musandam Peninsula",
        coords: [26.2, 56.3],
        category: "Coastal",
        description: "The Arabia of the seas, where fjords cut deep into ancient mountains like the earth's own calligraphy. Here, dolphins dance in waters so blue they seem to have stolen pieces of the sky itself.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Dramatic fjords", "Dolphin watching", "Traditional dhow cruises"]
      },
      {
        id: 6,
        name: "Jebel Shams",
        coords: [23.2367, 57.2617],
        category: "Mountain",
        description: "The mountain of the sun, where dawn arrives first and twilight lingers longest. From its heights, the world spreads below like a tapestry woven from stone and wind, shadow and light.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Oman's highest peak", "Grand Canyon views", "Mountain hiking trails"]
      },
      {
        id: 7,
        name: "Salalah",
        coords: [17.0151, 54.0924],
        category: "Coastal",
        description: "In the season of khareef, this southern jewel transforms into Arabia's secret garden, where monsoons paint the landscape emerald and frankincense trees whisper ancient secrets to the wind.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Monsoon greenery", "Frankincense heritage", "Beautiful beaches"]
      },
      {
        id: 8,
        name: "Bahla Fort",
        coords: [22.9667, 57.3],
        category: "UNESCO",
        description: "Built from the very earth it guards, this fortress of mud and dreams stands as testament to human ambition carved in clay. Its walls have witnessed the rise and fall of kingdoms like seasons passing.",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["UNESCO World Heritage", "13th-century fortress", "Traditional pottery workshops"]
      },
      {
        id: 9,
        name: "Wadi Bani Khalid",
        coords: [22.5667, 59.1],
        category: "Oasis",
        description: "An oasis that dreams itself into existence, where palm trees lean over pools of liquid turquoise like nature's own mirrors. Here, the desert pauses to admire its own reflection.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Crystal-clear pools", "Date palm groves", "Desert oasis swimming"]
      },
      {
        id: 10,
        name: "Bimmah Sinkhole",
        coords: [22.9567, 59.0883],
        category: "Natural Wonder",
        description: "Legend calls it the falling star's kiss upon the earth—a perfect circle of turquoise wonder where limestone walls embrace a pool of liquid gemstone. Nature's own amphitheater of beauty.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Natural limestone sinkhole", "Swimming and snorkeling", "Geological wonder"]
      },
      {
        id: 11,
        name: "Sur",
        coords: [22.5667, 59.5333],
        category: "Maritime",
        description: "Where the ancient art of dhow-building still breathes life into weathered wood, this coastal haven speaks in the language of salt and sail. The sea here holds stories of a thousand voyages.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Traditional shipbuilding", "Turtle watching", "Maritime heritage"]
      },
      {
        id: 12,
        name: "Jebel Akhdar",
        coords: [23.0833, 57.65],
        category: "Mountain",
        description: "The green mountain that defies the desert's golden rule, where terraced gardens climb toward heaven like steps in a giant's staircase. Roses bloom here with the persistence of hope.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Terraced rose gardens", "Cool mountain climate", "Traditional villages"]
      },
      {
        id: 13,
        name: "Masirah Island",
        coords: [20.4, 58.8833],
        category: "Island",
        description: "A world apart from the world, where sea turtles return to ancient shores and wind shapes the land like a sculptor's loving hand. Time moves differently here, measured in tides and seasons.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Pristine beaches", "Sea turtle nesting", "Windsurfing paradise"]
      },
      {
        id: 14,
        name: "Sohar",
        coords: [24.3667, 56.75],
        category: "Historical",
        description: "Once home to Sinbad the Sailor, this ancient port where legends were born still hums with the rhythm of commerce and adventure. The sea here whispers tales of distant shores and golden treasures.",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Sinbad's legendary home", "Historic fort", "Traditional souqs"]
      },
      {
        id: 15,
        name: "Muscat Old Town",
        coords: [23.6139, 58.5922],
        category: "Cultural",
        description: "In the embrace of twin Portuguese forts, the old soul of Muscat breathes with the rhythm of frankincense and sea breeze. Every corner here holds a story, every stone a memory of empires past.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Portuguese forts", "Traditional architecture", "Muttrah Souq"]
      }
    ];

    destinations.forEach(destination => {
      this.destinations.set(destination.id, destination);
    });
  }

  async getDestinations(): Promise<Destination[]> {
    return Array.from(this.destinations.values());
  }

  async getDestination(id: number): Promise<Destination | undefined> {
    return this.destinations.get(id);
  }

  async searchDestinations(query: string): Promise<Destination[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.destinations.values()).filter(destination =>
      destination.name.toLowerCase().includes(lowercaseQuery) ||
      destination.category.toLowerCase().includes(lowercaseQuery) ||
      destination.description.toLowerCase().includes(lowercaseQuery)
    );
  }
}

export const storage = new MemStorage();
