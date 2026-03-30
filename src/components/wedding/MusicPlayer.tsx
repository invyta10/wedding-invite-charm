import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    // Attempt autoplay on first load (may be blocked by browser).
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));

    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} preload="metadata">
        <source src="/music/audio/ed_sheeren_perfect.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-card/80 text-primary shadow-lg backdrop-blur transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        {isPlaying ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg className="h-5 w-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
