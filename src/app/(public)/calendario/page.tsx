import SessionGrid from "@/components/talks/session-grid";
import { ArrowLeft } from "lucide-react"; // ícono simple
import Link from "next/link";

async function getSessions() {
  try {
    const from = new Date().toISOString();
    const to = new Date(
      new Date().setMonth(new Date().getMonth() + 3)
    ).toISOString();
    const url = `${process.env.NEXT_PUBLIC_API_URL}/talks?from=${from}&to=${to}&published=1`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("bad");
    const talks = await res.json();

    // adapta tus campos reales -> UI
    return talks.map((t: any) => ({
      id: t.id,
      title: t.title,
      synopsis: t.description?.slice(0, 180) ?? "",
      startAt: t.startAt,
      endAt: t.endAt,
      location: t.location,
      category: t.category,
      speaker: {
        name: t.speakerName ?? "Por anunciar",
        role: t.speakerRole ?? "",
        photoUrl: t.speakerPhotoUrl ?? "",
      },
    }));
  } catch {
    // MOCK temporal para ver la UI
    return [
      {
        id: "1",
        title: "TypeScript para humanos",
        synopsis:
          "Tips prácticos para usar TS en proyectos React/Next: tipos útiles, zod, y patrones de componentes.",
        startAt: new Date(Date.now() + 86400000).toISOString(),
        endAt: new Date(Date.now() + 86400000 + 60 * 60 * 1000).toISOString(),
        location: "Sala Norte",
        category: "lenguajes",
        speaker: {
          name: "María López",
          role: "Frontend Dev",
          photoUrl:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
        },
      },
      {
        id: "2",
        title: "Historias de terror en producción",
        synopsis:
          "Bugs, despliegues fallidos y cómo sobrevivir para contarlo. Una charla ligera con moralejas.",
        startAt: new Date(Date.now() + 2 * 86400000).toISOString(),
        endAt: new Date(
          Date.now() + 2 * 86400000 + 75 * 60 * 1000
        ).toISOString(),
        location: "Zoom",
        category: "terror",
        speaker: {
          name: "Carlos Silva",
          role: "SRE",
          photoUrl:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=300&auto=format&fit=crop",
        },
      },
      {
        id: "3",
        title: "Mi hobby: fotografía nocturna",
        synopsis:
          "Cómo capturar la ciudad de noche: equipo, exposición larga y edición básica.",
        startAt: new Date(Date.now() + 3 * 86400000).toISOString(),
        endAt: new Date(
          Date.now() + 3 * 86400000 + 60 * 60 * 1000
        ).toISOString(),
        location: "Terraza",
        category: "hobbie",
        speaker: {
          name: "Ana Torres",
          role: "Product Designer",
          photoUrl:
            "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop",
        },
      },
    ];
  }
}

export default async function Page() {
  const sessions = await getSessions();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-6">
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="flex items-center gap-2 text-sky-300 hover:text-sky-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <p className="text-xs tracking-[0.35em] text-sky-300/80 uppercase">
              Regresar
            </p>
          </Link>
        </div>
        <p className="text-xs tracking-[0.35em] text-sky-300/80 uppercase mt-2">
          Agenda
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Sesiones de Charlas con Café
        </h1>
        <p className="mt-2 text-slate-300/80">
          Pasa el mouse sobre una tarjeta para ver el detalle.
        </p>
      </header>

      <SessionGrid sessions={sessions} />
    </main>
  );
}
