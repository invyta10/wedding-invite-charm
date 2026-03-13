const placeholders = [
  { gradient: "from-[hsl(var(--wedding-blush))] to-[hsl(var(--secondary))]", label: "Together" },
  { gradient: "from-[hsl(var(--wedding-sage))] to-[hsl(var(--accent))]", label: "The Proposal" },
  { gradient: "from-[hsl(var(--wedding-gold))]/40 to-[hsl(var(--primary))]/30", label: "Our Journey" },
  { gradient: "from-[hsl(var(--secondary))] to-[hsl(var(--wedding-blush))]", label: "Forever" },
  { gradient: "from-[hsl(var(--accent))] to-[hsl(var(--wedding-sage))]", label: "Love Story" },
  { gradient: "from-[hsl(var(--wedding-blush))] to-[hsl(var(--wedding-gold))]/40", label: "Soulmates" },
];

const GallerySection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-script text-primary text-3xl md:text-4xl mb-2 animate-fade-in-up">Our Gallery</p>
        <div className="w-20 h-px bg-primary/30 mx-auto mb-12 animate-fade-in-up animation-delay-200"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {placeholders.map((item, index) => (
            <div
              key={item.label}
              className="animate-fade-in-up group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-110`}></div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 mx-auto mb-2 text-background/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="font-display text-background/80 text-xs tracking-wider uppercase">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 font-body text-muted-foreground text-sm italic animate-fade-in-up animation-delay-1000">
          Photos will be updated soon
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
