export function formatDateShort(iso: string, tz = "America/Monterrey") {
  const d = new Date(iso);
  return d
    .toLocaleDateString("es-MX", {
      timeZone: tz,
      weekday: "short",
      day: "2-digit",
      month: "short",
    })
    .replace(".", "");
}

export function formatTimeRange(
  startIso: string,
  endIso: string,
  tz = "America/Monterrey"
) {
  const s = new Date(startIso);
  const e = new Date(endIso);
  const opts: Intl.DateTimeFormatOptions = {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
  };
  return `${s.toLocaleTimeString("es-MX", opts)} – ${e.toLocaleTimeString(
    "es-MX",
    opts
  )}`;
}
