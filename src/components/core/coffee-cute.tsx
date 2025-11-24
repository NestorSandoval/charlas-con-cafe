export default function CoffeeCute({
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
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Platillo */}
      <ellipse cx="40" cy="63" rx="26" ry="7" fill="#0b1220" />
      <ellipse cx="40" cy="62" rx="24" ry="6" fill="#0f172a" />
      {/* Taza */}
      <rect
        x="18"
        y="26"
        width="34"
        height="24"
        rx="10"
        fill="url(#cupFill)"
        stroke="#E6E9F2"
        strokeWidth="2"
      />
      {/* Asa */}
      <path
        d="M52 30h6a8 8 0 1 1 0 16h-6"
        fill="none"
        stroke="#DDE3EE"
        strokeWidth="5"
      />
      {/* Café */}
      <ellipse cx="35" cy="28" rx="13" ry="6" fill="#5A3527" />
      <ellipse cx="35" cy="28" rx="12" ry="5" fill="url(#coffeeGrad)" />
      {/* Brillo taza */}
      <path
        d="M23 32c0 0 4-8 9-8"
        stroke="white"
        strokeOpacity=".6"
        strokeWidth="2"
      />
      {/* Vapor */}
      <path
        d="M28 12c0 4 4 4 4 8s-4 4-4 8"
        stroke="white"
        strokeOpacity=".9"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M38 10c0 4 4 4 4 8s-4 4-4 8"
        stroke="white"
        strokeOpacity=".7"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <defs>
        <linearGradient id="cupFill" x1="18" y1="26" x2="52" y2="50">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".7" stopColor="#E9EEF7" />
          <stop offset="1" stopColor="#DCE3F1" />
        </linearGradient>
        <linearGradient id="coffeeGrad" x1="22" y1="24" x2="48" y2="32">
          <stop offset="0" stopColor="#8B5E42" />
          <stop offset="1" stopColor="#6B3E2E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
