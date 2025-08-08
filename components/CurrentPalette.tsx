import { Heart, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ColorCard from "./ColorCard";

interface CurrentPaletteProps {
  palette: any;
  isRandomMode: boolean;
  isFavorite: boolean;
  onGenerateRandom: () => void;
  onToggleFavorite: () => void;
  styleName: string;
}

const CurrentPalette = ({
  palette,
  isRandomMode,
  isFavorite,
  onGenerateRandom,
  onToggleFavorite,
  styleName,
}: CurrentPaletteProps) => (
  <Card className="mb-3 border-1 border-indigo-600 dark:border-indigo-400 bg-gray-100/80 p-4 md:p-8 hover:shadow-xl backdrop-blur-sm dark:bg-gray-900/80">
    <h3 className="text-2xl font-bold capitalize text-gray-900 dark:text-gray-100">
      {styleName} Style
    </h3>
    <div className="flex items-center justify-between mr-1">
      <div>
        <p className="text-gray-600 dark:text-gray-300">
          {palette.description}
        </p>
      </div>
      <div className="flex gap-2">
        {isRandomMode && (
          <Button
            variant="outline"
            size="sm"
            onClick={onGenerateRandom}
            className="border-orange-200 bg-orange-50 text-orange-500 hover:bg-orange-100 dark:border-orange-800 dark:bg-orange-900/20 dark:hover:bg-orange-900/30"
          >
            <Shuffle className="h-4 w-4" />
          </Button>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={onToggleFavorite}
          className={`${
            isFavorite
              ? "border-red-200 bg-red-50 text-red-500 dark:border-red-800 dark:bg-red-900/20"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </Button>
      </div>
    </div>

    <div className="mb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:grid-cols-5">
      {palette.colors.map((color: any, index: number) => (
        <ColorCard
          key={`${index}`}
          color={color.hex}
          name={color.name}
          role={color.role}
        />
      ))}
    </div>

    <div className="flex flex-wrap gap-2">
      {palette.tags.map((tag: string) => (
        <Badge
          key={tag}
          variant="secondary"
          className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
        >
          {tag}
        </Badge>
      ))}
    </div>
  </Card>
);

export default CurrentPalette;
