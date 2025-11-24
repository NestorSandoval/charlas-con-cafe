"use client";
import Image from "next/image";
import { formatDateShort, formatTimeRange } from "@/lib/date";
import { cn } from "@/lib/utils";

type Session = {
  id: string;
  title: string;
  synopsis: string;
  startAt: string;
  endAt: string;
  location?: string;
  speaker: { name: string; role?: string; photoUrl?: string };
  category?: string;
};

export default function SessionCard({ s }: { s: Session }) {
  const date = formatDateShort(s.startAt);
  const time = formatTimeRange(s.startAt, s.endAt);

  return (
    <article
      tabIndex={0}
      className={cn(
        "group grid rounded-2xl border border-sky-500/20 bg-slate-900/40 p-4",
        "backdrop-blur transition-all duration-300",
        "grid-rows-[auto_0fr] hover:grid-rows-[auto_1fr] focus-visible:grid-rows-[auto_1fr]",
        "outline-none hover:border-sky-400/40"
      )}
    >
      {/* HEADER compacto (siempre visible) */}
      <div className="flex items-center gap-3">
        <span className="inline-flex shrink-0 select-none rounded-full bg-sky-500/15 px-3 py-1 text-xs font-medium text-sky-200">
          {date.toUpperCase()}
        </span>
        <span className="text-sm text-sky-100/90">
          {time} {s.location ? `· ${s.location}` : ""}
        </span>
      </div>

      {/* DETALLE expandible */}
      <div className="overflow-hidden">
        <div className="mt-4 grid items-center gap-4 sm:grid-cols-[1fr_auto]">
          <div>
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-200/90">
              {s.synopsis}
            </p>
            {s.category && (
              <span className="mt-3 inline-flex rounded-full border border-sky-400/30 px-2.5 py-0.5 text-xs text-sky-200">
                {s.category}
              </span>
            )}
          </div>
          {/* foto grande a la derecha */}
          <div className="relative h-24 w-24 justify-self-end sm:h-28 sm:w-28">
            {s.speaker.photoUrl ? (
              <Image
                src={s.speaker.photoUrl}
                alt={s.speaker.name}
                fill
                className="rounded-xl object-cover ring-1 ring-white/10"
              />
            ) : (
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-sky-500/25 to-slate-700/40 ring-1 ring-white/10" />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
