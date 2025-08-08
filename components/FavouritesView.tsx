import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import PaletteCard from "./PaletteCard";

interface FavoritesViewProps {
  favorites: string[];
  savedRandomPalettes: any[];
  roomPalettes: any;
  onSetCurrentPalette: (palette: any, isRandom: boolean) => void;
  onToggleFavorite: (id: string) => void;
}

const FavoritesView = ({
  favorites,
  savedRandomPalettes,
  roomPalettes,
  onSetCurrentPalette,
  onToggleFavorite,
}: FavoritesViewProps) => {
  const favoriteStyles = Object.keys(roomPalettes).filter((style) =>
    favorites.includes(style)
  );

  const favoriteRandomPalettes = savedRandomPalettes.filter((palette) =>
    favorites.includes(palette.id)
  );

  const handleSelectPalette = (palette: any, isRandom: boolean) => {
    onSetCurrentPalette(palette, isRandom);
  };

  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
        Your Favorite Palettes
      </h3>

      {favorites.length === 0 ? (
        <Card className="p-12 text-center bg-gray-50 dark:bg-gray-800 rounded-2xl">
          <Heart className="w-16 h-16 text-gray-400 mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            No favorites yet!
          </p>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Explore our collection of color palettes and click the heart icon to
            save your favorites for easy access later.
          </p>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteStyles.map((styleKey) => (
            <PaletteCard
              key={styleKey}
              palette={roomPalettes[styleKey]}
              styleKey={styleKey}
              isFavorite={true}
              onSelect={() =>
                handleSelectPalette(roomPalettes[styleKey], false)
              }
              onToggleFavorite={(e) => {
                e.stopPropagation();
                onToggleFavorite(styleKey);
              }}
            />
          ))}

          {favoriteRandomPalettes.map((palette) => (
            <PaletteCard
              key={palette.id}
              palette={palette}
              styleKey="Random Palette"
              isFavorite={true}
              onSelect={() => handleSelectPalette(palette, true)}
              onToggleFavorite={(e) => {
                e.stopPropagation();
                onToggleFavorite(palette.id);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesView;
