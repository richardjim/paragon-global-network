import { useState, useEffect } from "react";
import brand from "../styles/brand";
import { useRoute, Link } from "./Router";
import { Wordmark } from "./Logo";
import { Btn } from "./UI";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRoute();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (to) => path === to || (to === "/" && path === "");

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,22,40,.97)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "all .35s",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.05)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <Link to="/">
          <Wordmark />
        </Link>

        {/* Desktop nav */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 26 }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontFamily: "var(--body)",
                fontSize: 13,
                fontWeight: 500,
                color: isActive(l.to)
                  ? brand.tealBright
                  : "rgba(255,255,255,.7)",
                borderBottom: isActive(l.to)
                  ? `2px solid ${brand.tealBright}`
                  : "2px solid transparent",
                padding: "4px 0",
                transition: "all .2s",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/enroll">
            <Btn variant="gold" style={{ padding: "9px 20px", fontSize: 13 }}>
              Enroll Now
            </Btn>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            zIndex: 102,
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 22,
                height: 2,
                background: "#fff",
                marginBottom: i < 2 ? 5 : 0,
                borderRadius: 2,
                transition: "all .3s",
                transform: open
                  ? i === 0
                    ? "rotate(45deg) translateY(7px)"
                    : i === 2
                    ? "rotate(-45deg) translateY(-7px)"
                    : "scaleX(0)"
                  : "none",
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,22,40,.98)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 26,
            zIndex: 101,
            animation: "fadeIn .3s",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--heading)",
                fontSize: 26,
                fontWeight: 600,
                color: isActive(l.to) ? brand.tealBright : "#fff",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/enroll" onClick={() => setOpen(false)}>
            <Btn variant="gold" style={{ marginTop: 10 }}>
              Enroll Now
            </Btn>
          </Link>
        </div>
      )}
    </nav>
  );
}
