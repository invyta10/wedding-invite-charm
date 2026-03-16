const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background floral decorations */}
      <div className="absolute top-10 left-10 w-24 h-24 opacity-15 animate-float">
        <svg viewBox="0 0 100 100" fill="hsl(var(--wedding-blush))">
          <circle cx="50" cy="30" r="12"/><circle cx="35" cy="50" r="10"/><circle cx="65" cy="50" r="10"/><circle cx="50" cy="50" r="8" fill="hsl(var(--wedding-gold))"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-20 h-20 opacity-15 animate-float animation-delay-600">
        <svg viewBox="0 0 100 100" fill="hsl(var(--wedding-sage))">
          <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(30 50 50)"/><ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(-30 50 50)"/>
        </svg>
      </div>

      {/* Content */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="animate-fade-in-up font-display text-muted-foreground tracking-[0.4em] uppercase text-xs md:text-sm mb-6">
          Together with their families
        </p>

        <h1 className="animate-fade-in-up animation-delay-200 font-script text-5xl md:text-7xl lg:text-8xl text-primary leading-tight">
          Dharmik
        </h1>

        <div className="animate-fade-in-up animation-delay-400 flex items-center justify-center gap-4 my-4">
          <div className="w-16 md:w-24 h-px bg-primary/40"></div>
          <span className="font-display text-primary/60 text-xl md:text-2xl italic">&</span>
          <div className="w-16 md:w-24 h-px bg-primary/40"></div>
        </div>

        <h1 className="animate-fade-in-up animation-delay-400 font-script text-5xl md:text-7xl lg:text-8xl text-primary leading-tight">
          Jigisha
        </h1>

        <div className="animate-fade-in-up animation-delay-600 mt-8">
          <p className="font-display text-muted-foreground tracking-[0.3em] uppercase text-xs mb-2">
            Request the pleasure of your company
          </p>
          <p className="font-display text-muted-foreground tracking-[0.3em] uppercase text-xs">
            at the celebration of their marriage
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-800 mt-10 flex flex-col items-center">
          <div className="w-px h-8 bg-primary/30"></div>
          <div className="mt-4 border border-primary/20 rounded-lg px-8 py-4 bg-card/50">
            <p className="font-display text-foreground text-lg md:text-xl tracking-wider">
              Saturday, December 20, 2026
            </p>
            <p className="font-body text-muted-foreground text-sm mt-1">
              At Four O'Clock in the Afternoon
            </p>
          </div>
        </div>

        {/* Decorative floral divider */}
        <div className="animate-fade-in-up animation-delay-1000 mt-12 flex items-center justify-center gap-2">
          <svg className="w-6 h-6 text-primary/30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
