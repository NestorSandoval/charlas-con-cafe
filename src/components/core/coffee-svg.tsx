export default function CoffeeSolid({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
    >
      {/* Plato */}

      {/* Taza base */}
      <rect
        x="14"
        y="20"
        width="28"
        height="22"
        rx="8"
        fill="#f8fafc"
        stroke="#e2e8f0"
        strokeWidth="2"
      />

      {/* Asa de la taza */}
      <path
        d="M42 26h4a6 6 0 1 1 0 12h-4"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="4"
      />

      {/* Café dentro */}
      <ellipse cx="28" cy="24" rx="12" ry="5" fill="#6b3e2e" />
      <ellipse cx="28" cy="24" rx="11" ry="4" fill="#8b5e42" />

      {/* Vapor */}
      <path
        d="M20 10c0 3 3 3 3 6s-3 3-3 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="1"
      />
      <path
        d="M28 8c0 3 3 3 3 6s-3 3-3 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="1"
      />
    </svg>
  );
}
