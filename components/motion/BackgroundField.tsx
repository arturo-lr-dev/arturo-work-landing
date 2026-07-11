"use client";

import { useEffect, useRef } from "react";

const SPACING = 72;
const CROSS = 2.5;
const RADIUS = 150;
const INK_LINE = { r: 198, g: 199, b: 190 }; // --line
const ULTRA = { r: 41, g: 41, b: 232 }; // --ultra

/**
 * Full-page drafting grid: a field of faint crosses on the paper that
 * ignite in ultramarine and shy away from the cursor, and drift with
 * the scroll. Sits behind every section; opaque (ink) sections cover it.
 */
export function BackgroundField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const drift = reduced ? 0 : (window.scrollY * 0.035) % SPACING;

      for (let gx = SPACING / 2; gx < width + SPACING; gx += SPACING) {
        for (let gy = SPACING / 2 - drift; gy < height + SPACING; gy += SPACING) {
          let x = gx;
          let y = gy;
          let size = CROSS;
          let alpha = 0.28;
          let color = INK_LINE;

          if (!reduced) {
            const dx = gx - pointer.x;
            const dy = gy - pointer.y;
            const dist = Math.hypot(dx, dy);

            if (dist < RADIUS) {
              const t = 1 - dist / RADIUS;
              const push = t * t * 5;
              x += (dx / (dist || 1)) * push;
              y += (dy / (dist || 1)) * push;
              size = CROSS + t * 1.5;
              alpha = 0.28 + t * 0.32;
              color = {
                r: INK_LINE.r + (ULTRA.r - INK_LINE.r) * t,
                g: INK_LINE.g + (ULTRA.g - INK_LINE.g) * t,
                b: INK_LINE.b + (ULTRA.b - INK_LINE.b) * t,
              };
            }
          }

          ctx.strokeStyle = `rgba(${color.r | 0}, ${color.g | 0}, ${color.b | 0}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x - size, y);
          ctx.lineTo(x + size, y);
          ctx.moveTo(x, y - size);
          ctx.lineTo(x, y + size);
          ctx.stroke();
        }
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      draw();
    } else {
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
