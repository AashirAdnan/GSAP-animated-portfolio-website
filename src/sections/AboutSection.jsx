import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";

const aboutParagraphs = [
  "I create digital experiences where thoughtful design meets smooth animation. Focused on building elegant systems, refined typography, and interactions that enhance - never distract from - the user's journey.",
];

const metrics = [
  ["Focus", "Frontend systems and interaction design"],
  ["Approach", "Clean code, premium motion, and accessible experiences"],
  ["Current", "Crafting cinematic and deliberate digital experiences"],
];

const stackItems = ["React", "Tailwind", "JavaScript", "HTML/CSS", "Git/GitHub", "UI/UX"];
const quickStats = [
  ["Based in", "Pakistan"],
  ["Primary lane", "Frontend"],
  ["Design language", "Minimal + Purposeful Motion"],
];

const AboutSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return undefined;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from("[data-about-panel]", {
          opacity: 0,
          y: 36,
          scale: 0.96,
          duration: 1,
        })
        .from(
          "[data-about-copy]",
          {
            opacity: 0,
            y: 28,
            duration: 0.8,
            stagger: 0.14,
          },
          "-=0.6",
        )
        .from(
          "[data-about-metric]",
          {
            opacity: 0,
            y: 18,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.45",
        );

      gsap.fromTo(
        "[data-about-visual]",
        {
          clipPath: "inset(18% 16% 18% 16% round 2rem)",
          scale: 0.9,
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 2rem)",
          scale: 1,
          ease: "power3.out",
          duration: 1.15,
          scrollTrigger: {
            trigger: "[data-about-visual-wrap]",
            start: "top 75%",
          },
        },
      );

      gsap.to("[data-about-float='slow']", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-about-float='deep']", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative px-5 py-24 transition-colors duration-500 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 lg:max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">About</p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.06em] text-zinc-900 transition-colors duration-500 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
            Building calm, elevated interfaces with motion that feels intentional.
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(300px,0.78fr)_minmax(0,1fr)] lg:items-start">
          <div data-about-visual-wrap className="relative lg:sticky lg:top-28">
            <div
              data-about-panel
              className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5"
            >
              <div className="absolute inset-0">
                <div
                  data-about-float="slow"
                  className="absolute left-6 top-6 h-20 w-20 rounded-full border border-zinc-200/70 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
                />
                <div
                  data-about-float="deep"
                  className="absolute bottom-10 right-10 h-32 w-32 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(79,107,255,0.18),rgba(79,107,255,0))]"
                />
              </div>

              <div
                data-about-visual
                className="relative min-h-[24rem] overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-[linear-gradient(145deg,#ffffff,#eef1f7)] p-6 shadow-md shadow-zinc-950/5 transition-colors duration-500 dark:border-zinc-800 dark:bg-[linear-gradient(145deg,#111117,#191925)] dark:shadow-none sm:min-h-[28rem] sm:p-8"
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                        Visual profile
                      </p>
                      <p className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-zinc-900 transition-colors duration-500 dark:text-zinc-100 sm:text-3xl">
                        Muhammad
                        <br />
                        Aashir Adnan
                      </p>
                      <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-600 transition-colors duration-500 dark:text-zinc-300">
                        Frontend Developer crafting motion-rich interfaces that feel precise, calm, and intuitive.
                      </p>
                    </div>
                    <div className="rounded-full border border-zinc-200 bg-white/85 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-zinc-500 shadow-sm md:shadow shadow-zinc-950/5 dark:border-zinc-700 dark:bg-white/[0.05] dark:text-zinc-400 dark:shadow-xl">
                      Frontend
                    </div>
                  </div>

                  <div className="mt-8 rounded-[1.35rem] border border-zinc-200 bg-white/78 p-4 shadow-sm md:shadow shadow-zinc-950/5 transition-colors duration-500 dark:border-zinc-700 dark:bg-white/[0.04] dark:shadow-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
                          Status
                        </p>
                        <p className="mt-2 text-base font-medium text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
                          Open to new opportunities
                        </p>
                      </div>
                      <span className="inline-flex h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(34,197,94,0.14)]" />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {stackItems.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-zinc-200 bg-white/82 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.24em] text-zinc-700 shadow-sm md:shadow shadow-zinc-950/5 transition-colors duration-500 dark:border-zinc-700 dark:bg-white/[0.04] dark:text-zinc-300 dark:shadow-xl"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      ["Motion-first", "Scroll-driven storytelling, refined micro-interactions, and intentional pacing."],
                      ["System-minded", "Building scalable systems with clean architecture and consistent detail."],
                    ].map(([title, copy]) => (
                      <div
                        key={title}
                        className="rounded-[1.35rem] border border-zinc-200 bg-white/75 p-4 shadow-sm md:shadow shadow-zinc-950/5 transition-colors duration-500 dark:border-zinc-700 dark:bg-white/[0.04] dark:shadow-xl"
                      >
                        <p className="text-xs uppercase tracking-[0.26em] text-accent">{title}</p>
                        <p className="mt-3 text-sm leading-7 text-zinc-600 transition-colors duration-500 dark:text-zinc-300">
                          {copy}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {quickStats.map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-[1.15rem] border border-zinc-200 bg-white/70 p-4 shadow-sm md:shadow shadow-zinc-950/5 transition-colors duration-500 dark:border-zinc-700 dark:bg-white/[0.03] dark:shadow-xl"
                      >
                        <p className="text-[0.62rem] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                          {label}
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:pt-10">
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                data-about-copy
                className="max-w-2xl text-lg leading-8 text-zinc-800 transition-colors duration-500 dark:text-zinc-300 sm:text-[1.15rem] sm:leading-9"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid gap-4 pt-6">
              {metrics.map(([label, value]) => (
                <div
                  key={label}
                  data-about-metric
                  className="rounded-[1.5rem] border border-zinc-200 bg-white/80 p-5 shadow-sm md:shadow shadow-zinc-950/5 transition-colors duration-500 dark:border-zinc-700 dark:bg-white/[0.04] dark:shadow-xl sm:p-6"
                >
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
                    {label}
                  </p>
                  <p className="mt-3 text-base leading-8 text-zinc-900 transition-colors duration-500 dark:text-zinc-100 sm:text-lg">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
