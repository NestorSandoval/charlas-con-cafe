// src/components/core/hero.tsx
"use client";
import Link from "next/link";
import Particles from "./particles";
import { Button } from "@/components/ui/button";
import FloatingCoffee from "./floating-coffee";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      {/* Fondo azul -> negro */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_20%_0%,#0ea5e9_10%,transparent_60%),radial-gradient(900px_500px_at_80%_10%,#0284c7_10%,transparent_60%),linear-gradient(180deg,#020617_10%,#000000_90%)]" />
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.55)_80%)]" />
      {/* Partículas */}
      <Particles density={0.00025} maxSpeed={1} />
      <FloatingCoffee /> {/* tazas nítidas */}
      {/* CONTENEDOR CENTRADO */}
      <div className="relative h-full w-full z-10 ">
        <div className="mx-auto flex h-[100vh] max-w-5xl flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-3 text-xs tracking-[0.35em] uppercase text-sky-300/80">
            Evento interno
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block">SISTEMAS AKÚBICA</span>
            <span className="block text-sky-300 drop-shadow-[0_0_18px_rgba(56,189,248,0.35)]">
              CHARLAS CON CAFÉ
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sky-100/80">
            Agenda, comparte y disfruta sesiones frescas: hobbies, lenguajes,
            historias y todo lo que nos conecta.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <Link href="/calendario">
              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-400 text-black font-semibold rounded-2xl"
              >
                Ver calendario
              </Button>
            </Link>
            <Link href="/nominaciones">
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-sky-500/70 text-black hover:text-black hover:bg-sky-300"
              >
                Postúlate para una charla
              </Button>
            </Link>
          </div>

          {/* Glow sutil detrás del título */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] h-[280px] w-[700px] rounded-full bg-sky-400/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
