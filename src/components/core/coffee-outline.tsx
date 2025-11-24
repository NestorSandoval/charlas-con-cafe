export default function CoffeeOutline({
  size = 44,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <ellipse
        cx="12"
        cy="20"
        rx="8.8"
        ry="2.3"
        className="text-slate-300/50"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M5 10h10a4 4 0 0 1 0 8H9a4 4 0 0 1-4-4v-4z"
        className="text-white/90"
        fill="currentColor"
        stroke="none"
      />
      <path d="M15 10h2a2.5 2.5 0 1 1 0 5h-2" className="text-slate-300" />
      <path
        d="M9 5c0 1 1 1 1 2s-1 1-1 2M13 4c0 1 1 1 1 2s-1 1-1 2"
        className="text-white"
      />
      <ellipse
        cx="10.5"
        cy="10"
        rx="4.5"
        ry="1.8"
        className="text-amber-700"
        fill="currentColor"
        stroke="none"
      />
      <ellipse
        cx="10.5"
        cy="10"
        rx="4.1"
        ry="1.5"
        className="text-amber-600"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
