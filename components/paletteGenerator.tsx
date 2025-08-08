'use client';

import { useState, useEffect, useRef } from "react";
import { buttonVariants } from "@/components/ui/button";
import { roomPalettes } from "@/lib/colorPalettes";
import { generateRandomPalette, type RandomPalette } from "@/lib/colorGenerator";
import { Button } from "@/components/ui/button";
import { Dice6, Star } from "lucide-react";
import FavoritesView from "./FavouritesView";
import PaletteCard from "./PaletteCard";
import CurrentPalette from "./CurrentPalette";
import { AnimatedShinyText } from "@/components/ui/animate-shiny-text";
import Link from 'next/link';
import { Spinner } from '@/components/ui/spinner';
// import CTA from "@/components/cta";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface SavedRandomPalette extends RandomPalette {
  id: string;
  timestamp: number;
}

interface PaletteCategory {
  id: string;
  name: string;
  styles: string[];
}

const PaletteGenerator = () => {
  const [selectedStyle, setSelectedStyle] = useState("modern");
  const [randomPalette, setRandomPalette] = useState<RandomPalette | null>(null);
  const [isRandomMode, setIsRandomMode] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [savedRandomPalettes, setSavedRandomPalettes] = useState<SavedRandomPalette[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isClient, setIsClient] = useState(false);
  const currentPaletteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);
    const savedFavorites = localStorage.getItem('colorPaletteFavorites');
    const savedRandoms = localStorage.getItem('savedRandomPalettes');
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    if (savedRandoms) setSavedRandomPalettes(JSON.parse(savedRandoms));
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('colorPaletteFavorites', JSON.stringify(favorites));
      localStorage.setItem('savedRandomPalettes', JSON.stringify(savedRandomPalettes));
    }
  }, [favorites, savedRandomPalettes, isClient]);

  const categories: PaletteCategory[] = [
    { id: "all", name: "All Styles", styles: Object.keys(roomPalettes) },
    { id: "minimalist", name: "Minimalist", styles: ["scandinavian", "minimalist", "japandi", "monochrome"] },
    { id: "warm", name: "Warm Tones", styles: ["bohemian", "farmhouse", "vintage", "rustic", "earthy", "sunset"] },
    { id: "bold", name: "Bold & Vibrant", styles: ["tropical", "maximalist", "cyberpunk", "artDeco", "neon"] },
    { id: "elegant", name: "Elegant", styles: ["luxury", "gothic", "industrial"] },
    { id: "relaxed", name: "Relaxed", styles: ["coastal", "mediterranean", "pastel", "desert", "forest"] },
    { id: "modern", name: "Modern", styles: ["modern", "artDeco", "cyberpunk"] },
    { id: "nature", name: "Nature Inspired", styles: ["forest", "earthy", "desert", "coastal", "safari"] }
  ];

  const currentPalette = isRandomMode && randomPalette
    ? randomPalette
    : roomPalettes[selectedStyle];

  const generateNewRandomPalette = () => {
    const newPalette = generateRandomPalette();
    setRandomPalette(newPalette);
    setIsRandomMode(true);
    setSelectedCategory("all");
    setShowFavorites(false); // ← ADD THIS LINE
    toast("New random palette generated!", {
      description: "Click any color to copy its hex code",
    });
  };

  const selectPresetStyle = (style: string) => {
    setSelectedStyle(style);
    setIsRandomMode(false);
    setShowFavorites(false);
  };

  const getCurrentPaletteId = () => {
    if (isRandomMode && randomPalette) {
      return `random_${randomPalette.colors.map(c => c.hex).join('_')}`;
    }
    return selectedStyle;
  };

  const toggleFavorite = (paletteId?: string) => {
    const id = paletteId || getCurrentPaletteId();
    if (isRandomMode && randomPalette && !paletteId) {
      const paletteToSave: SavedRandomPalette = {
        ...randomPalette,
        id,
        timestamp: Date.now()
      };
      const isAlreadySaved = savedRandomPalettes.some(p => p.id === id);
      if (isAlreadySaved) {
        setSavedRandomPalettes(prev => prev.filter(p => p.id !== id));
        setFavorites(prev => prev.filter(fav => fav !== id));
        toast("Removed from favorites");
      } else {
        setSavedRandomPalettes(prev => [...prev, paletteToSave]);
        setFavorites(prev => [...prev, id]);
        toast("Added to favorites!");
      }
    } else {
      const isFavorite = favorites.includes(id);
      setFavorites(prev =>
        isFavorite
          ? prev.filter(favId => favId !== id)
          : [...prev, id]
      );
      toast(isFavorite ? "Removed from favorites" : "Added to favorites", {
        description: "Palette updated in your collection",
      });
    }
  };

  const toggleFavoritesView = () => {
    setShowFavorites(!showFavorites);
    setIsRandomMode(false);
    setSelectedCategory("all");
  };

  const setCurrentPalette = (palette: any, isRandom: boolean) => {
    if (isRandom) {
      setRandomPalette(palette);
    } else {
      const styleKey = Object.keys(roomPalettes).find(
        key => JSON.stringify(roomPalettes[key]) === JSON.stringify(palette)
      );
      if (styleKey) setSelectedStyle(styleKey);
    }

    setIsRandomMode(isRandom);
    setShowFavorites(false);

    setTimeout(() => {
      const offset = 80;
      if (currentPaletteRef.current) {
        const elementTop = currentPaletteRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementTop - offset,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const filteredStyles = selectedCategory === "all"
    ? Object.keys(roomPalettes)
    : categories.find(cat => cat.id === selectedCategory)?.styles || [];

  if (!isClient) {
    return <Spinner className="flex items-center justify-center min-h-screen size-12" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mt-2 mb-16">
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "px-4 rounded-xl"
          )}
          target="_blank"
        >
          <AnimatedShinyText className="items-center justify-center p-1 transition ease-out hover:text-neutral-700 hover:duration-300 hover:dark:text-neutral-300">
            <span className="mr-3">🎉</span>Generate your Room Color Palette!
          </AnimatedShinyText>
        </Link>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-6">
          Discover{" "}
          <span className="bg-gradient-to-tr from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
            Perfect Color Harmonies
          </span>
        </h2>
        <p className="text-md md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Explore curated color palettes organized by style or generate random
          combinations. Click any color to copy its code instantly.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : ""
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="flex-col sm:flex-row gap-4 justify-center mt-8 mb-4">
          <Button
            onClick={generateNewRandomPalette}
            className={`${
              isRandomMode
                ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                : "bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500"
            } text-white text-sm md:text-md font-semibold px-4 md:px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 mr-0 mb-3 sm:mb-0 sm:mr-3`}
          >
            <Dice6 className="size-4 mr-2" />
            {isRandomMode ? "Generate New Random" : "Try Random Palette"}
          </Button>

          <Button
            onClick={toggleFavoritesView}
            variant={showFavorites ? "default" : "outline"}
            className={`${
              showFavorites
                ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                : "border-red-200 text-red-500 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
            } font-medium text-xs md:text-md px-3 md:px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200`}
          >
            <Star className="size-4 mr-2" />
            View Favorites ({favorites.length})
          </Button>
        </div>
      </div>

      {showFavorites ? (
        <FavoritesView
          favorites={favorites}
          savedRandomPalettes={savedRandomPalettes}
          roomPalettes={roomPalettes}
          onSetCurrentPalette={setCurrentPalette}
          onToggleFavorite={toggleFavorite}
        />
      ) : (
        <>
          <div ref={currentPaletteRef}>
            <CurrentPalette
              palette={currentPalette}
              isRandomMode={isRandomMode}
              isFavorite={favorites.includes(getCurrentPaletteId())}
              onGenerateRandom={generateNewRandomPalette}
              onToggleFavorite={() => toggleFavorite()}
              styleName={isRandomMode ? "Random Generated" : selectedStyle}
            />
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-16 mb-8 text-center">
              {selectedCategory === "all"
                ? "All Color Palettes"
                : `${
                    categories.find((c) => c.id === selectedCategory)?.name
                  } Palettes`}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredStyles.map((styleKey) => (
                <PaletteCard
                  key={styleKey}
                  palette={roomPalettes[styleKey]}
                  styleKey={styleKey}
                  isFavorite={favorites.includes(styleKey)}
                  onSelect={() => {
                    selectPresetStyle(styleKey);
                    setCurrentPalette(roomPalettes[styleKey], false);
                  }}
                  onToggleFavorite={(e) => {
                    e.stopPropagation();
                    toggleFavorite(styleKey);
                  }}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/* <CTA /> */}
    </div>
  );
};

export default PaletteGenerator;
