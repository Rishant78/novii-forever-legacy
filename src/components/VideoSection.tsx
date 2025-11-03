import { Card } from "@/components/ui/card";

interface VideoSectionProps {
  title: string;
  videoUrl?: string;
  placeholderText?: string;
}

const VideoSection = ({ title, videoUrl, placeholderText = "Video will be added here" }: VideoSectionProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-16 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-elegant text-center mb-8 text-foreground">
        {title}
      </h2>
      <Card className="overflow-hidden shadow-[var(--shadow-soft)] border-border/50 bg-card/80 backdrop-blur-sm">
        {videoUrl ? (
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="aspect-video flex items-center justify-center bg-secondary/30">
            <p className="text-muted-foreground text-center px-8">
              {placeholderText}
              <br />
              <span className="text-sm mt-2 block">
                (Upload your video and add the embed URL here)
              </span>
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default VideoSection;
