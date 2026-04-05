import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

const interactiveSelector =
  "a, button, input, textarea, [role='button'], [data-cursor='interactive']";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const innerRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const finePointer = window.matchMedia("(pointer: fine)").matches;

      if (reduceMotion || !finePointer) {
        return undefined;
      }

      const cursor = cursorRef.current;
      const inner = innerRef.current;

      if (!cursor || !inner) {
        return undefined;
      }

      const xTo = gsap.quickTo(cursor, "x", {
        duration: 0.22,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(cursor, "y", {
        duration: 0.22,
        ease: "power3.out",
      });

      const moveCursor = (event) => {
        xTo(event.clientX - 16);
        yTo(event.clientY - 16);
      };

      const showCursor = () => {
        gsap.to(cursor, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      const hideCursor = () => {
        gsap.to(cursor, {
          autoAlpha: 0,
          scale: 0.7,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const handlePointerOver = (event) => {
        const target = event.target.closest(interactiveSelector);

        if (target) {
          gsap.to(cursor, {
            scale: 1.55,
            duration: 0.25,
            ease: "power2.out",
          });
          gsap.to(inner, {
            scale: 0.72,
            duration: 0.25,
            ease: "power2.out",
          });
        }
      };

      const handlePointerOut = (event) => {
        const target = event.target.closest(interactiveSelector);

        if (target) {
          gsap.to(cursor, {
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
          });
          gsap.to(inner, {
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("pointermove", moveCursor);
      window.addEventListener("pointerenter", showCursor);
      window.addEventListener("pointerleave", hideCursor);
      document.addEventListener("pointerover", handlePointerOver);
      document.addEventListener("pointerout", handlePointerOut);

      return () => {
        window.removeEventListener("pointermove", moveCursor);
        window.removeEventListener("pointerenter", showCursor);
        window.removeEventListener("pointerleave", hideCursor);
        document.removeEventListener("pointerover", handlePointerOver);
        document.removeEventListener("pointerout", handlePointerOut);
      };
    },
    { scope: cursorRef },
  );

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden h-8 w-8 items-center justify-center rounded-full border border-accent/45 bg-transparent opacity-0 md:flex"
    >
      <div
        ref={innerRef}
        className="h-2.5 w-2.5 rounded-full bg-accent"
      />
    </div>
  );
};

export default CustomCursor;
