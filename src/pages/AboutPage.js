import brand from "../styles/brand";
import { FadeIn, SectionLabel, SectionTitle, PageHero } from "../components/UI";

const FEATURES = [
  "Expert-Led Interactive Curriculum",
  "ICH-GCP Compliant Worldwide",
  "Job Placement Support & Registry",
  "Flexible Online & Self-Paced Learning",
  "200+ Industry Hiring Partners",
  "Alumni Network in 40+ Countries",
];

const TEAM = [
  { name: "Dr. Helen Richards", role: "Founder & CEO", bio: "25+ years in pharmaceutical research. Former VP at a top-10 CRO.", avatar: "HR" },
  { name: "Prof. James Okonkwo", role: "Head of Training", bio: "PhD in Pharmacology. 15 years designing clinical research curricula.", avatar: "JO" },
  { name: "Lisa Chen, MPH", role: "Career Services Director", bio: "Connects graduates with 200+ hiring partners across pharma and biotech.", avatar: "LC" },
  { name: "Dr. Mark Adebayo", role: "Lead CRA Instructor", bio: "Certified CRA, 20+ years monitoring Phase I–IV trials globally.", avatar: "MA" },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <PageHero
        label="ABOUT US"
        title="Empowering Clinical Research Professionals Since 2008"
        desc="Paragon Global Network is a leading provider of interactive, online clinical research certification training."
      />

      {/* Mission + Features */}
      <section style={{ background: "#fff", padding: "72px 24px" }}>
        <div
          className="about-2col"
          style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}
        >
          <FadeIn>
            <div>
              <SectionLabel>OUR MISSION</SectionLabel>
              <SectionTitle>Advancing Global Health Through Education</SectionTitle>
              <p style={{ fontFamily: "var(--body)", fontSize: 14, color: brand.gray700, lineHeight: 1.7, marginTop: 18 }}>
                Our programs are developed by industry experts with decades of real-world experience. We prepare you for the realities of the job — not just the theory.
              </p>
              <p style={{ fontFamily: "var(--body)", fontSize: 14, color: brand.gray700, lineHeight: 1.7, marginTop: 12 }}>
                Alumni work at major pharma companies, CROs, and research institutions across North America, Europe, Asia, Australia, and Africa. Our ICH-GCP compliant programs have earned global recognition.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ background: brand.off, borderRadius: 22, padding: 32, border: `1px solid ${brand.gray100}` }}>
              {FEATURES.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 0", borderBottom: i < FEATURES.length - 1 ? `1px solid ${brand.gray100}` : "none" }}>
                  <div style={{ width: 26, height: 26, borderRadius: 7, background: `linear-gradient(135deg,${brand.teal},${brand.tealLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", flexShrink: 0 }}>✓</div>
                  <span style={{ fontFamily: "var(--body)", fontSize: 13, color: brand.navy, fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: brand.off, padding: "72px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <SectionLabel>LEADERSHIP</SectionLabel>
              <SectionTitle>Meet Our Team</SectionTitle>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 22 }}>
            {TEAM.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: "#fff", borderRadius: 18, padding: 26, textAlign: "center", border: `1px solid ${brand.gray100}` }}>
                  <div style={{ width: 64, height: 64, borderRadius: 18, background: `linear-gradient(135deg,${brand.teal},${brand.navy})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--body)", fontSize: 22, fontWeight: 700, color: "#fff", margin: "0 auto 14px" }}>{t.avatar}</div>
                  <h4 style={{ fontFamily: "var(--heading)", fontSize: 19, fontWeight: 700, color: brand.navy, marginBottom: 3 }}>{t.name}</h4>
                  <div style={{ fontFamily: "var(--body)", fontSize: 11, fontWeight: 600, color: brand.teal, marginBottom: 10 }}>{t.role}</div>
                  <p style={{ fontFamily: "var(--body)", fontSize: 12, color: brand.gray500, lineHeight: 1.6 }}>{t.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
