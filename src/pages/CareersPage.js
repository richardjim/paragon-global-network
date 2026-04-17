import brand from "../styles/brand";
import { useToast } from "../context/ToastContext";
import { FadeIn, Btn, PageHero } from "../components/UI";

const JOBS = [
  { title: "Clinical Research Associate (CRA)", company: "Pfizer Inc.", location: "Remote — USA", type: "Full-Time", salary: "$75K–$95K" },
  { title: "Clinical Data Manager", company: "Novartis", location: "Basel, Switzerland", type: "Full-Time", salary: "CHF 90K–110K" },
  { title: "Clinical Research Coordinator", company: "Johns Hopkins University", location: "Baltimore, MD", type: "Full-Time", salary: "$55K–$70K" },
  { title: "Senior CRA — Oncology", company: "IQVIA", location: "Remote — Europe", type: "Contract", salary: "€80K–€100K" },
  { title: "Clinical Data Analyst", company: "Roche", location: "San Francisco, CA", type: "Full-Time", salary: "$85K–$105K" },
  { title: "CRC — Cardiology Trials", company: "Mayo Clinic", location: "Rochester, MN", type: "Full-Time", salary: "$52K–$65K" },
];

export default function CareersPage() {
  const toast = useToast();

  return (
    <div style={{ paddingTop: 72 }}>
      <PageHero
        label="CAREER CENTER"
        title="Find Clinical Research Jobs"
        desc="Our job placement registry connects certified graduates with top employers worldwide."
      />

      <section style={{ background: "#fff", padding: "56px 24px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ fontFamily: "var(--body)", fontSize: 12, fontWeight: 700, color: brand.navy, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 18 }}>
              Featured Openings ({JOBS.length})
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {JOBS.map((j, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div
                  style={{
                    background: brand.off, borderRadius: 14, padding: "20px 24px",
                    border: `1px solid ${brand.gray100}`, display: "flex",
                    justifyContent: "space-between", alignItems: "center",
                    flexWrap: "wrap", gap: 14, transition: "all .2s", cursor: "pointer",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = brand.teal; e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,137,123,.07)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = brand.gray100; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div>
                    <h4 style={{ fontFamily: "var(--body)", fontSize: 15, fontWeight: 700, color: brand.navy, marginBottom: 3 }}>{j.title}</h4>
                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--body)", fontSize: 12, color: brand.teal, fontWeight: 600 }}>{j.company}</span>
                      <span style={{ fontFamily: "var(--body)", fontSize: 12, color: brand.gray500 }}>{j.location}</span>
                      <span style={{ fontFamily: "var(--body)", fontSize: 12, color: brand.gray500 }}>{j.type}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 700, color: brand.navy }}>{j.salary}</span>
                    <Btn
                      style={{ padding: "7px 16px", fontSize: 11 }}
                      onClick={() => toast(`Applied to "${j.title}" at ${j.company}! Confirmation email sent.`)}
                    >
                      Apply →
                    </Btn>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <Btn variant="outline" onClick={() => toast("Loading more job listings...", "info")}>Load More Jobs</Btn>
            </div>
          </FadeIn>

          {/* Resume upload CTA */}
          <FadeIn delay={0.35}>
            <div style={{ background: brand.off, borderRadius: 20, padding: 32, marginTop: 44, border: `1px solid ${brand.gray100}`, textAlign: "center" }}>
              <h3 style={{ fontFamily: "var(--heading)", fontSize: 22, fontWeight: 700, color: brand.navy, marginBottom: 6 }}>Register for Job Placement</h3>
              <p style={{ fontFamily: "var(--body)", fontSize: 13, color: brand.gray500, marginBottom: 22 }}>Upload your resume to be matched with hiring partners in our network.</p>
              <Btn variant="gold" onClick={() => toast("Resume uploaded successfully! Our team will review it within 48 hours.")}>Upload Resume →</Btn>
              <Btn variant="outline" style={{ marginLeft: 10 }} onClick={() => toast("Profile registration failed. Please try again later.", "error")}>Register Profile</Btn>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
