import { useState } from "react";
import brand from "../styles/brand";
import { Link } from "../components/Router";
import { FadeIn, Btn, SectionLabel, SectionTitle, MolSvg } from "../components/UI";

const STATS = [
  { value: "5,000+", label: "Graduates Worldwide" },
  { value: "96%", label: "Certification Pass Rate" },
  { value: "200+", label: "Hiring Partners" },
  { value: "15+", label: "Years of Excellence" },
];

const COURSES = [
  { icon: "🔬", title: "Clinical Research Associate (CRA)", tag: "Most Popular", desc: "Become a certified CRA. Learn monitoring, site management, and regulatory compliance for clinical trials.", dur: "12 Weeks", fmt: "Online", cert: "CRA Cert" },
  { icon: "📊", title: "Clinical Data Management (CDM)", tag: "High Demand", desc: "Master clinical data collection, processing, and database management for pharma and biotech.", dur: "10 Weeks", fmt: "Self-Paced", cert: "CDM Cert" },
  { icon: "🩺", title: "Clinical Research Coordinator (CRC)", tag: "Career Starter", desc: "Prepare for coordinating clinical trials — enrollment, compliance, and documentation.", dur: "8 Weeks", fmt: "Hybrid", cert: "CRC Cert" },
];

const TESTIMONIALS = [
  { name: "Dr. Amina O.", role: "CRA at Pfizer", text: "Paragon's CRA course transformed my career. The interactive modules were incredibly practical, and I landed my dream role within weeks.", avatar: "AO" },
  { name: "Michael T.", role: "CDM Specialist", text: "The CDM certification gave me the edge I needed. Thorough curriculum and instructors who genuinely care.", avatar: "MT" },
  { name: "Sarah K.", role: "CRC at Johns Hopkins", text: "Zero clinical research experience to a coordinator role at a top institution. This training is the real deal.", avatar: "SK" },
];

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      {/* ════════ HERO ════════ */}
      <section
        style={{
          background: `linear-gradient(170deg,${brand.navy},${brand.deep} 50%,${brand.mid})`,
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,137,123,.07),transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,.05),transparent 70%)" }} />
        <MolSvg style={{ position: "absolute", top: "15%", right: "8%", width: 280 }} />
        <MolSvg style={{ position: "absolute", bottom: "10%", left: "5%", width: 160, transform: "rotate(60deg)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.022, backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "130px 24px 90px", position: "relative", zIndex: 2, width: "100%" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 60, alignItems: "center" }}>
            <div>
              <FadeIn>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,137,123,.1)", borderRadius: 100, padding: "5px 15px", marginBottom: 26 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: brand.tealBright, animation: "pulse 2s infinite" }} />
                  <span style={{ fontFamily: "var(--body)", fontSize: 11, color: brand.tealBright, fontWeight: 600, letterSpacing: ".06em" }}>ENROLLING NOW — SUMMER 2026 COHORT</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <h1 style={{ fontFamily: "var(--heading)", fontSize: "clamp(36px,5.2vw,64px)", fontWeight: 700, color: "#fff", lineHeight: 1.06, marginBottom: 22, letterSpacing: "-.03em" }}>
                  Launch Your Career in{" "}
                  <span style={{ background: `linear-gradient(135deg,${brand.tealBright},${brand.gold})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Clinical Research
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.16}>
                <p style={{ fontFamily: "var(--body)", fontSize: 16, color: brand.gray300, lineHeight: 1.75, marginBottom: 34, maxWidth: 510 }}>
                  Get trained and certified for exciting careers in clinical trials. Our interactive online CRA, CDM, and CRC certification programs prepare you for high-demand roles in pharma, biotech, and medical device industries worldwide.
                </p>
              </FadeIn>

              <FadeIn delay={0.24}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link to="/programs"><Btn>Explore Programs →</Btn></Link>
                  <Link to="/careers"><Btn variant="secondary">Find Jobs</Btn></Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.32}>
                <div style={{ display: "flex", gap: 20, marginTop: 36, flexWrap: "wrap" }}>
                  {[{ i: "🏆", t: "ICH-GCP Compliant" }, { i: "🌍", t: "Globally Recognized" }, { i: "💼", t: "Job Placement" }].map((b) => (
                    <div key={b.t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 15 }}>{b.i}</span>
                      <span style={{ fontFamily: "var(--body)", fontSize: 12, color: brand.gray300, fontWeight: 500 }}>{b.t}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Floating cards */}
            <div className="hero-visual" style={{ position: "relative", minHeight: 420 }}>
              <FadeIn delay={0.2}>
                <div style={{ position: "absolute", top: 0, right: 0, width: "88%", background: "rgba(255,255,255,.035)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 18, padding: 24, backdropFilter: "blur(16px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <span style={{ fontSize: 28 }}>🔬</span>
                    <div>
                      <div style={{ fontFamily: "var(--body)", fontWeight: 700, fontSize: 15, color: "#fff" }}>CRA Certification Program</div>
                      <div style={{ fontFamily: "var(--body)", fontSize: 12, color: brand.gray300 }}>Interactive Online • 12 Weeks</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {["Monitoring", "ICH-GCP", "Site Mgmt", "Regulatory"].map((s) => (
                      <span key={s} style={{ background: "rgba(0,137,123,.12)", borderRadius: 5, padding: "3px 10px", fontFamily: "var(--body)", fontSize: 10, color: brand.tealBright, fontWeight: 600 }}>{s}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div style={{ position: "absolute", top: 150, left: 0, width: "76%", background: "rgba(201,168,76,.06)", border: "1px solid rgba(201,168,76,.1)", borderRadius: 18, padding: 22, backdropFilter: "blur(16px)" }}>
                  <div style={{ fontFamily: "var(--body)", fontWeight: 700, fontSize: 14, color: brand.gold, marginBottom: 4 }}>📊 CDM Specialist Track</div>
                  <div style={{ fontFamily: "var(--body)", fontSize: 12, color: "rgba(255,255,255,.5)", lineHeight: 1.5 }}>Data collection, processing & database management for clinical trials</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.6}>
                <div style={{ position: "absolute", top: 290, right: 10, width: "68%", background: "rgba(0,137,123,.05)", border: "1px solid rgba(0,137,123,.1)", borderRadius: 18, padding: 20, backdropFilter: "blur(16px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontFamily: "var(--body)", fontWeight: 700, fontSize: 14, color: brand.tealBright }}>Job Placement Registry</div>
                    <div style={{ fontFamily: "var(--body)", fontSize: 11, color: brand.gray500 }}>200+ hiring partners</div>
                  </div>
                  <div style={{ background: brand.teal, borderRadius: 7, padding: "5px 12px", fontFamily: "var(--body)", fontSize: 11, fontWeight: 700, color: "#fff" }}>Active ✓</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ STATS BAR ════════ */}
      <section style={{ background: "#fff", padding: "0 24px", position: "relative", zIndex: 3 }}>
        <div style={{ maxWidth: 1100, margin: "-48px auto 0", background: "#fff", borderRadius: 20, boxShadow: "0 8px 44px rgba(10,22,40,.06)", padding: "36px 28px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 20 }}>
          {STATS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--heading)", fontSize: 36, fontWeight: 700, background: `linear-gradient(135deg,${brand.teal},${brand.navy})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
                <div style={{ fontFamily: "var(--body)", fontSize: 12, color: brand.gray500, fontWeight: 500 }}>{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ════════ COURSES PREVIEW ════════ */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <SectionLabel>CERTIFICATION PROGRAMS</SectionLabel>
              <SectionTitle>Choose Your Path</SectionTitle>
              <p style={{ fontFamily: "var(--body)", fontSize: 15, color: brand.gray500, maxWidth: 530, margin: "14px auto 0", lineHeight: 1.65 }}>Industry-recognized courses for high-demand clinical research roles.</p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 22 }}>
            {COURSES.map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: hoveredCard === i ? brand.navy : brand.off,
                    borderRadius: 18, padding: 30, cursor: "pointer",
                    transition: "all .4s cubic-bezier(.16,1,.3,1)",
                    transform: hoveredCard === i ? "translateY(-4px)" : "none",
                    boxShadow: hoveredCard === i ? "0 14px 44px rgba(10,22,40,.15)" : "none",
                    border: `1px solid ${hoveredCard === i ? "transparent" : brand.gray100}`,
                    height: "100%", display: "flex", flexDirection: "column",
                  }}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16,
                    gap: 12,
                  }}>
                    <span style={{
                      fontSize: 36,
                      lineHeight: 1,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                    }}>
                      {c.icon}
                    </span>
                    <span style={{
                      background: hoveredCard === i ? "rgba(38,166,154,.14)" : "rgba(0,137,123,.07)",
                      borderRadius: 100,
                      padding: "6px 16px",
                      fontFamily: "var(--body)",
                      fontSize: 11,
                      fontWeight: 700,
                      color: brand.tealBright,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      lineHeight: 1,
                      height: "fit-content",
                    }}>
                      {c.tag}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--heading)", fontSize: 20, fontWeight: 700, color: hoveredCard === i ? "#fff" : brand.navy, marginBottom: 8, transition: "color .4s" }}>{c.title}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: 13, color: hoveredCard === i ? "rgba(255,255,255,.55)" : brand.gray500, lineHeight: 1.65, flex: 1, marginBottom: 22, transition: "color .4s" }}>{c.desc}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, borderTop: `1px solid ${hoveredCard === i ? "rgba(255,255,255,.07)" : brand.gray100}`, paddingTop: 16 }}>
                    {[{ l: "Duration", v: c.dur }, { l: "Format", v: c.fmt }, { l: "Outcome", v: c.cert }].map((m) => (
                      <div key={m.l}>
                        <div style={{ fontFamily: "var(--body)", fontSize: 9, color: brand.gray500, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 1 }}>{m.l}</div>
                        <div style={{ fontFamily: "var(--body)", fontSize: 11, fontWeight: 600, color: hoveredCard === i ? "#fff" : brand.navy, transition: "color .4s" }}>{m.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <Link to="/programs"><Btn variant="outline">View All Programs →</Btn></Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section style={{ background: brand.off, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <SectionLabel>SUCCESS STORIES</SectionLabel>
              <SectionTitle>Our Graduates Speak</SectionTitle>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: "#fff", borderRadius: 18, padding: 28, boxShadow: "0 2px 14px rgba(10,22,40,.03)", border: `1px solid ${brand.gray100}`, height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: 28, color: brand.teal, marginBottom: 10 }}>❝</div>
                  <p style={{ fontFamily: "var(--body)", fontSize: 13, color: brand.gray700, lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{t.text}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg,${brand.teal},${brand.navy})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--body)", fontSize: 13, fontWeight: 700, color: "#fff" }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 700, color: brand.navy }}>{t.name}</div>
                      <div style={{ fontFamily: "var(--body)", fontSize: 11, color: brand.gray500 }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <FadeIn>
          <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center", background: `linear-gradient(165deg,${brand.navy},${brand.deep})`, borderRadius: 26, padding: "clamp(36px,6vw,68px) clamp(24px,4vw,52px)", position: "relative", overflow: "hidden" }}>
            <MolSvg style={{ position: "absolute", top: -20, right: -30, width: 180 }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <h2 style={{ fontFamily: "var(--heading)", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-.02em", lineHeight: 1.15 }}>
                Ready to Start Your Clinical Research Career?
              </h2>
              <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "rgba(255,255,255,.5)", lineHeight: 1.65, maxWidth: 480, margin: "0 auto 28px" }}>
                Join thousands of successful graduates. Enroll today and take the first step.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Link to="/enroll"><Btn>Get Started Now →</Btn></Link>
                <Link to="/contact"><Btn variant="secondary">Contact Us</Btn></Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
