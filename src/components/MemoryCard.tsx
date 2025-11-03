import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";

interface MemoryCardProps {
  imageUrl?: string;
  caption: string;
  placeholderText?: string;
}

const MemoryCard = ({ imageUrl, caption, placeholderText = "Add photo here" }: MemoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary/30">
              <p className="text-muted-foreground text-sm">{placeholderText}</p>
            </div>
          )}
          <Heart
            className={`absolute top-4 right-4 transition-all duration-300 ${
              isHovered
                ? "fill-primary text-primary scale-125 animate-heart-beat"
                : "text-white/70"
            }`}
            size={24}
          />
        </div>
        <div className="p-4">
          <p className="text-center text-sm font-elegant text-foreground/80">{caption}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemoryCard;
