import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

const useMagnetic = (strength = 24) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      const element = ref.current;

      if (!element) {
        return undefined;
      }

      const xTo = gsap.quickTo(element, "x", {
        duration: 0.4,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(element, "y", {
        duration: 0.4,
        ease: "power3.out",
      });

      const handleMove = (event) => {
        const bounds = element.getBoundingClientRect();
        const x = event.clientX - (bounds.left + bounds.width / 2);
        const y = event.clientY - (bounds.top + bounds.height / 2);

        xTo((x / bounds.width) * strength);
        yTo((y / bounds.height) * strength);
      };

      const reset = () => {
        xTo(0);
        yTo(0);
      };

      element.addEventListener("pointermove", handleMove);
      element.addEventListener("pointerleave", reset);

      return () => {
        element.removeEventListener("pointermove", handleMove);
        element.removeEventListener("pointerleave", reset);
      };
    },
    { scope: ref },
  );

  return ref;
};

export default useMagnetic;
