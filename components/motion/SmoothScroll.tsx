"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

/** Inertia-based smooth scrolling for the whole page. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({ lerp: 0.12 });
    window.lenis = lenis;

    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return null;
}
