import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

interface ColorCardProps {
  color: string;
  name: string;
  role: string;
}

const ColorCard = ({ color, name, role }: ColorCardProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
      toast("Color copied!", {
        description: `${color} copied to clipboard`,
      });

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy", {
        description: "Please copy manually",
      });
    }
  };

  return (
    <Card
      className="overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group"
      onClick={copyToClipboard}
    >
      <div
        className="h-24 w-full relative group-hover:h-28 transition-all duration-200 border-gray-200 dark:border-gray-700 border"
        style={{ backgroundColor: color }}
      >
        <div className="absolute inset-0 bg-black/0 transition-all duration-200 flex items-center justify-center">
          {copied ? (
            <div className="rounded-md p-2 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
              <Check className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          ) : (
            <div className="rounded-md p-2 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
              <Copy className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          )}
        </div>
      </div>

      <div className="p-2">
        <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-md truncate">
          {name}
        </h4>
        <p className="text-xs sm:text-sm text-gray-500 truncate my-1">{role}</p>
        <p className="text-xs sm:text-sm font-mono bg-gray-100 px-1.5 py-1 rounded text-gray-700 dark:bg-gray-800 dark:text-gray-300 truncate">
          {color}
        </p>
      </div>
    </Card>
  );
};

export default ColorCard;
