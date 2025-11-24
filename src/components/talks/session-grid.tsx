import SessionCard from "./session-card";

type Session = Parameters<typeof SessionCard>[0]["s"];

export default function SessionGrid({ sessions }: { sessions: Session[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-1">
      {sessions.map((s) => (
        <SessionCard key={s.id} s={s} />
      ))}
    </div>
  );
}
