import { useState } from "react";

interface EnvelopeLandingProps {
  onOpen: () => void;
}

const EnvelopeLanding = ({ onOpen }: EnvelopeLandingProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => onOpen(), 1600);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Floral corners */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-30 animate-float">
        <svg viewBox="0 0 200 200" className="w-full h-full text-secondary">
          <path d="M10,100 Q30,20 100,10 Q50,50 40,100 Q30,50 10,100Z" fill="currentColor" opacity="0.5"/>
          <path d="M20,120 Q50,40 120,20 Q70,60 50,120 Q40,60 20,120Z" fill="currentColor" opacity="0.3"/>
          <circle cx="30" cy="40" r="8" fill="hsl(var(--wedding-blush))" opacity="0.6"/>
          <circle cx="60" cy="25" r="5" fill="hsl(var(--wedding-gold))" opacity="0.4"/>
          <circle cx="15" cy="70" r="6" fill="hsl(var(--wedding-blush))" opacity="0.5"/>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-30 animate-float animation-delay-400" style={{ transform: 'scaleX(-1)' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full text-secondary">
          <path d="M10,100 Q30,20 100,10 Q50,50 40,100 Q30,50 10,100Z" fill="currentColor" opacity="0.5"/>
          <path d="M20,120 Q50,40 120,20 Q70,60 50,120 Q40,60 20,120Z" fill="currentColor" opacity="0.3"/>
          <circle cx="30" cy="40" r="8" fill="hsl(var(--wedding-blush))" opacity="0.6"/>
          <circle cx="60" cy="25" r="5" fill="hsl(var(--wedding-gold))" opacity="0.4"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-30 animate-float animation-delay-800" style={{ transform: 'scaleY(-1)' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full text-secondary">
          <path d="M10,100 Q30,20 100,10 Q50,50 40,100 Q30,50 10,100Z" fill="currentColor" opacity="0.5"/>
          <circle cx="30" cy="40" r="8" fill="hsl(var(--wedding-blush))" opacity="0.6"/>
          <circle cx="50" cy="60" r="6" fill="hsl(var(--wedding-sage))" opacity="0.4"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-30 animate-float animation-delay-600" style={{ transform: 'scale(-1)' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full text-secondary">
          <path d="M10,100 Q30,20 100,10 Q50,50 40,100 Q30,50 10,100Z" fill="currentColor" opacity="0.5"/>
          <circle cx="30" cy="40" r="8" fill="hsl(var(--wedding-blush))" opacity="0.6"/>
        </svg>
      </div>

      {/* Envelope */}
      <div
        className="relative cursor-pointer group"
        onClick={handleClick}
        role="button"
        aria-label="Open wedding invitation"
      >
        <div className="relative w-64 h-44 md:w-80 md:h-56">
          {/* Envelope body */}
          <div className="absolute inset-0 rounded-lg shadow-xl bg-gradient-to-b from-[hsl(var(--wedding-cream))] to-[hsl(var(--muted))] border border-primary/20">
            {/* Inner triangle pattern */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 224" preserveAspectRatio="none">
              <path d="M0,0 L160,100 L320,0" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3"/>
            </svg>
          </div>

          {/* Envelope flap */}
          <div
            className={`absolute top-0 left-0 right-0 h-1/2 origin-top ${isOpening ? 'animate-envelope-flap' : ''}`}
            style={{ transformStyle: 'preserve-3d', perspective: '800px' }}
          >
            <svg className="w-full h-full drop-shadow-md" viewBox="0 0 320 112" preserveAspectRatio="none">
              <path d="M0,0 L160,112 L320,0 Z" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.9"/>
            </svg>
          </div>

          {/* Invitation card inside */}
          <div className={`absolute left-4 right-4 top-4 bottom-4 rounded bg-background border border-primary/20 flex flex-col items-center justify-center ${isOpening ? 'animate-card-slide' : ''}`}>
            <p className="font-script text-primary text-lg md:text-xl">You're Invited</p>
            <div className="w-12 h-px bg-primary/40 my-1.5"></div>
            <p className="font-display text-foreground/70 text-xs tracking-widest uppercase">Alayza & John</p>
          </div>

          {/* Wax seal */}
          <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-300 ${isOpening ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[hsl(var(--wedding-rose))] to-[hsl(var(--destructive))] shadow-lg flex items-center justify-center border-2 border-[hsl(var(--wedding-rose))]/30">
              <span className="font-script text-background text-lg md:text-xl">A&J</span>
            </div>
          </div>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5 -m-2"></div>
      </div>

      {/* Click to Open text */}
      <p className={`mt-10 font-display text-muted-foreground tracking-[0.3em] uppercase text-sm animate-pulse-soft transition-opacity duration-300 ${isOpening ? 'opacity-0' : 'opacity-100'}`}>
        Click to Open
      </p>

      {/* Decorative line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-30">
        <div className="w-16 h-px bg-primary"></div>
        <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <div className="w-16 h-px bg-primary"></div>
      </div>
    </div>
  );
};

export default EnvelopeLanding;
