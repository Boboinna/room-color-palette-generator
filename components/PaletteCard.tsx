import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

interface PaletteCardProps {
  palette: any;
  styleKey: string;
  isFavorite: boolean;
  onSelect: () => void;
  onToggleFavorite: (e: React.MouseEvent) => void;
}

const PaletteCard = ({
  palette,
  styleKey,
  isFavorite,
  onSelect,
  onToggleFavorite,
}: PaletteCardProps) => (
  <Card
    className="p-6 cursor-pointer transition-all duration-200 hover:shadow-lg border-2 group hover:border-purple-500 dark:hover:border-purple-600"
    onClick={onSelect}
  >
    <div className="flex items-center justify-between mb-1">
      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
        {styleKey}
      </h4>
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleFavorite}
        className="p-1 hover:bg-red-100 dark:hover:bg-red-900/20"
      >
        <Heart
          className={`w-5 h-5 ${
            isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
          }`}
        />
      </Button>
    </div>

    <div className="flex gap-2 mb-1">
      {palette.colors.slice(0, 5).map((color: any, index: number) => (
        <div
          key={index}
          className="w-8 h-8 rounded-lg shadow-sm flex-shrink-0 border border-gray-200 dark:border-gray-700"
          style={{ backgroundColor: color.hex }}
        />
      ))}
    </div>

    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-1">
      {palette.description}
    </p>

    <div className="flex flex-wrap gap-1">
      {palette.tags.slice(0, 3).map((tag: string) => (
        <Badge key={tag} variant="secondary" className="text-xs">
          {tag}
        </Badge>
      ))}
    </div>
  </Card>
);

export default PaletteCard;
