import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

const projects = [
  {
    title: "Motion Portfolio",
    type: "Portfolio Experience",
    year: "2026",
    description:
      "A cinematic personal portfolio built around rhythm, strong typography, and scroll-led storytelling.",
    tags: ["React", "GSAP", "Tailwind"],
    gradient: "from-[#6f79ff]/40 via-[#9fb0ff]/18 to-transparent",
  },
  {
    title: "Luxe Product Story",
    type: "Landing System",
    year: "2025",
    description:
      "A premium launch page blending product clarity with layered reveals, soft parallax, and polished interactions.",
    tags: ["UI/UX", "Interaction", "Frontend"],
    gradient: "from-[#1f2937]/35 via-[#7c8ca8]/18 to-transparent",
  },
  {
    title: "Design System Canvas",
    type: "Component Platform",
    year: "2025",
    description:
      "A scalable interface foundation with refined cards, consistent motion language, and responsive component logic.",
    tags: ["Design System", "Accessibility", "Structure"],
    gradient: "from-[#5b8cff]/30 via-[#c8d4ff]/16 to-transparent",
  },
  {
    title: "Editorial Scroll Lab",
    type: "Experimental Build",
    year: "2024",
    description:
      "An editorial-inspired web experience focused on atmospheric layouts, progressive reveals, and careful pacing.",
    tags: ["Storytelling", "ScrollTrigger", "Layout"],
    gradient: "from-[#2c3e50]/35 via-[#b7c3d0]/14 to-transparent",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        return undefined;
      }

      gsap.from("[data-projects-intro]", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from("[data-project-card]", {
        opacity: 0,
        y: 34,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-projects-grid]",
          start: "top 78%",
        },
      });

      const cards = gsap.utils.toArray("[data-project-card]");
      const cleanups = cards.map((card) => {
        const media = card.querySelector("[data-project-media]");
        const overlay = card.querySelector("[data-project-overlay]");
        const meta = card.querySelector("[data-project-meta]");

        const enter = () => {
          gsap.to(media, {
            scale: 1.04,
            duration: 0.55,
            ease: "power3.out",
          });
          gsap.to(overlay, {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power3.out",
          });
          gsap.to(meta, {
            y: -6,
            duration: 0.45,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(media, {
            scale: 1,
            duration: 0.55,
            ease: "power3.out",
          });
          gsap.to(overlay, {
            y: 16,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(meta, {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        card.addEventListener("pointerenter", enter);
        card.addEventListener("pointerleave", leave);

        return () => {
          card.removeEventListener("pointerenter", enter);
          card.removeEventListener("pointerleave", leave);
        };
      });

      return () => {
        cleanups.forEach((cleanup) => cleanup());
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative px-5 py-24 transition-colors duration-500 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div
          data-projects-intro
          className="mb-12 flex flex-col gap-5 lg:max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Projects
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.06em] text-zinc-900 transition-colors duration-500 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
            Selected work shaped around motion, structure, and premium
            interaction.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-zinc-700 transition-colors duration-500 dark:text-zinc-300 sm:text-[1.1rem] sm:leading-9">
            These featured builds reflect the way I approach frontend work:
            visual restraint, strong systems, and animation that strengthens the
            experience rather than competing with it.
          </p>
        </div>

        <div data-projects-grid className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              data-project-card
              className="group glass-panel overflow-hidden rounded-[2rem]"
            >
              <div className="relative min-h-[21rem] overflow-hidden p-4 sm:min-h-[24rem] sm:p-5">
                <div
                  data-project-media
                  className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.6rem] border border-zinc-200/80 bg-[linear-gradient(145deg,#ffffff,#eef1f7)] p-6 shadow-sm md:shadow shadow-zinc-950/5 transition-colors duration-500 dark:border-zinc-700 dark:bg-[linear-gradient(145deg,#111117,#191925)] dark:shadow-xl sm:p-7"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/10 via-transparent to-transparent dark:from-black/35" />

                  <div
                    data-project-meta
                    className="relative z-10 flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.28em] text-zinc-500 transition-colors duration-500 dark:text-zinc-400">
                        {project.type}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-zinc-900 transition-colors duration-500 dark:text-zinc-100 sm:text-[2rem]">
                        {project.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-zinc-200 bg-white/85 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-zinc-500 shadow-sm md:shadow shadow-zinc-950/5 dark:border-zinc-700 dark:bg-white/[0.05] dark:text-zinc-400 dark:shadow-xl">
                      {project.year}
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200 bg-white/82 px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.24em] text-zinc-700 shadow-sm md:shadow shadow-zinc-950/5 transition-colors duration-500 dark:border-zinc-700 dark:bg-white/[0.04] dark:text-zinc-300 dark:shadow-xl"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    data-project-overlay
                    className="pointer-events-none absolute inset-x-6 bottom-6 z-20 translate-y-4 rounded-[1.35rem] border border-zinc-200 bg-white/92 p-4 opacity-0 shadow-md shadow-zinc-950/8 transition-colors duration-500 dark:border-zinc-700 dark:bg-black/55 dark:shadow-xl sm:inset-x-7 sm:bottom-7"
                  >
                    <p className="text-sm leading-7 text-zinc-800 transition-colors duration-500 dark:text-zinc-200">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
