import { useState } from "react";
import brand from "../styles/brand";
import { Link } from "../components/Router";
import { FadeIn, Btn, SectionLabel, SectionTitle } from "../components/UI";

/* ─── SVG Icons (replacing emojis) ─── */
function IconCRA({ color = brand.teal, size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill={`${color}15`} />
      <path d="M14 28V16h3v12h-3zm5-16v16h3V12h-3zm5 6v10h3V18h-3z" fill={color} />
    </svg>
  );
}
function IconCDM({ color = brand.gold, size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill={`${color}15`} />
      <rect x="11" y="12" width="18" height="16" rx="2" stroke={color} strokeWidth="2" fill="none" />
      <path d="M15 18h10M15 22h7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="27" cy="26" r="4" fill={color} opacity=".3" />
      <path d="M26 26l1 1 2-2" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCRC({ color = brand.tealLight, size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill={`${color}15`} />
      <path d="M20 12c-3 0-6 2-6 5s3 4 6 4 6-1 6-4-3-5-6-5z" stroke={color} strokeWidth="2" fill="none" />
      <path d="M14 22v4c0 2 3 3 6 3s6-1 6-3v-4" stroke={color} strokeWidth="2" fill="none" />
      <circle cx="20" cy="16" r="1.5" fill={color} />
    </svg>
  );
}

const STATS = [
  { value: "5,000+", label: "Graduates Worldwide" },
  { value: "96%", label: "Certification Pass Rate" },
  { value: "200+", label: "Hiring Partners" },
  { value: "15+", label: "Years of Excellence" },
];

const COURSES = [
  { Icon: IconCRA, title: "Clinical Research Associate (CRA)", tag: "Most Popular", desc: "Become a certified CRA. Learn monitoring, site management, and regulatory compliance for clinical trials.", dur: "12 Weeks", fmt: "Online", cert: "CRA Cert" },
  { Icon: IconCDM, title: "Clinical Data Management (CDM)", tag: "High Demand", desc: "Master clinical data collection, processing, and database management for pharma and biotech.", dur: "10 Weeks", fmt: "Self-Paced", cert: "CDM Cert" },
  { Icon: IconCRC, title: "Clinical Research Coordinator (CRC)", tag: "Career Starter", desc: "Prepare for coordinating clinical trials — enrollment, compliance, and documentation.", dur: "8 Weeks", fmt: "Hybrid", cert: "CRC Cert" },
];

const TESTIMONIALS = [
  { name: "Dr. Amina O.", role: "CRA at Pfizer", text: "Paragon's CRA course transformed my career. The interactive modules were incredibly practical, and I landed my dream role within weeks.", avatar: "AO" },
  { name: "Michael T.", role: "CDM Specialist", text: "The CDM certification gave me the edge I needed. Thorough curriculum and instructors who genuinely care.", avatar: "MT" },
  { name: "Sarah K.", role: "CRC at Johns Hopkins", text: "Zero clinical research experience to a coordinator role at a top institution. This training is the real deal.", avatar: "SK" },
];

/* Partner brands — using Google favicon API for real logos */
const PARTNERS = [
  { name: "AstraZeneca", logo: "https://www.google.com/s2/favicons?domain=astrazeneca.com&sz=128" },
  { name: "Aventis", logo: "https://www.google.com/s2/favicons?domain=sanofi.com&sz=128" },
  { name: "Roche", logo: "https://www.google.com/s2/favicons?domain=roche.com&sz=128" },
  { name: "Novartis", logo: "https://www.google.com/s2/favicons?domain=novartis.com&sz=128" },
  { name: "Cardinal Health", logo: "https://www.google.com/s2/favicons?domain=cardinalhealth.com&sz=128" },
  { name: "CTI", logo: "https://www.google.com/s2/favicons?domain=ctifacts.com&sz=128" },
  { name: "GSK", logo: "https://www.google.com/s2/favicons?domain=gsk.com&sz=128" },
  { name: "Johnson & Johnson", logo: "https://www.google.com/s2/favicons?domain=jnj.com&sz=128" },
  { name: "Janssen", logo: "https://www.google.com/s2/favicons?domain=janssen.com&sz=128" },
  { name: "MedNet Solutions", logo: "https://www.google.com/s2/favicons?domain=mednetsolutions.com&sz=128" },
  { name: "Pfizer", logo: "https://www.google.com/s2/favicons?domain=pfizer.com&sz=128" },
  { name: "NexGenix", logo: "https://www.google.com/s2/favicons?domain=nexgenix.com&sz=128" },
  { name: "Merck", logo: "https://www.google.com/s2/favicons?domain=merck.com&sz=128" },
  { name: "Quintiles", logo: "https://www.google.com/s2/favicons?domain=iqvia.com&sz=128" },
  { name: "PPD", logo: "https://www.google.com/s2/favicons?domain=ppd.com&sz=128" },
  { name: "Parexel", logo: "https://www.google.com/s2/favicons?domain=parexel.com&sz=128" },
  { name: "Bayer", logo: "https://www.google.com/s2/favicons?domain=bayer.com&sz=128" },
  { name: "Quest Diagnostics", logo: "https://www.google.com/s2/favicons?domain=questdiagnostics.com&sz=128" },
];

/* Services listed on original site */
const SERVICES = [
  "Clinical Data Management",
  "Clinical Project Management",
  "Clinical Research Associates",
  "Clinical Trial Managers",
  "Quality Assurance",
  "Drug Safety",
  "Clinical SAS Programming",
  "Medical Writer",
  "Biostatistics",
  "EDC Developers",
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
        <div style={{ position: "absolute", inset: 0, opacity: 0.022, backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,137,123,.06),transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,.04),transparent 70%)" }} />

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
                  Connecting You to the Best Jobs in{" "}
                  <span style={{ background: `linear-gradient(135deg,${brand.tealBright},${brand.gold})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Clinical Research
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.16}>
                <p style={{ fontFamily: "var(--body)", fontSize: 16, color: brand.gray300, lineHeight: 1.75, marginBottom: 34, maxWidth: 520 }}>
                  Paragon Global Network aims to give you a global outreach to the latest jobs in the clinical industry. We are an online recruitment agency and training provider — giving you access to the best jobs and certifications in CRA, CDM, and CRC.
                </p>
              </FadeIn>

              <FadeIn delay={0.24}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link to="/programs"><Btn>Explore Training →</Btn></Link>
                  <Link to="/careers"><Btn variant="secondary">Job Placement</Btn></Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.32}>
                <div style={{ display: "flex", gap: 20, marginTop: 36, flexWrap: "wrap" }}>
                  {["ICH-GCP Compliant", "Globally Recognized", "200+ Hiring Partners"].map((t) => (
                    <div key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: brand.tealBright }} />
                      <span style={{ fontFamily: "var(--body)", fontSize: 12, color: brand.gray300, fontWeight: 500 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right side — Who We Are / What We Do cards */}
            <div className="hero-visual" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <FadeIn delay={0.2}>
                <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, padding: 28 }}>
                  <div style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 700, color: brand.tealBright, letterSpacing: ".04em", marginBottom: 8 }}>Who We Are</div>
                  <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "rgba(255,255,255,.6)", lineHeight: 1.65 }}>
                    We are a staffing agency committed to give you access to the best jobs in the clinical research industry.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div style={{ background: "rgba(201,168,76,.05)", border: "1px solid rgba(201,168,76,.1)", borderRadius: 16, padding: 28 }}>
                  <div style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 700, color: brand.gold, letterSpacing: ".04em", marginBottom: 8 }}>What We Do</div>
                  <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "rgba(255,255,255,.6)", lineHeight: 1.65 }}>
                    We have a proven track record with major pharmaceutical and medical device companies to support and grow their clinical operational divisions.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {SERVICES.slice(0, 6).map((s) => (
                    <span key={s} style={{
                      background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)",
                      borderRadius: 8, padding: "6px 14px",
                      fontFamily: "var(--body)", fontSize: 11, color: "rgba(255,255,255,.5)", fontWeight: 500,
                    }}>{s}</span>
                  ))}
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

      {/* ════════ SERVICES STRIP ════════ */}
      <section style={{ background: "#fff", padding: "56px 24px 0" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "6px 16px" }}>
              {SERVICES.map((s, i) => (
                <span key={s} style={{ fontFamily: "var(--body)", fontSize: 14, color: brand.gray500 }}>
                  {s}{i < SERVICES.length - 1 && <span style={{ color: brand.gray300, margin: "0 4px" }}>|</span>}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════ COURSES PREVIEW ════════ */}
      <section style={{ background: "#fff", padding: "80px 24px 96px" }}>
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
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, gap: 12 }}>
                    <c.Icon size={42} />
                    <span style={{
                      background: hoveredCard === i ? "rgba(38,166,154,.14)" : "rgba(0,137,123,.07)",
                      borderRadius: 100, padding: "6px 16px",
                      fontFamily: "var(--body)", fontSize: 11, fontWeight: 700,
                      color: brand.tealBright, whiteSpace: "nowrap",
                      flexShrink: 0, lineHeight: 1, height: "fit-content",
                    }}>{c.tag}</span>
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

      {/* ════════ PARTNER LOGOS ════════ */}
      <section style={{ background: brand.off, padding: "72px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <SectionLabel>OUR PARTNERS</SectionLabel>
              <SectionTitle>Trusted by Leading Pharma & Biotech Companies</SectionTitle>
              <p style={{ fontFamily: "var(--body)", fontSize: 14, color: brand.gray500, maxWidth: 500, margin: "12px auto 0", lineHeight: 1.6 }}>
                Our alumni have been placed at and referred from a wide cross-section of hospitals, clinics, CROs, and pharmaceutical companies globally.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 14,
            }}>
              {PARTNERS.map((p) => (
                <div
                  key={p.name}
                  style={{
                    background: "#fff",
                    border: `1px solid ${brand.gray100}`,
                    borderRadius: 12,
                    padding: "22px 16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    minHeight: 110,
                    transition: "all .25s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = brand.teal;
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,137,123,.1)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = brand.gray100;
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    style={{
                      width: 40,
                      height: 40,
                      objectFit: "contain",
                      borderRadius: 8,
                    }}
                  />
                  <span style={{
                    fontFamily: "var(--body)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: brand.gray700,
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}>
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
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
                <div style={{ background: brand.off, borderRadius: 18, padding: 28, border: `1px solid ${brand.gray100}`, height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontFamily: "var(--heading)", fontSize: 32, color: brand.teal, marginBottom: 10, lineHeight: 1 }}>"</div>
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
      <section style={{ background: brand.off, padding: "80px 24px 96px" }}>
        <FadeIn>
          <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center", background: `linear-gradient(165deg,${brand.navy},${brand.deep})`, borderRadius: 26, padding: "clamp(36px,6vw,68px) clamp(24px,4vw,52px)", position: "relative", overflow: "hidden" }}>
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