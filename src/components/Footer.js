import { useState } from "react";
import brand from "../styles/brand";
import { useToast } from "../context/ToastContext";
import { Wordmark } from "./Logo";
import { Link } from "./Router";

const FOOTER_COLS = [
  {
    title: "Programs",
    links: [
      ["CRA Certification", "/programs"],
      ["CDM Certification", "/programs"],
      ["CRC Certification", "/programs"],
      ["Job Placement", "/careers"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Careers", "/careers"],
      ["Blog", "/blog"],
      ["Contact", "/contact"],
    ],
  },
];

const SOCIALS = ["Li", "Tw", "Yt"];

export default function Footer() {
  const toast = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      toast("Please enter a valid email.", "error");
      return;
    }
    toast("Subscribed to newsletter successfully!");
    setEmail("");
  };

  return (
    <footer
      style={{
        background: brand.navy,
        padding: "64px 24px 28px",
        borderTop: "1px solid rgba(255,255,255,.04)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2.2fr 1fr 1fr 1.5fr",
            gap: 44,
            marginBottom: 44,
          }}
        >
          {/* Brand column */}
          <div>
            <Wordmark />
            <p
              style={{
                fontFamily: "var(--body)",
                fontSize: 13,
                color: brand.gray500,
                lineHeight: 1.7,
                marginTop: 14,
                maxWidth: 290,
              }}
            >
              Training the next generation of clinical research professionals
              with industry-leading interactive online certification programs.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toast(`${s} profile opened`, "info");
                  }}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "rgba(255,255,255,.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--body)",
                    fontSize: 11,
                    color: brand.gray300,
                    textDecoration: "none",
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = brand.teal;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,.05)";
                    e.currentTarget.style.color = brand.gray300;
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontFamily: "var(--body)",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: ".08em",
                  marginBottom: 16,
                  textTransform: "uppercase",
                }}
              >
                {col.title}
              </div>
              {col.links.map(([label, to]) => (
                <Link
                  key={label}
                  to={to}
                  style={{
                    display: "block",
                    fontFamily: "var(--body)",
                    fontSize: 13,
                    color: brand.gray500,
                    marginBottom: 11,
                    transition: "color .2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = brand.tealBright)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = brand.gray500)
                  }
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <div
              style={{
                fontFamily: "var(--body)",
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
                letterSpacing: ".08em",
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              Newsletter
            </div>
            <p
              style={{
                fontFamily: "var(--body)",
                fontSize: 12,
                color: brand.gray500,
                lineHeight: 1.6,
                marginBottom: 12,
              }}
            >
              Latest updates on courses, clinical research news, and career
              tips.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: "9px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,.1)",
                  background: "rgba(255,255,255,.04)",
                  color: "#fff",
                  fontFamily: "var(--body)",
                  fontSize: 13,
                  outline: "none",
                }}
              />
              <button
                onClick={handleSubscribe}
                style={{
                  padding: "9px 14px",
                  borderRadius: 8,
                  border: "none",
                  background: brand.teal,
                  color: "#fff",
                  fontFamily: "var(--body)",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.06)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span
            style={{
              fontFamily: "var(--body)",
              fontSize: 11,
              color: "rgba(255,255,255,.22)",
            }}
          >
            © 2026 Paragon Global Network. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 18 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (t) => (
                <a
                  key={t}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    fontFamily: "var(--body)",
                    fontSize: 11,
                    color: "rgba(255,255,255,.28)",
                    textDecoration: "none",
                  }}
                >
                  {t}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
