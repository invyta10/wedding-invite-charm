import { useEffect, useRef, useState } from "react";

type ScratchCoinProps = {
  label: string;
  value: string;
  onReveal?: () => void;
};

const ScratchCoin = ({ label, value, onReveal }: ScratchCoinProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const draw = () => {
      const size = Math.min(wrapper.clientWidth, wrapper.clientHeight);
      const ratio = window.devicePixelRatio || 1;
      canvas.width = size * ratio;
      canvas.height = size * ratio;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(ratio, ratio);

      // Draw coin cover
      ctx.clearRect(0, 0, size, size);
      ctx.save();
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.clip();

      const radial = ctx.createRadialGradient(size * 0.35, size * 0.28, 10, size / 2, size / 2, size / 2);
      radial.addColorStop(0, "rgba(255, 245, 210, 0.98)");
      radial.addColorStop(0.35, "rgba(245, 206, 132, 0.98)");
      radial.addColorStop(1, "rgba(198, 140, 52, 0.98)");
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, size, size);

      ctx.globalAlpha = 0.35;
      ctx.strokeStyle = "rgba(255,255,255,0.7)";
      ctx.lineWidth = 2;
      for (let i = 0; i < 10; i += 1) {
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size * 0.13 + i * (size * 0.028), 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      ctx.restore();
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  const scratchAt = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isRevealed) return;
    setIsScratching(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    const rect = e.currentTarget.getBoundingClientRect();
    scratchAt(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isScratching || isRevealed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    scratchAt(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isScratching) return;
    setIsScratching(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = canvas.width;
    const image = ctx.getImageData(0, 0, size, size).data;
    let cleared = 0;
    for (let i = 3; i < image.length; i += 4) {
      if (image[i] === 0) cleared += 1;
    }
    const percent = cleared / (size * size);
    if (percent > 0.35) {
      setIsRevealed(true);
      onReveal?.();
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div ref={wrapperRef} className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full rounded-full border border-primary/25 shadow-[0_10px_25px_-18px_rgba(0,0,0,0.6)] flex items-center justify-center text-center">
            <div>
              <div className="font-script text-primary text-2xl md:text-3xl">{value}</div>
              <div className="font-display text-[11px] md:text-xs tracking-[0.3em] uppercase text-foreground/60 mt-1">
                {label}
              </div>
            </div>
          </div>
        </div>
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 z-10 rounded-full shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)] cursor-pointer transition-opacity duration-300 ${isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{ touchAction: "none" }}
          aria-label={`Scratch to reveal ${label}`}
        />
      </div>
    </div>
  );
};

const DateRevealScratch = () => {
  const [revealedCount, setRevealedCount] = useState(0);
  const allRevealed = revealedCount >= 3;

  const handleReveal = () => {
    setRevealedCount((prev) => Math.min(3, prev + 1));
  };

  return (
    <section className="py-20 px-6 flex justify-center">
      <div className="relative w-full max-w-4xl mx-auto text-center rounded-3xl py-12 px-6 overflow-hidden">
        <p className="font-script text-primary text-3xl md:text-4xl mb-2 animate-fade-in-up">Reveal</p>
        <div className="w-20 h-px bg-primary/30 mx-auto mb-4 animate-fade-in-up animation-delay-200"></div>
        <p className="font-body text-muted-foreground mb-10 animate-fade-in-up animation-delay-200">
          {allRevealed ? "Save the date — December 20, 2026" : "Scratch to reveal the date"}
        </p>

        <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
          <ScratchCoin label="Day" value="20" onReveal={handleReveal} />
          <ScratchCoin label="Month" value="December" onReveal={handleReveal} />
          <ScratchCoin label="Year" value="2026" onReveal={handleReveal} />
        </div>
      </div>
    </section>
  );
};

export default DateRevealScratch;
