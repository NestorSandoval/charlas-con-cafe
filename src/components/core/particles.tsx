"use client";
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
};

export default function Particles({
  className = "",
  density = 0.00022, // densidad relativa al área (ajusta a tu gusto)
  maxSpeed = 0.35,
  color = "rgba(56, 189, 248, 0.9)", // sky-400
}: {
  className?: string;
  density?: number;
  maxSpeed?: number;
  color?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const raf = useRef(0);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    const fit = () => {
      // Tamaño visual del canvas (CSS px)
      const wCss = canvas.offsetWidth;
      const hCss = canvas.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      // Tamaño real (px físicos)
      canvas.width = Math.max(1, Math.floor(wCss * dpr));
      canvas.height = Math.max(1, Math.floor(hCss * dpr));
      // Escala para dibujar en coordenadas CSS
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { w: wCss, h: hCss };
    };

    const init = (w: number, h: number) => {
      particles.current = [];
      const count = Math.floor(w * h * density);
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * maxSpeed,
          vy: (Math.random() - 0.5) * maxSpeed,
          r: Math.random() * 1.8 + 0.6,
          a: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const draw = (w: number, h: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        // Rebote suave en bordes
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        // Atenuar un poco en la parte baja para sensación de profundidad
        const fade = 0.7 + 0.3 * (1 - p.y / h);
        ctx.globalAlpha = p.a * fade;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    let { w, h } = fit();
    init(w, h);

    const loop = () => {
      draw(w, h);
      raf.current = requestAnimationFrame(loop);
    };
    loop();

    // Resize robusto
    const onResize = () => {
      const size = fit();
      w = size.w;
      h = size.h;
      init(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
    };
  }, [density, maxSpeed, color]);

  return (
    <canvas
      ref={ref}
      className={`absolute inset-0 w-full h-full -z-10 ${className}`}
      aria-hidden="true"
    />
  );
}
