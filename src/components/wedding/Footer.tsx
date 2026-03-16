const Footer = () => {
  return (
    <footer className="py-16 px-6 text-center">
      <div className="max-w-md mx-auto">
        {/* Floral divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-16 h-px bg-primary/20"></div>
          <svg className="w-5 h-5 text-primary/30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div className="w-16 h-px bg-primary/20"></div>
        </div>

        <p className="font-script text-primary text-3xl md:text-4xl mb-4">Thank You</p>
        <p className="font-body text-muted-foreground text-sm mb-6">
          We are grateful for your love and support as we begin this beautiful journey together.
        </p>

        <p className="font-display text-primary/50 tracking-[0.3em] text-sm">
          #DharmikAndJigisha
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 opacity-20">
          <div className="w-8 h-px bg-primary"></div>
          <p className="font-body text-muted-foreground text-xs">D & J · 2026</p>
          <div className="w-8 h-px bg-primary"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
