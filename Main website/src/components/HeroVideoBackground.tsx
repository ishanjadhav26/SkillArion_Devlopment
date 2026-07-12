import { useEffect, useRef } from "react";
import heroVideo from "@/assets/logo-animation.mp4.asset.json";

export function HeroVideoBackground({
  overlayClassName = "bg-black/30",
  videoFit = "cover",
}: {
  overlayClassName?: string;
  videoFit?: "cover" | "contain";
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {videoFit === "contain" ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-full" style={{ aspectRatio: "16 / 9" }}>
            <video
              ref={ref}
              className="absolute inset-0 h-full w-full object-contain"
              src={heroVideo.url}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              tabIndex={-1}
            />
          </div>
        </div>
      ) : (
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
        />
      )}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
