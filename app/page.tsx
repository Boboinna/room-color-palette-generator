import PaletteGenerator from "@/components/paletteGenerator";
// import { constructMetadata } from "@/lib/utils";

// export const metadata = constructMetadata({
//   title: "Free Room Color Palette Generator",
//   description: "Create a color palette for your room or anything else for free today with our color palette generator with various theme palette examples.",
//   keywords: ["free color palette generator", "leave us a comment", "room color palette generator", "leave a suggestion"],
// });

const ColorPalette = () => {
  return (
    <div className="min-h-screen">
      <PaletteGenerator />
    </div>
  );
};

export default ColorPalette;