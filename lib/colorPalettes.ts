export interface ColorInfo {
  hex: string;
  name: string;
  role: string;
}

export interface RoomPalette {
  colors: ColorInfo[];
  description: string;
  tags: string[];
}

export const roomPalettes: Record<string, RoomPalette> = {
  modern: {
    colors: [
      { hex: "#2C3E50", name: "Midnight Blue", role: "Primary" },
      { hex: "#ECF0F1", name: "Cloud White", role: "Background" },
      { hex: "#95A5A6", name: "Silver Gray", role: "Accent" },
      { hex: "#E74C3C", name: "Crimson Red", role: "Pop Color" },
      { hex: "#34495E", name: "Charcoal", role: "Text" }
    ],
    description: "Clean lines and sophisticated neutrals with bold accent colors for contemporary living.",
    tags: ["minimalist", "sophisticated", "urban", "contemporary"]
  },
  scandinavian: {
    colors: [
      { hex: "#FFFFFF", name: "Pure White", role: "Primary" },
      { hex: "#F7F7F7", name: "Off White", role: "Background" },
      { hex: "#D4B895", name: "Natural Wood", role: "Accent" },
      { hex: "#7F8C8D", name: "Stone Gray", role: "Secondary" },
      { hex: "#2C3E50", name: "Deep Blue", role: "Text" }
    ],
    description: "Light, airy, and natural with warm wood tones and cozy textures.",
    tags: ["hygge", "minimalist", "natural", "cozy", "bright"]
  },
  bohemian: {
    colors: [
      { hex: "#8B4513", name: "Saddle Brown", role: "Primary" },
      { hex: "#DEB887", name: "Burlywood", role: "Background" },
      { hex: "#CD853F", name: "Peru Gold", role: "Accent" },
      { hex: "#A0522D", name: "Sienna", role: "Secondary" },
      { hex: "#8B0000", name: "Dark Red", role: "Pop Color" }
    ],
    description: "Rich earth tones and warm colors that create an eclectic, artistic atmosphere.",
    tags: ["eclectic", "warm", "artistic", "earthy", "vibrant"]
  },
  coastal: {
    colors: [
      { hex: "#4682B4", name: "Steel Blue", role: "Primary" },
      { hex: "#F0F8FF", name: "Alice Blue", role: "Background" },
      { hex: "#20B2AA", name: "Light Sea Green", role: "Accent" },
      { hex: "#F5DEB3", name: "Wheat", role: "Secondary" },
      { hex: "#2F4F4F", name: "Dark Slate Gray", role: "Text" }
    ],
    description: "Ocean-inspired blues and sandy neutrals for a relaxing seaside feel.",
    tags: ["relaxing", "fresh", "nautical", "breezy", "serene"]
  },
  industrial: {
    colors: [
      { hex: "#36454F", name: "Charcoal", role: "Primary" },
      { hex: "#C0C0C0", name: "Silver", role: "Background" },
      { hex: "#CD7F32", name: "Bronze", role: "Accent" },
      { hex: "#708090", name: "Slate Gray", role: "Secondary" },
      { hex: "#000000", name: "Black", role: "Text" }
    ],
    description: "Raw materials and metallic finishes with exposed structural elements.",
    tags: ["urban", "raw", "metallic", "edgy", "masculine"]
  },
  farmhouse: {
    colors: [
      { hex: "#FFFDD0", name: "Cream", role: "Primary" },
      { hex: "#F5F5DC", name: "Beige", role: "Background" },
      { hex: "#8B4513", name: "Saddle Brown", role: "Accent" },
      { hex: "#2F4F4F", name: "Dark Slate Gray", role: "Secondary" },
      { hex: "#556B2F", name: "Olive Drab", role: "Pop Color" }
    ],
    description: "Rustic charm with neutral tones and natural wood finishes.",
    tags: ["rustic", "cozy", "natural", "vintage", "warm"]
  },
  luxury: {
    colors: [
      { hex: "#1C1C1C", name: "Rich Black", role: "Primary" },
      { hex: "#F8F8FF", name: "Ghost White", role: "Background" },
      { hex: "#FFD700", name: "Gold", role: "Accent" },
      { hex: "#4B0082", name: "Indigo", role: "Secondary" },
      { hex: "#800020", name: "Burgundy", role: "Pop Color" }
    ],
    description: "Opulent colors and rich textures for sophisticated elegance.",
    tags: ["elegant", "opulent", "sophisticated", "rich", "glamorous"]
  },
  tropical: {
    colors: [
      { hex: "#00CED1", name: "Dark Turquoise", role: "Primary" },
      { hex: "#F0FFFF", name: "Azure", role: "Background" },
      { hex: "#FF6347", name: "Tomato", role: "Accent" },
      { hex: "#32CD32", name: "Lime Green", role: "Secondary" },
      { hex: "#FF1493", name: "Deep Pink", role: "Pop Color" }
    ],
    description: "Vibrant tropical colors that bring energy and life to any space.",
    tags: ["vibrant", "energetic", "tropical", "bold", "lively"]
  },
  minimalist: {
    colors: [
      { hex: "#FAFAFA", name: "Pure White", role: "Primary" },
      { hex: "#F5F5F5", name: "Whisper Gray", role: "Background" },
      { hex: "#E0E0E0", name: "Light Gray", role: "Accent" },
      { hex: "#9E9E9E", name: "Medium Gray", role: "Secondary" },
      { hex: "#212121", name: "Almost Black", role: "Text" }
    ],
    description: "Ultimate simplicity with clean whites and subtle grays for a serene environment.",
    tags: ["clean", "simple", "zen", "peaceful", "uncluttered"]
  },
  maximalist: {
    colors: [
      { hex: "#FF4081", name: "Hot Pink", role: "Primary" },
      { hex: "#FFF3E0", name: "Cream", role: "Background" },
      { hex: "#FF9800", name: "Orange", role: "Accent" },
      { hex: "#9C27B0", name: "Purple", role: "Secondary" },
      { hex: "#4CAF50", name: "Green", role: "Pop Color" }
    ],
    description: "Bold, vibrant colors that make a statement and celebrate creative expression.",
    tags: ["bold", "vibrant", "expressive", "creative", "energetic"]
  },
  vintage: {
    colors: [
      { hex: "#8B7355", name: "Antique Bronze", role: "Primary" },
      { hex: "#F5F5DC", name: "Beige", role: "Background" },
      { hex: "#DEB887", name: "Burlywood", role: "Accent" },
      { hex: "#A0522D", name: "Sienna", role: "Secondary" },
      { hex: "#800000", name: "Maroon", role: "Pop Color" }
    ],
    description: "Timeless colors with a nostalgic feel, perfect for classic and retro aesthetics.",
    tags: ["nostalgic", "classic", "retro", "timeless", "heritage"]
  },
  mediterranean: {
    colors: [
      { hex: "#4682B4", name: "Mediterranean Blue", role: "Primary" },
      { hex: "#F5F5DC", name: "Sand", role: "Background" },
      { hex: "#228B22", name: "Olive Green", role: "Accent" },
      { hex: "#CD853F", name: "Terracotta", role: "Secondary" },
      { hex: "#FF6347", name: "Tomato Red", role: "Pop Color" }
    ],
    description: "Sun-soaked colors inspired by the Mediterranean coast and countryside.",
    tags: ["sunny", "coastal", "Mediterranean", "warm", "inviting"]
  },
  japandi: {
    colors: [
      { hex: "#F7F3E9", name: "Warm White", role: "Primary" },
      { hex: "#FAF7F0", name: "Cream", role: "Background" },
      { hex: "#D4A574", name: "Natural Wood", role: "Accent" },
      { hex: "#8B8680", name: "Stone", role: "Secondary" },
      { hex: "#2F2F2F", name: "Charcoal", role: "Text" }
    ],
    description: "Japanese minimalism meets Scandinavian functionality with warm, natural tones.",
    tags: ["zen", "natural", "minimal", "serene", "balanced"]
  },
  gothic: {
    colors: [
      { hex: "#1C1C1C", name: "Deep Black", role: "Primary" },
      { hex: "#2F2F2F", name: "Dark Gray", role: "Background" },
      { hex: "#8B0000", name: "Dark Red", role: "Accent" },
      { hex: "#4B0082", name: "Deep Purple", role: "Secondary" },
      { hex: "#C0C0C0", name: "Silver", role: "Pop Color" }
    ],
    description: "Dark, dramatic colors that create a mysterious and sophisticated atmosphere.",
    tags: ["dramatic", "dark", "mysterious", "sophisticated", "moody"]
  },
  pastel: {
    colors: [
      { hex: "#FFB6C1", name: "Light Pink", role: "Primary" },
      { hex: "#F0F8FF", name: "Alice Blue", role: "Background" },
      { hex: "#98FB98", name: "Pale Green", role: "Accent" },
      { hex: "#DDA0DD", name: "Plum", role: "Secondary" },
      { hex: "#F0E68C", name: "Khaki", role: "Pop Color" }
    ],
    description: "Soft, dreamy colors that create a gentle and calming atmosphere.",
    tags: ["soft", "dreamy", "gentle", "calming", "sweet"]
  },
  cyberpunk: {
    colors: [
      { hex: "#0A0A0A", name: "Matrix Black", role: "Primary" },
      { hex: "#1A1A1A", name: "Dark Steel", role: "Background" },
      { hex: "#00FF41", name: "Neon Green", role: "Accent" },
      { hex: "#FF00FF", name: "Electric Magenta", role: "Secondary" },
      { hex: "#00FFFF", name: "Cyan Blue", role: "Pop Color" }
    ],
    description: "Futuristic neon colors against dark backgrounds for a high-tech aesthetic.",
    tags: ["futuristic", "neon", "tech", "electric", "modern"]
  },
  rustic: {
    colors: [
      { hex: "#8B4513", name: "Saddle Brown", role: "Primary" },
      { hex: "#CD853F", name: "Peru", role: "Accent" },
      { hex: "#D2B48C", name: "Tan", role: "Background" },
      { hex: "#A52A2A", name: "Brown", role: "Secondary" },
      { hex: "#8B0000", name: "Dark Red", role: "Pop Color" }
    ],
    description: "Warm earth tones and natural textures for a cozy countryside feel.",
    tags: ["earthy", "warm", "natural", "cozy", "country"]
  },
  artDeco: {
    colors: [
      { hex: "#000080", name: "Navy Blue", role: "Primary" },
      { hex: "#C0C0C0", name: "Silver", role: "Background" },
      { hex: "#FFD700", name: "Gold", role: "Accent" },
      { hex: "#800000", name: "Maroon", role: "Secondary" },
      { hex: "#000000", name: "Black", role: "Text" }
    ],
    description: "Luxurious metallics and rich colors inspired by the roaring 20s.",
    tags: ["luxury", "geometric", "glamorous", "vintage", "opulent"]
  },
  desert: {
    colors: [
      { hex: "#D2B48C", name: "Sand", role: "Primary" },
      { hex: "#F5F5DC", name: "Beige", role: "Background" },
      { hex: "#CD5C5C", name: "Coral", role: "Accent" },
      { hex: "#8B4513", name: "Sienna", role: "Secondary" },
      { hex: "#556B2F", name: "Olive Drab", role: "Pop Color" }
    ],
    description: "Warm desert tones that evoke sandy landscapes and sunset hues.",
    tags: ["warm", "earthy", "minimal", "arid", "natural"]
  },
  earthy: {
    colors: [
      { hex: "#8D6E63", name: "Clay", role: "Primary" },
      { hex: "#A1887F", name: "Mud", role: "Background" },
      { hex: "#5D4037", name: "Dark Brown", role: "Accent" },
      { hex: "#4E342E", name: "Coffee", role: "Secondary" },
      { hex: "#3E2723", name: "Charcoal", role: "Text" }
    ],
    description: "Natural and grounded earthy tones for a warm and organic feel.",
    tags: ["earthy", "organic", "warm", "natural"]
  },
  sunset: {
    colors: [
      { hex: "#FF6B6B", name: "Coral", role: "Primary" },
      { hex: "#FF8E53", name: "Peach", role: "Accent" },
      { hex: "#FFCA3A", name: "Golden", role: "Background" },
      { hex: "#8B4513", name: "Saddle Brown", role: "Secondary" },
      { hex: "#4A235A", name: "Grape", role: "Pop Color" }
    ],
    description: "Warm sunset colors that bring a cozy and vibrant atmosphere.",
    tags: ["sunset", "warm", "vibrant", "cozy"]
  },
  forest: {
    colors: [
      { hex: "#2E7D32", name: "Forest Green", role: "Primary" },
      { hex: "#4CAF50", name: "Emerald", role: "Accent" },
      { hex: "#8BC34A", name: "Lime", role: "Background" },
      { hex: "#795548", name: "Wood Brown", role: "Secondary" },
      { hex: "#3F51B5", name: "Deep Blue", role: "Text" }
    ],
    description: "Nature-inspired greens and browns for a fresh outdoor feel.",
    tags: ["nature", "green", "fresh", "organic"]
  },
  monochrome: {
    colors: [
      { hex: "#212121", name: "Black", role: "Primary" },
      { hex: "#424242", name: "Charcoal", role: "Accent" },
      { hex: "#757575", name: "Gray", role: "Background" },
      { hex: "#BDBDBD", name: "Light Gray", role: "Secondary" },
      { hex: "#FFFFFF", name: "White", role: "Pop Color" }
    ],
    description: "Sophisticated grayscale palette for timeless elegance.",
    tags: ["minimal", "elegant", "modern", "grayscale"]
  },
  neon: {
    colors: [
      { hex: "#FF00FF", name: "Fuchsia", role: "Primary" },
      { hex: "#00FFFF", name: "Cyan", role: "Accent" },
      { hex: "#FFFF00", name: "Yellow", role: "Background" },
      { hex: "#00FF00", name: "Lime", role: "Secondary" },
      { hex: "#000000", name: "Black", role: "Text" }
    ],
    description: "Electric neon colors for bold and energetic designs.",
    tags: ["vibrant", "electric", "bold", "modern"]
  },
  safari: {
    colors: [
      { hex: "#C19A6B", name: "Safari Sand", role: "Primary" },
      { hex: "#556B2F", name: "Olive Drab", role: "Accent" },
      { hex: "#8B4513", name: "Saddle Brown", role: "Background" },
      { hex: "#654321", name: "Dark Brown", role: "Secondary" },
      { hex: "#D2691E", name: "Cinnamon", role: "Pop Color" }
    ],
    description: "Earthy safari tones inspired by African landscapes and wildlife.",
    tags: ["earthy", "warm", "natural", "adventure"]
  },
  aurora: {
    colors: [
      { hex: "#4B0082", name: "Indigo", role: "Primary" },
      { hex: "#483D8B", name: "Dark Slate Blue", role: "Background" },
      { hex: "#00CED1", name: "Dark Turquoise", role: "Accent" },
      { hex: "#7CFC00", name: "Lawn Green", role: "Secondary" },
      { hex: "#FF00FF", name: "Magenta", role: "Pop Color" }
    ],
    description: "Northern lights inspired colors with mystical blues and greens.",
    tags: ["mystical", "cool", "vibrant", "natural"]
  },
  sunrise: {
    colors: [
      { hex: "#FF4500", name: "Orange Red", role: "Primary" },
      { hex: "#FFA500", name: "Orange", role: "Accent" },
      { hex: "#FFD700", name: "Gold", role: "Background" },
      { hex: "#FF6347", name: "Tomato", role: "Secondary" },
      { hex: "#FF69B4", name: "Hot Pink", role: "Pop Color" }
    ],
    description: "Warm sunrise colors that evoke the early morning sky.",
    tags: ["warm", "vibrant", "energetic", "morning"]
  },
  ocean: {
    colors: [
      { hex: "#000080", name: "Navy Blue", role: "Primary" },
      { hex: "#1E90FF", name: "Dodger Blue", role: "Accent" },
      { hex: "#00BFFF", name: "Deep Sky Blue", role: "Background" },
      { hex: "#40E0D0", name: "Turquoise", role: "Secondary" },
      { hex: "#00CED1", name: "Dark Turquoise", role: "Pop Color" }
    ],
    description: "Deep ocean blues and turquoise tones for a refreshing aquatic feel.",
    tags: ["cool", "refreshing", "aquatic", "calming"]
  },
  galaxy: {
    colors: [
      { hex: "#000000", name: "Black", role: "Primary" },
      { hex: "#191970", name: "Midnight Blue", role: "Background" },
      { hex: "#4B0082", name: "Indigo", role: "Accent" },
      { hex: "#800080", name: "Purple", role: "Secondary" },
      { hex: "#9370DB", name: "Medium Purple", role: "Pop Color" }
    ],
    description: "Deep cosmic colors inspired by distant galaxies and nebulae.",
    tags: ["cosmic", "mysterious", "deep", "space"]
  }
};