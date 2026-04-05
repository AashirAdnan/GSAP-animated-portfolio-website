import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

const skillGroups = [
  {
    title: "Frontend Foundations",
    accent: "Core",
    description:
      "Building responsive interfaces with strong structure, accessible markup, and clean visual hierarchy.",
    skills: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Design Systems",
    accent: "Structure",
    description:
      "Creating reusable UI patterns with consistency, restraint, and detail that scales across screens.",
    skills: ["Tailwind", "UI/UX", "Component Thinking"],
  },
  {
    title: "Workflow and Delivery",
    accent: "Process",
    description:
      "Shipping polished work with version control, iteration discipline, and a focus on reliable implementation.",
    skills: ["Git/GitHub", "Collaboration", "Refinement"],
  },
];

const marqueeItems = [
  "React",
  "Tailwind",
  "JavaScript",
  "HTML/CSS",
  "Git/GitHub",
  "UI/UX",
  "Motion Systems",
  "Responsive Build",
];

const SkillsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return undefined;
      }

      gsap.from("[data-skills-intro]", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from("[data-skill-card]", {
        opacity: 0,
        y: 32,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-skills-grid]",
          start: "top 78%",
        },
      });

      gsap.from("[data-skill-pill]", {
        opacity: 0,
        y: 14,
        scale: 0.96,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-skills-grid]",
          start: "top 76%",
        },
      });

      gsap.to("[data-skills-marquee]", {
        xPercent: -50,
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
      id="skills"
      className="relative overflow-hidden px-5 py-24 transition-colors duration-500 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div
          data-skills-intro
          className="mb-12 flex flex-col gap-5 lg:max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Skills</p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.06em] text-zinc-900 transition-colors duration-500 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
            A toolkit built around clarity, motion, and frontend craft.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-zinc-700 transition-colors duration-500 dark:text-zinc-300 sm:text-[1.1rem] sm:leading-9">
            I use a focused stack that supports clean interaction design, scalable implementation,
            and interfaces that feel polished in motion as well as at rest.
          </p>
        </div>

        <div className="relative mb-10 overflow-hidden rounded-full border border-zinc-200 bg-white/80 py-4 shadow-sm md:shadow shadow-zinc-950/5 transition-colors duration-500 dark:border-zinc-700 dark:bg-white/[0.04] dark:shadow-xl">
          <div
            data-skills-marquee
            className="flex w-[200%] min-w-max items-center"
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="mx-3 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-[0.72rem] uppercase tracking-[0.26em] text-zinc-700 transition-colors duration-500 dark:border-zinc-700 dark:bg-white/[0.04] dark:text-zinc-300"
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div data-skills-grid className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              data-skill-card
              className="glass-panel rounded-[2rem] p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.72rem] uppercase tracking-[0.3em] text-accent">
                  {group.accent}
                </p>
                <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
                {group.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-700 transition-colors duration-500 dark:text-zinc-300 sm:text-[0.98rem]">
                {group.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    data-skill-pill
                    className="rounded-full border border-zinc-200 bg-white/88 px-3.5 py-1.5 text-[0.68rem] uppercase tracking-[0.24em] text-zinc-700 shadow-sm md:shadow shadow-zinc-950/5 transition-colors duration-500 dark:border-zinc-700 dark:bg-white/[0.04] dark:text-zinc-300 dark:shadow-xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
