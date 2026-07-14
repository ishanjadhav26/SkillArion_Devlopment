import { useEffect, useRef, useState } from "react";

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
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {videoFit === "contain" ? (
        <div className="absolute inset-0 flex items-center pb-48 justify-center md:pb-0 md:justify-end md:-mr-[2%] lg:-mr-[2%]">
          <div 
            className="relative w-full max-w-xl lg:max-w-3xl xl:max-w-4xl aspect-video opacity-40 md:opacity-100 mix-blend-screen"
            style={{ 
              maskImage: "radial-gradient(ellipse at center, black 45%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 45%, transparent 70%)",
            }}
          >
            <video
              ref={ref}
              className="absolute inset-0 h-full w-full rounded-[4rem] object-cover md:object-contain"
              src="/Skillarion_Development_logo_reveal.mp4"
              autoPlay
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
