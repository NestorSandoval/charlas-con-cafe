import Hero from "@/components/core/hero";
import TalkCard from "@/components/talks/talk-card"; // (puedes crear este luego)
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      {/* Sección inferior (opcional): próximas charlas destacadas */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-xl text-sky-200/80 mb-4">Próximas charlas</h2>
        <Suspense fallback={<p className="text-sky-200/60">Cargando…</p>}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Mapear TalkCard aquí cuando tengas el servicio */}
            {/* {talks.map(t => <TalkCard key={t.id} talk={t} />)} */}
            <div className="text-sky-300/70 text-sm">
              Aún no hay charlas publicadas.
            </div>
          </div>
        </Suspense>
      </section>
    </main>
  );
}
