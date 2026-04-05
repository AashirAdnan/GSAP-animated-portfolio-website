import { useRef } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import { gsap, ScrollTrigger, useGSAP } from "../../lib/gsap";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ isDark, onToggle }) => {
  const navRef = useRef(null);

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
          backgroundColor: "rgba(10, 10, 14, 0.72)",
          borderColor: "rgba(255,255,255,0.12)",
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
          backgroundColor: "rgba(255,255,255,0.04)",
          borderColor: "rgba(255,255,255,0.08)",
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
    { scope: navRef },
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
        className="pointer-events-auto mx-auto flex w-full max-w-5xl items-center justify-between rounded-[1.75rem] border border-white/8 bg-white/[0.04] px-4 py-3 shadow-[0_22px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:px-5"
      >
        <a
          href="#hero"
          onClick={(event) => handleNavigate(event, "#hero")}
          className="group flex min-w-0 items-center gap-3"
          aria-label="Muhammad Aashir Adnan home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xs font-semibold uppercase tracking-[0.24em] text-ink">
            MA
          </div>
          <p className="truncate text-sm font-medium tracking-[-0.03em] text-ink sm:text-[0.95rem]">
            Aashir
          </p>
        </a>

        <nav
          data-nav-links
          className="hidden items-center gap-[18px] rounded-full border border-white/8 bg-black/5 px-2 py-2 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavigate(event, item.href)}
              className="rounded-full px-4 py-2 text-sm text-ink-soft transition duration-300 hover:bg-white/[0.06] hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(event) => handleNavigate(event, "#contact")}
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-ink-soft transition duration-300 hover:border-white/18 hover:text-ink sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <ThemeToggle isDark={isDark} onToggle={onToggle} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
