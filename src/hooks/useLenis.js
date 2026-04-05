import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger, gsap } from "../lib/gsap";

const useLenis = (enabled = true) => {
  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.1,
    });

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, [enabled]);
};

export default useLenis;
