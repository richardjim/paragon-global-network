import brand from "../styles/brand";

/**
 * SVG brand mark — "P" letterform with gold certification badge.
 */
export function ParagonLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="10" fill="url(#paragon-lg)" />
      <path
        d="M14 34V14h8.5c2.3 0 4.1.6 5.4 1.8 1.3 1.2 2 2.8 2 4.8s-.7 3.7-2 4.9c-1.3 1.2-3.1 1.7-5.4 1.7H19.2V34H14z"
        fill="#fff"
      />
      <path
        d="M19.2 23.8h3c1 0 1.7-.3 2.2-.8.5-.5.8-1.2.8-2.1 0-.9-.3-1.6-.8-2.1-.5-.5-1.3-.8-2.2-.8h-3v5.8z"
        fill={brand.teal}
      />
      <circle cx="34" cy="32" r="6" fill={brand.gold} opacity="0.9" />
      <path
        d="M32 32l1.5 1.5 3-3"
        stroke={brand.navy}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="paragon-lg" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor={brand.navy} />
          <stop offset="1" stopColor={brand.deep} />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Full wordmark: logo icon + "Paragon Global Network" text.
 */
export function Wordmark() {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <ParagonLogo size={36} />
      <span
        style={{
          fontFamily: "var(--heading)",
          fontWeight: 700,
          fontSize: 19,
          color: brand.white,
          letterSpacing: "-0.02em",
        }}
      >
        Paragon <span style={{ color: brand.tealBright }}>Global</span>
        <span
          style={{
            fontWeight: 400,
            fontSize: 13,
            color: brand.gray300,
            marginLeft: 5,
          }}
        >
          Network
        </span>
      </span>
    </span>
  );
}
