import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import useMagnetic from "../hooks/useMagnetic";

const eyebrow = "Creative developer based in Pakistan";
const titleLines = ["Designing motion-first", "digital experiences"];

const HeroSection = () => {
  const sectionRef = useRef(null);
  const ctaRef = useMagnetic(18);

  const handleNavigate = (event, href) => {
    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();

    gsap.to(window, {
      duration: 1.2,
      ease: "power3.inOut",
      scrollTo: {
        y: target,
        offsetY: 28,
      },
    });
  };

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        return undefined;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from("[data-hero-fade]", {
          opacity: 0,
          y: 24,
          duration: 0.9,
          stagger: 0.1,
        })
        .from(
          "[data-hero-word]",
          {
            yPercent: 110,
            rotateX: -16,
            transformOrigin: "50% 100%",
            duration: 1,
            stagger: 0.08,
          },
          "-=0.5",
        )
        .from(
          "[data-hero-shape]",
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            stagger: 0.12,
          },
          "-=1",
        );

      gsap.to("[data-parallax='soft']", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-parallax='deep']", {
        yPercent: -24,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        timeline.kill();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-grid relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          data-hero-shape
          data-parallax="soft"
          className="absolute left-[8%] top-28 h-24 w-24 rounded-full border border-zinc-200/80 bg-white/70 blur-[2px] dark:border-white/10 dark:bg-white/[0.03]"
        />
        <div
          data-hero-shape
          data-parallax="deep"
          className="absolute right-[10%] top-20 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(119,122,255,0.22),rgba(119,122,255,0))]"
        />
        <div
          data-hero-shape
          data-parallax="soft"
          className="absolute bottom-16 right-[22%] h-32 w-32 rotate-12 rounded-[2rem] border border-zinc-200/80 bg-white/60 dark:border-white/8 dark:bg-white/[0.02]"
        />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col justify-between gap-16">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.65fr)] lg:items-end">
          <div className="max-w-4xl">
            <div
              data-hero-fade
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white/85 px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-zinc-500 shadow-sm shadow-zinc-950/5 backdrop-blur-xl transition-colors duration-500 dark:border-zinc-800 dark:bg-white/[0.045] dark:text-zinc-400 dark:shadow-none sm:text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              {eyebrow}
            </div>

            <div className="space-y-4 py-3 sm:space-y-5 sm:py-4">
              {titleLines.map((line) => (
                <div key={line} className="overflow-hidden px-1 py-[0.22em]">
                  <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.065em] text-ink [font-family:var(--font-display)] sm:text-7xl lg:text-[7rem]">
                    {line.split(" ").map((word) => (
                      <span
                        key={`${line}-${word}`}
                        className="mr-[0.28em] inline-block overflow-hidden pb-[0.14em]"
                      >
                        <span
                          data-hero-word
                          className="inline-block will-change-transform"
                        >
                          {word}
                        </span>
                      </span>
                    ))}
                  </h1>
                </div>
              ))}
            </div>

            <p
              data-hero-fade
              className="mt-8 max-w-2xl text-pretty text-base leading-7 text-zinc-600 transition-colors duration-500 dark:text-zinc-300 sm:text-lg sm:leading-8"
            >
              I build elegant interfaces with deliberate motion, refined
              systems, and cinematic storytelling for ambitious brands and
              products.
            </p>

            <div
              data-hero-fade
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <div ref={ctaRef}>
                <a
                  href="#about"
                  onClick={(event) => handleNavigate(event, "#about")}
                  className="group inline-flex items-center gap-3 rounded-full border border-zinc-950 bg-zinc-950 px-6 py-3 text-sm font-medium text-white shadow-sm md:shadow shadow-zinc-950/10 transition-[background-color,box-shadow,transform,border-color] duration-300 hover:border-zinc-800 hover:bg-zinc-800 hover:shadow-md dark:border-zinc-900 dark:bg-zinc-950 dark:text-white dark:shadow-xl dark:hover:border-zinc-800 dark:hover:bg-zinc-800"
                >
                  <span className="text-white">About me</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition duration-300 group-hover:translate-x-1 dark:bg-black/10">
                    &rarr;
                  </span>
                </a>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white/90 px-6 py-3 text-sm font-medium text-zinc-800 shadow-sm md:shadow shadow-zinc-950/5 transition duration-300 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-300 dark:shadow-xl dark:hover:border-zinc-600 dark:hover:bg-white/[0.04] dark:hover:text-zinc-100"
              >
                Start a conversation
              </a>
            </div>
          </div>

          <div data-hero-fade className="lg:justify-self-end">
            <div className="glass-panel max-w-md rounded-[2rem] p-5 sm:p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-zinc-500 transition-colors duration-500 dark:text-zinc-400">
                <span>Selected focus</span>
                <span>2026</span>
              </div>

              <div className="mt-8 space-y-6">
                {[
                  [
                    "UI systems",
                    "Designing flexible component libraries with feel and restraint.",
                  ],
                  [
                    "GSAP motion",
                    "Building scroll narratives that stay smooth on real devices.",
                  ],
                  [
                    "Frontend craft",
                    "Shipping accessible products with strong visual hierarchy.",
                  ],
                ].map(([title, copy], index) => (
                  <div
                    key={title}
                    className="border-t border-zinc-200 pt-5 first:border-t-0 first:pt-0 dark:border-zinc-800"
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <p className="text-sm uppercase tracking-[0.22em] text-accent">
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-zinc-600 transition-colors duration-500 dark:text-zinc-300 sm:text-[0.95rem]">
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          data-hero-fade
          className="grid gap-5 border-t border-zinc-200 pt-8 text-sm text-zinc-500 transition-colors duration-500 dark:border-zinc-800 dark:text-zinc-400 sm:grid-cols-3"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.28em]">Currently</p>
            <p className="mt-2 text-base text-zinc-700 transition-colors duration-500 dark:text-zinc-300">
              Crafting immersive portfolio experiences
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em]">Availability</p>
            <p className="mt-2 text-base text-zinc-700 transition-colors duration-500 dark:text-zinc-300">
              Open for select freelance and product work
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em]">Speciality</p>
            <p className="mt-2 text-base text-zinc-700 transition-colors duration-500 dark:text-zinc-300">
              Motion systems, interactions, and premium frontend builds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
