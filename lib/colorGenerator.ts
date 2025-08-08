export interface RandomColor {
  hex: string;
  name: string;
  role: string;
}

export interface RandomPalette {
  colors: RandomColor[];
  description: string;
  tags: string[];
}

const generateRandomHex = (): string => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
};

const generateHarmoniousPalette = (baseHue: number): RandomColor[] => {
  const colors: RandomColor[] = [];

  // Primary color (base)
  colors.push({
    hex: hslToHex(baseHue, 60, 45),
    name: "Primary",
    role: "Primary",
  });

  // Background (light, low saturation)
  colors.push({
    hex: hslToHex(baseHue, 15, 95),
    name: "Background",
    role: "Background",
  });

  // Accent (complementary)
  colors.push({
    hex: hslToHex((baseHue + 180) % 360, 50, 55),
    name: "Accent",
    role: "Accent",
  });

  // Secondary (triadic)
  colors.push({
    hex: hslToHex((baseHue + 120) % 360, 40, 40),
    name: "Secondary",
    role: "Secondary",
  });

  // Pop color (split complementary)
  colors.push({
    hex: hslToHex((baseHue + 150) % 360, 70, 50),
    name: "Pop Color",
    role: "Pop Color",
  });

  return colors;
};

const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const getRandomDescription = (): string => {
  const descriptions = [
    "A vibrant and energetic palette perfect for creative spaces",
    "Calming and serene colors that promote relaxation",
    "Bold and dramatic tones for statement-making interiors",
    "Soft and gentle hues ideal for peaceful environments",
    "Rich and luxurious colors that exude sophistication",
    "Fresh and lively palette that brings nature indoors",
    "Warm and cozy tones perfect for intimate gatherings",
    "Cool and refreshing colors that create an airy feel",
    "Elegant combination for a sophisticated atmosphere",
    "Dynamic color scheme for modern living spaces",
    "Harmonious blend of complementary shades",
    "Inspired by natural landscapes and organic elements",
    "Contemporary mix with a touch of vintage charm",
    "Playful combination for energetic and lively spaces",
    "Minimalist approach with maximum visual impact",
    "Rich jewel tones for a luxurious ambiance",
    "Earth-inspired palette for grounding environments",
    "Oceanic hues that bring tranquility and calm",
    "Sunset-inspired warm tones for cozy evenings",
    "Forest greens and browns for natural serenity",
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

const getRandomTags = (): string[] => {
  const allTags = [
    "vibrant",
    "calming",
    "bold",
    "soft",
    "luxurious",
    "fresh",
    "warm",
    "cool",
    "energetic",
    "serene",
    "dramatic",
    "peaceful",
    "sophisticated",
    "natural",
    "cozy",
    "airy",
    "modern",
    "classic",
    "minimal",
    "eclectic",
    "earthy",
    "organic",
    "urban",
    "rustic",
    "elegant",
    "vintage",
    "contemporary",
    "playful",
    "refined",
    "dynamic",
    "harmonious",
    "balanced",
    "striking",
    "muted",
    "bright",
    "deep",
    "light",
    "rich",
    "subtle",
    "expressive",
    "innovative",
    "timeless",
    "trendy",
    "artistic",
    "creative",
  ];

  const numTags = 4 + Math.floor(Math.random() * 3);
  const shuffled = [...allTags].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numTags);
};

const modifyHexColor = (hex: string): string => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  r = Math.min(255, Math.max(0, r + Math.floor(Math.random() * 51) - 25));
  g = Math.min(255, Math.max(0, g + Math.floor(Math.random() * 51) - 25));
  b = Math.min(255, Math.max(0, b + Math.floor(Math.random() * 51) - 25));

  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

// Precompute 200 base palettes with evenly distributed hues
const basePalettes = Array.from({ length: 200 }, (_, i) => {
  const hue = Math.floor((i * 360) / 200 + Math.random() * 10); // Small random offset for diversity
  return generateHarmoniousPalette(hue % 360);
});

export const generateRandomPalette = (): RandomPalette => {
  const base = basePalettes[Math.floor(Math.random() * basePalettes.length)];

  const modifiedColors = base.map((color) => ({
    ...color,
    hex: modifyHexColor(color.hex),
  }));

  return {
    colors: modifiedColors,
    description: getRandomDescription(),
    tags: getRandomTags(),
  };
};
