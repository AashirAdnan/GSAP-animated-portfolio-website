const footerLinks = [
  {
    label: "Email",
    href: "mailto:m.aashiradnan@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[1.05rem] w-[1.05rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3.75 6.75h16.5v10.5H3.75z" />
        <path d="m4.5 7.5 7.5 6 7.5-6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/AashirAdnan",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[1.05rem] w-[1.05rem]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .75a11.25 11.25 0 0 0-3.556 21.924c.563.104.768-.244.768-.542 0-.267-.01-.975-.016-1.914-3.124.679-3.784-1.505-3.784-1.505-.511-1.299-1.248-1.645-1.248-1.645-1.02-.697.077-.683.077-.683 1.127.08 1.72 1.157 1.72 1.157 1.001 1.715 2.626 1.22 3.267.933.102-.725.392-1.22.713-1.5-2.494-.284-5.116-1.247-5.116-5.552 0-1.226.438-2.229 1.156-3.015-.116-.284-.5-1.428.11-2.977 0 0 .943-.302 3.09 1.152a10.72 10.72 0 0 1 5.626 0c2.146-1.454 3.087-1.152 3.087-1.152.612 1.55.228 2.693.112 2.977.72.786 1.154 1.789 1.154 3.015 0 4.315-2.626 5.265-5.129 5.543.403.347.762 1.03.762 2.077 0 1.5-.014 2.71-.014 3.078 0 .301.203.651.774.54A11.251 11.251 0 0 0 12 .75Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aashir-adnan",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[1.05rem] w-[1.05rem]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.98 3.5a1.74 1.74 0 1 1 0 3.48 1.74 1.74 0 0 1 0-3.48ZM3.5 8.25h2.96v12.25H3.5V8.25Zm4.85 0h2.84v1.67h.04c.4-.75 1.37-1.94 2.82-1.94 3.02 0 3.58 1.99 3.58 4.58v7.94h-2.96v-7.04c0-1.68-.03-3.84-2.34-3.84-2.35 0-2.71 1.83-2.71 3.72v7.16H8.35V8.25Z" />
      </svg>
    ),
  },
];

const FooterSection = () => {
  return (
    <footer className="px-5 pb-10 pt-8 transition-colors duration-500 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-zinc-200/90 bg-white/72 p-6 shadow-sm md:shadow shadow-zinc-950/5 backdrop-blur-xl transition-colors duration-500 dark:border-zinc-800/80 dark:bg-white/[0.03] dark:shadow-none sm:p-8 lg:p-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold tracking-[-0.05em] text-zinc-900 transition-colors duration-500 dark:text-zinc-100 sm:text-3xl">
                Muhammad Aashir Adnan
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-700 transition-colors duration-500 dark:text-zinc-300 sm:text-[0.98rem]">
                Passionate Frontend Developer crafting smooth and intentional
                digital experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={link.label}
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/88 p-3 text-zinc-700 shadow-sm md:shadow shadow-zinc-950/5 transition-[transform,color,background-color,border-color] duration-300 hover:scale-[1.06] hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-700 dark:bg-white/[0.04] dark:text-zinc-300 dark:shadow-xl dark:hover:scale-[1.06] dark:hover:border-zinc-600 dark:hover:bg-white/[0.06] dark:hover:text-zinc-100"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-zinc-200/90 pt-6 transition-colors duration-500 dark:border-zinc-800/90" />

          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-zinc-600 transition-colors duration-500 dark:text-zinc-400">
              Islamabad, Pakistan
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 transition-colors duration-500 dark:text-zinc-500">
              Designed and built with React, Tailwind, GSAP &amp; Lenis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
