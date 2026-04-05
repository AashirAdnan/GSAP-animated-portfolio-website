import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

const brandParts = ["Muhammad", "Aashir", "Adnan"];

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const completedRef = useRef(false);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        completedRef.current = true;
        onComplete();
        return undefined;
      }

      const finish = () => {
        if (completedRef.current) {
          return;
        }

        completedRef.current = true;
        onComplete();
      };

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
        onComplete: finish,
      });

      timeline
        .from("[data-loader-panel]", {
          yPercent: 100,
          duration: 1,
          stagger: 0.08,
        })
        .from(
          "[data-loader-word]",
          {
            yPercent: 120,
            opacity: 0,
            duration: 0.9,
            stagger: 0.08,
          },
          "-=0.55",
        )
        .from(
          "[data-loader-copy]",
          {
            opacity: 0,
            y: 18,
            duration: 0.7,
          },
          "-=0.4",
        )
        .to(
          "[data-loader-progress]",
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 1.15,
            ease: "power2.inOut",
          },
          "-=0.25",
        )
        .to(
          "[data-loader-word]",
          {
            yPercent: -110,
            opacity: 0,
            duration: 0.7,
            stagger: 0.05,
          },
          "+=0.15",
        )
        .to(
          "[data-loader-copy]",
          {
            opacity: 0,
            y: -12,
            duration: 0.45,
          },
          "<",
        )
        .to(
          preloaderRef.current,
          {
            clipPath: "inset(0 0 100% 0 round 0rem)",
            duration: 1.05,
            ease: "power4.inOut",
          },
          "-=0.1",
        );

      return () => {
        timeline.kill();
      };
    },
    { scope: preloaderRef },
  );

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] overflow-hidden bg-[#050507] text-white"
    >
      <div className="absolute inset-0">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            data-loader-panel
            className="absolute bottom-0 top-0 w-[34%] border-r border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))]"
            style={{ left: `${index * 33.33}%` }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
          <span>Loading portfolio</span>
          <span>2026 edition</span>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            {brandParts.map((part) => (
              <div key={part} className="overflow-hidden">
                <div
                  data-loader-word
                  className="text-5xl font-semibold leading-none tracking-[-0.08em] text-white sm:text-7xl lg:text-[7rem]"
                >
                  {part}
                </div>
              </div>
            ))}
          </div>

          <p
            data-loader-copy
            className="max-w-xl text-sm leading-7 text-white/58 sm:text-base"
          >
            Building the portfolio of Muhammad Aashir Adnan with refined motion,
            cinematic pacing, and thoughtful frontend craft.
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-px overflow-hidden bg-white/10">
            <div data-loader-progress className="h-full origin-left scale-x-0 bg-white" />
          </div>
          <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
            <span>Preparing experience</span>
            <span>Stand by</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
