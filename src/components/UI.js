import { useState, useEffect, useRef } from "react";
import brand from "../styles/brand";

/* ─── Intersection Observer hook ─── */
export function useOnScreen(ref, threshold = 0.12) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

/* ─── FadeIn wrapper ─── */
export function FadeIn({ children, delay = 0, className = "", style = {} }) {
  const ref = useRef();
  const visible = useOnScreen(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(26px)",
        transition: `opacity .6s ${delay}s cubic-bezier(.16,1,.3,1), transform .6s ${delay}s cubic-bezier(.16,1,.3,1)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Button ─── */
export function Btn({
  children,
  variant = "primary",
  onClick,
  style: s = {},
  disabled,
}) {
  const base = {
    border: "none",
    borderRadius: 10,
    padding: "13px 26px",
    cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: "var(--body)",
    fontWeight: 600,
    fontSize: 14,
    transition: "all .25s",
    opacity: disabled ? 0.5 : 1,
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
  };

  const variants = {
    primary: {
      ...base,
      background: `linear-gradient(135deg,${brand.teal},${brand.tealLight})`,
      color: "#fff",
      boxShadow: "0 4px 18px rgba(0,137,123,.28)",
    },
    secondary: {
      ...base,
      background: "rgba(255,255,255,.06)",
      border: "1px solid rgba(255,255,255,.12)",
      color: "#fff",
    },
    outline: {
      ...base,
      background: "transparent",
      border: `2px solid ${brand.teal}`,
      color: brand.teal,
    },
    gold: {
      ...base,
      background: `linear-gradient(135deg,${brand.gold},${brand.goldLight})`,
      color: brand.navy,
      boxShadow: "0 4px 18px rgba(201,168,76,.28)",
    },
    danger: { ...base, background: brand.red, color: "#fff" },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ ...variants[variant], ...s }}
    >
      {children}
    </button>
  );
}

/* ─── Section Label ─── */
export function SectionLabel({ children }) {
  return (
    <span
      style={{
        fontFamily: "var(--body)",
        fontSize: 12,
        fontWeight: 700,
        color: brand.teal,
        letterSpacing: ".11em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

/* ─── Section Title ─── */
export function SectionTitle({ children, light = false }) {
  return (
    <h2
      style={{
        fontFamily: "var(--heading)",
        fontSize: "clamp(27px,4vw,44px)",
        fontWeight: 700,
        color: light ? "#fff" : brand.navy,
        lineHeight: 1.1,
        letterSpacing: "-.02em",
        margin: "10px 0 0",
      }}
    >
      {children}
    </h2>
  );
}

/* ─── Form Input ─── */
export function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  textarea = false,
  required = false,
}) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <label
        style={{
          fontFamily: "var(--body)",
          fontSize: 12,
          fontWeight: 600,
          color: brand.gray700,
        }}
      >
        {label}
        {required && <span style={{ color: brand.red }}> *</span>}
      </label>
      <Tag
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          padding: "11px 14px",
          borderRadius: 10,
          border: `1.5px solid ${brand.gray100}`,
          fontFamily: "var(--body)",
          fontSize: 14,
          color: brand.navy,
          background: "#fff",
          outline: "none",
          transition: "border .2s",
          resize: textarea ? "vertical" : "none",
          minHeight: textarea ? 110 : "auto",
        }}
        onFocus={(e) => (e.target.style.borderColor = brand.teal)}
        onBlur={(e) => (e.target.style.borderColor = brand.gray100)}
      />
    </div>
  );
}

/* ─── Decorative molecule SVG ─── */
export function MolSvg({ style: s = {} }) {
  return (
    <svg
      viewBox="0 0 200 200"
      style={{ width: 200, opacity: 0.06, ...s }}
      fill="none"
    >
      <circle cx="100" cy="60" r="20" stroke={brand.tealBright} strokeWidth="2" />
      <circle cx="50" cy="140" r="16" stroke={brand.gold} strokeWidth="2" />
      <circle cx="150" cy="140" r="16" stroke={brand.tealBright} strokeWidth="2" />
      <line x1="100" y1="80" x2="58" y2="128" stroke={brand.tealBright} strokeWidth="1.5" />
      <line x1="100" y1="80" x2="142" y2="128" stroke={brand.gold} strokeWidth="1.5" />
      <line x1="66" y1="140" x2="134" y2="140" stroke={brand.tealBright} strokeWidth="1.5" />
      <circle cx="100" cy="60" r="6" fill={brand.tealBright} />
      <circle cx="50" cy="140" r="5" fill={brand.gold} />
      <circle cx="150" cy="140" r="5" fill={brand.tealBright} />
    </svg>
  );
}

/* ─── Page Hero (reused on inner pages) ─── */
export function PageHero({ label, title, desc }) {
  return (
    <section
      style={{
        background: `linear-gradient(170deg,${brand.navy},${brand.deep})`,
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <MolSvg style={{ position: "absolute", top: 10, right: "8%", width: 180 }} />
      <div style={{ position: "relative", zIndex: 2 }}>
        <FadeIn>
          <SectionLabel>{label}</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.08}>
          <SectionTitle light>{title}</SectionTitle>
        </FadeIn>
        {desc && (
          <FadeIn delay={0.16}>
            <p
              style={{
                fontFamily: "var(--body)",
                fontSize: 16,
                color: brand.gray300,
                maxWidth: 540,
                margin: "16px auto 0",
                lineHeight: 1.65,
              }}
            >
              {desc}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
