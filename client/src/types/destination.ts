export interface Destination {
  id: number;
  name: string;
  coords: [number, number];
  category: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface CategoryColors {
  [key: string]: string;
}
