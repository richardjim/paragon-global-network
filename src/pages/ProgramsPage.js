import brand from "../styles/brand";
import { useToast } from "../context/ToastContext";
import { FadeIn, Btn, PageHero } from "../components/UI";

const PROGRAMS = [
  {
    icon: "🔬", title: "Clinical Research Associate (CRA)", tag: "Most Popular",
    desc: "Our flagship CRA certification covers every aspect of clinical trial monitoring. From ICH-GCP regulations to site selection, monitoring visits, and close-out procedures.",
    modules: ["Introduction to Clinical Trials", "ICH-GCP Guidelines", "Protocol Review & Analysis", "Site Selection & Initiation", "Monitoring Visits & Reports", "Data Verification & Query Resolution", "Safety Reporting & Pharmacovigilance", "Study Close-out Procedures"],
    price: "$2,495", duration: "12 Weeks", format: "Interactive Online",
  },
  {
    icon: "📊", title: "Clinical Data Management (CDM)", tag: "High Demand",
    desc: "Comprehensive training in clinical data lifecycle management. Learn to design CRFs, build databases, and ensure data integrity throughout clinical trials.",
    modules: ["Clinical Data Management Overview", "CRF Design & Database Build", "Data Entry & Validation", "Medical Coding (MedDRA & WHO-DD)", "SAE Reconciliation", "Database Lock Procedures", "CDISC Standards (CDASH/SDTM)", "Regulatory Submissions"],
    price: "$2,195", duration: "10 Weeks", format: "Self-Paced Online",
  },
  {
    icon: "🩺", title: "Clinical Research Coordinator (CRC)", tag: "Career Starter",
    desc: "Prepare for a rewarding career coordinating clinical trials. Covers patient enrollment, informed consent, protocol compliance, and documentation.",
    modules: ["Role of the CRC", "Informed Consent Process", "Patient Screening & Enrollment", "Study Drug Management", "Source Documentation", "Regulatory Binder Management", "Adverse Event Reporting", "Audit & Inspection Readiness"],
    price: "$1,895", duration: "8 Weeks", format: "Hybrid (Online + Workshop)",
  },
];

export default function ProgramsPage() {
  const toast = useToast();

  return (
    <div style={{ paddingTop: 72 }}>
      <PageHero
        label="OUR PROGRAMS"
        title="Certification Programs"
        desc="Interactive online clinical research training courses accredited for global ICH-GCP compliance."
      />

      <section style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", flexDirection: "column", gap: 36 }}>
          {PROGRAMS.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ background: brand.off, borderRadius: 22, overflow: "hidden", border: `1px solid ${brand.gray100}` }}>
                {/* Header */}
                <div style={{ padding: "32px 32px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 40 }}>{p.icon}</span>
                      <div>
                        <h3 style={{ fontFamily: "var(--heading)", fontSize: 24, fontWeight: 700, color: brand.navy }}>{p.title}</h3>
                        <div style={{ display: "flex", gap: 10, marginTop: 5, flexWrap: "wrap" }}>
                          <span style={{ fontFamily: "var(--body)", fontSize: 11, fontWeight: 700, color: brand.teal, background: "rgba(0,137,123,.08)", borderRadius: 5, padding: "2px 9px" }}>{p.tag}</span>
                          <span style={{ fontFamily: "var(--body)", fontSize: 12, color: brand.gray500 }}>{p.duration} • {p.format}</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "var(--heading)", fontSize: 30, fontWeight: 700, color: brand.teal }}>{p.price}</div>
                      <div style={{ fontFamily: "var(--body)", fontSize: 11, color: brand.gray500 }}>Payment plans available</div>
                    </div>
                  </div>
                  <p style={{ fontFamily: "var(--body)", fontSize: 14, color: brand.gray700, lineHeight: 1.65, marginTop: 18, marginBottom: 22 }}>{p.desc}</p>
                </div>

                {/* Modules */}
                <div style={{ padding: "0 32px 24px" }}>
                  <div style={{ fontFamily: "var(--body)", fontSize: 11, fontWeight: 700, color: brand.navy, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 12 }}>Course Modules</div>
                  <div className="modules-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px 22px" }}>
                    {p.modules.map((m, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <div style={{ width: 18, height: 18, borderRadius: 5, background: "rgba(0,137,123,.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: brand.teal, flexShrink: 0 }}>✓</div>
                        <span style={{ fontFamily: "var(--body)", fontSize: 12, color: brand.gray700 }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ padding: "14px 32px 26px", display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Btn onClick={() => { window.location.hash = "#/enroll"; toast(`${p.title} selected!`); }}>Enroll Now →</Btn>
                  <Btn variant="outline" onClick={() => toast("Brochure download started!")}>Download Brochure</Btn>
                  <Btn
                    variant="secondary"
                    style={{ background: "rgba(0,0,0,.04)", color: brand.gray700, border: `1px solid ${brand.gray100}` }}
                    onClick={() => toast("Syllabus request failed. Server timeout — please try again.", "error")}
                  >
                    Request Syllabus
                  </Btn>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
