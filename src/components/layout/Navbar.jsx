import { useRef } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import { gsap, ScrollTrigger, useGSAP } from "../../lib/gsap";
import useTheme from "../../hooks/useTheme";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useGSAP(
    () => {
      const shell = navRef.current?.querySelector("[data-nav-shell]");
      const desktopLinks = navRef.current?.querySelector("[data-nav-links]");

      if (!shell) {
        return undefined;
      }

      const shrink = () => {
        gsap.to(shell, {
          paddingTop: 10,
          paddingBottom: 10,
          width: "min(100%, 68rem)",
          backgroundColor: isDark ? "rgba(10, 10, 14, 0.72)" : "rgba(255,255,255,0.88)",
          borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(24,24,27,0.12)",
          boxShadow: isDark ? "0 22px 80px rgba(0,0,0,0.18)" : "0 18px 48px rgba(24,24,27,0.10)",
          duration: 0.45,
          ease: "power3.out",
        });

        if (desktopLinks) {
          gsap.to(desktopLinks, {
            gap: 12,
            duration: 0.35,
            ease: "power2.out",
          });
        }
      };

      const expand = () => {
        gsap.to(shell, {
          paddingTop: 14,
          paddingBottom: 14,
          width: "min(100%, 76rem)",
          backgroundColor: isDark ? "rgba(10,10,14,0.62)" : "rgba(255,255,255,0.74)",
          borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(24,24,27,0.10)",
          boxShadow: isDark ? "0 22px 80px rgba(0,0,0,0.18)" : "0 16px 40px rgba(24,24,27,0.08)",
          duration: 0.45,
          ease: "power3.out",
        });

        if (desktopLinks) {
          gsap.to(desktopLinks, {
            gap: 18,
            duration: 0.35,
            ease: "power2.out",
          });
        }
      };

      const trigger = ScrollTrigger.create({
        start: 48,
        end: "max",
        onEnter: shrink,
        onLeaveBack: expand,
      });

      expand();

      return () => {
        trigger.kill();
      };
    },
    { scope: navRef, dependencies: [isDark] },
  );

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

  return (
    <header ref={navRef} className="pointer-events-none fixed inset-x-0 top-0 z-[70] px-4 pt-4 sm:px-6 sm:pt-6">
      <div
        data-nav-shell
        className="pointer-events-auto mx-auto flex w-full max-w-5xl items-center justify-between rounded-[1.75rem] border border-zinc-200/90 bg-white/75 px-4 py-3 shadow-md shadow-zinc-950/5 backdrop-blur-2xl transition-[background-color,border-color,box-shadow] duration-500 dark:border-zinc-800/80 dark:bg-[#0a0a0e]/70 dark:shadow-[0_22px_80px_rgba(0,0,0,0.18)] sm:px-5"
      >
        <a
          href="#hero"
          onClick={(event) => handleNavigate(event, "#hero")}
          className="group flex min-w-0 items-center gap-3"
          aria-label="Muhammad Aashir Adnan home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-semibold uppercase tracking-[0.24em] text-zinc-900 shadow-sm shadow-zinc-950/5 transition-colors duration-500 dark:border-zinc-700 dark:bg-white/[0.06] dark:text-zinc-100 dark:shadow-none">
            MA
          </div>
          <p className="truncate text-sm font-medium tracking-[-0.03em] text-zinc-900 transition-colors duration-500 dark:text-zinc-100 sm:text-[0.95rem]">
            Aashir
          </p>
        </a>

        <nav
          data-nav-links
          className="hidden items-center gap-[18px] rounded-full border border-zinc-200 bg-white/80 px-2 py-2 shadow-sm shadow-zinc-950/5 transition-[background-color,border-color,box-shadow] duration-500 dark:border-zinc-800 dark:bg-black/25 dark:shadow-none md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavigate(event, item.href)}
              className="rounded-full px-4 py-2 text-sm text-zinc-600 transition duration-300 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/[0.06] dark:hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(event) => handleNavigate(event, "#contact")}
            className="hidden rounded-full border border-zinc-200 bg-white/85 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-950/5 transition duration-300 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-700 dark:bg-black/20 dark:text-zinc-300 dark:shadow-none dark:hover:border-zinc-600 dark:hover:bg-black/35 dark:hover:text-zinc-100 sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
