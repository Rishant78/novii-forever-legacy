import { Heart } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import VideoSection from "@/components/VideoSection";
import MemoryCard from "@/components/MemoryCard";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <Heart className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 text-primary animate-glow fill-primary" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-cursive mb-4 text-foreground">
            Happy Birthday, my dearest
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-cursive text-primary animate-glow mb-8">
            Sirjana💖
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <VideoSection
            title="Our First Memory Video"
            placeholderText="Upload your first memory video here"
          />
          <VideoSection
            title="Final Goodbyes — My Last Gift to You"
            placeholderText="Upload your final message video here"
          />
        </div>
      </section>

      {/* Memories Gallery */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-secondary/30 to-transparent relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-elegant text-center mb-4 text-foreground animate-fade-in">
            Memories Gallery
          </h2>
          <p className="text-center text-muted-foreground mb-12 font-elegant">
            Every moment with you is a treasure
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MemoryCard
              caption="The first time I saw your smile"
            />
            <MemoryCard
              caption="Our favorite moments together"
            />
            <MemoryCard
              caption="When everything felt perfect"
            />
            <MemoryCard
              caption="Your laugh that lights up my world"
            />
            <MemoryCard
              caption="The day I realized you were special"
            />
            <MemoryCard
              caption="Memories that will last forever"
            />
          </div>
        </div>
      </section>

      {/* Letter Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-elegant text-center mb-12 text-foreground animate-fade-in">
            Letter from Rishant
          </h2>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-[var(--shadow-soft)] border border-border/50">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground/90 font-elegant mb-6">
                My dearest Sirjana,
              </p>
              <p className="text-base leading-relaxed text-foreground/80 mb-4">
                Words cannot express how much you mean to me. Every moment we've shared has been a precious gift, 
                a memory I hold close to my heart. You've brought light into my life in ways I never imagined possible.
              </p>
              <p className="text-base leading-relaxed text-foreground/80 mb-4">
                Your smile, your laughter, your kindness – they've all shaped who I am today. Even though life takes 
                us on different paths, please know that you'll always have a special place in my heart.
              </p>
              <p className="text-base leading-relaxed text-foreground/80 mb-4">
                This website is my way of keeping our memories alive, of celebrating you and everything you've meant 
                to me. I hope it brings you joy, just as you've brought joy to my life.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 font-elegant mt-8">
                Forever grateful,<br />
                Rishant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-20 px-4 bg-gradient-to-t from-secondary/30 to-transparent relative">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 mx-auto mb-6 text-primary animate-glow fill-primary" />
          <p className="text-2xl md:text-3xl font-cursive text-foreground/90 leading-relaxed">
            "No matter where you are, Sirjana…<br />
            you'll always live in my heart."
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground">
        <p>Made with love by Rishant 💖</p>
      </footer>
    </div>
  );
};

export default Index;
