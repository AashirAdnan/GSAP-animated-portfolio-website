import { useRef, useState } from "react";
import { gsap, useGSAP } from "../lib/gsap";

const contactLinks = [
  ["Email", "m.aashiradnan@gmail.com"],
  ["Phone", "+92 327 5394667"],
  ["Location", "ISL | Pakistan"],
];

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        return undefined;
      }

      gsap.from("[data-contact-intro]", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76%",
        },
      });

      gsap.from("[data-contact-card]", {
        opacity: 0,
        y: 30,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-contact-grid]",
          start: "top 78%",
        },
      });
    },
    { scope: sectionRef },
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "https://gsap-animated-portfolio-website-production.up.railway.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        // Success - message sent
        setIsSubmitted(true);
      } else {
        // Error
        setIsSubmitted(false);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setIsSubmitted(false);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative px-5 py-24 transition-colors duration-500 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div
          data-contact-intro
          className="mb-12 flex flex-col gap-5 lg:max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Contact
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.06em] text-zinc-900 transition-colors duration-500 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
            Let&apos;s build something deliberate, polished, and memorable.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-zinc-700 transition-colors duration-500 dark:text-zinc-300 sm:text-[1.1rem] sm:leading-9">
            If you&apos;re building a product, portfolio, or brand experience
            that needs stronger motion, cleaner frontend execution, and
            thoughtful visual pacing, I&apos;d love to hear about it.
          </p>
        </div>

        <div
          data-contact-grid
          className="grid gap-6 lg:grid-cols-[0.9fr_minmax(0,1.1fr)]"
        >
          <div
            data-contact-card
            className="glass-panel rounded-[2rem] p-6 sm:p-7"
          >
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.3em] text-accent">
                  Direct contact
                </p>
                <p className="mt-5 max-w-md text-2xl font-semibold tracking-[-0.05em] text-zinc-900 transition-colors duration-500 dark:text-zinc-100 sm:text-3xl">
                  Muhammad Aashir Adnan
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-700 transition-colors duration-500 dark:text-zinc-300 sm:text-[0.98rem]">
                  Frontend Developer crafting motion-rich interfaces that feel
                  precise, calm, and intuitive.
                </p>
              </div>

              <div className="grid gap-3">
                {contactLinks.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[1.35rem] border border-zinc-200 bg-white/80 p-4 shadow-sm md:shadow shadow-zinc-950/5 transition-colors duration-500 dark:border-zinc-700 dark:bg-white/[0.04] dark:shadow-xl"
                  >
                    <p className="text-[0.68rem] uppercase tracking-[0.26em] text-zinc-500 dark:text-zinc-400">
                      {label}
                    </p>
                    <p className="mt-2 text-base text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            data-contact-card
            className="glass-panel rounded-[2rem] p-6 sm:p-7"
          >
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[0.72rem] uppercase tracking-[0.26em] text-zinc-500 dark:text-zinc-400">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-[1.2rem] border border-zinc-200 bg-white/90 px-4 py-3 text-sm text-zinc-900 shadow-sm md:shadow shadow-zinc-950/5 outline-none transition-[border-color,background-color,box-shadow] duration-300 placeholder:text-zinc-400 focus:border-accent focus:bg-white dark:border-zinc-700 dark:bg-white/[0.05] dark:text-zinc-100 dark:shadow-xl dark:placeholder:text-zinc-500"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[0.72rem] uppercase tracking-[0.26em] text-zinc-500 dark:text-zinc-400">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-[1.2rem] border border-zinc-200 bg-white/90 px-4 py-3 text-sm text-zinc-900 shadow-sm md:shadow shadow-zinc-950/5 outline-none transition-[border-color,background-color,box-shadow] duration-300 placeholder:text-zinc-400 focus:border-accent focus:bg-white dark:border-zinc-700 dark:bg-white/[0.05] dark:text-zinc-100 dark:shadow-xl dark:placeholder:text-zinc-500"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-[0.72rem] uppercase tracking-[0.26em] text-zinc-500 dark:text-zinc-400">
                  Project brief
                </span>
                <textarea
                  name="message"
                  rows="6"
                  data-lenis-prevent
                  required
                  placeholder="Tell me a little about what you're building."
                  className="no-scrollbar resize-none overflow-y-auto rounded-[1.4rem] border border-zinc-200 bg-white/90 px-4 py-3 text-sm leading-7 text-zinc-900 shadow-sm md:shadow shadow-zinc-950/5 outline-none transition-[border-color,background-color,box-shadow] duration-300 placeholder:text-zinc-400 focus:border-accent focus:bg-white dark:border-zinc-700 dark:bg-white/[0.05] dark:text-zinc-100 dark:shadow-xl dark:placeholder:text-zinc-500"
                />
              </label>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full border border-zinc-950 bg-zinc-950 px-6 py-3 text-sm font-medium text-white shadow-sm md:shadow shadow-zinc-950/10 transition-[background-color,box-shadow,transform,border-color] duration-300 hover:border-zinc-800 hover:bg-zinc-800 hover:shadow-md dark:border-zinc-900 dark:bg-zinc-950 dark:text-white dark:shadow-xl dark:hover:border-zinc-800 dark:hover:bg-zinc-800"
                >
                  Send inquiry
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                    &rarr;
                  </span>
                </button>

                <p className="text-sm text-zinc-600 transition-colors duration-500 dark:text-zinc-300">
                  {isSubmitted
                    ? "Message received. I'll get back to you soon."
                    : "Usually replies within a couple of days."}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
