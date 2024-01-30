import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect } from "react";
import { useFrame } from "./useFrame";

// Set GSAP
// Cancel the internal rAF
// since we want to use ours. (only one rAF)
gsap.ticker.remove(gsap.updateRoot);
gsap.ticker.lagSmoothing(0);
gsap.registerPlugin(ScrollTrigger);
if (typeof window !== "undefined") {
  const scroller = document.documentElement;
  ScrollTrigger.scrollerProxy(document.documentElement, {
    scrollTop(value) {
      return arguments.length
        ? window.lenis?.scrollTo(value)
        : window.lenis?.scroll || window.scrollY;
    },
  });
  ScrollTrigger.defaults({ scroller });
}

export function useGsap() {
  // Use only one
  // requestAnimationFrame for your whole app.
  const updateGsapRoot = (t: number) => gsap.updateRoot(t * 0.001);
  const registerRaf = useCallback(updateGsapRoot, []);
  useFrame(registerRaf, 10);

  useEffect(() => {
    const observer = new ResizeObserver(() => ScrollTrigger.refresh());
    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, []);
}
