import brand from "../styles/brand";
import { useToast } from "../context/ToastContext";
import { FadeIn, PageHero } from "../components/UI";

const POSTS = [
  { title: "The Growing Demand for CRAs in 2026", date: "Apr 10, 2026", category: "Industry Trends", excerpt: "CRA roles see a 23% increase in demand this year. Here's what you need to know about breaking in." },
  { title: "How to Prepare for Your CRA Certification Exam", date: "Mar 28, 2026", category: "Study Tips", excerpt: "Strategies that helped 96% of our graduates pass their certification on the first attempt." },
  { title: "Understanding ICH-GCP Guidelines: A Beginner's Guide", date: "Mar 15, 2026", category: "Education", excerpt: "ICH-GCP is the foundation of clinical research. Key principles every aspiring professional needs." },
  { title: "Career Spotlight: From CRC to Clinical Operations Director", date: "Feb 28, 2026", category: "Career Stories", excerpt: "Alumni Sarah K. started as a CRC and within 8 years progressed to leading clinical operations." },
  { title: "Remote Monitoring in Clinical Trials: The New Normal", date: "Feb 10, 2026", category: "Industry Trends", excerpt: "How decentralized trials and remote monitoring are reshaping the CRA role." },
  { title: "CDM vs CRA: Which Career Path is Right for You?", date: "Jan 22, 2026", category: "Career Guidance", excerpt: "Both paths offer rewarding careers, but they suit different personalities and skill sets." },
];

export default function BlogPage() {
  const toast = useToast();

  return (
    <div style={{ paddingTop: 72 }}>
      <PageHero
        label="BLOG & RESOURCES"
        title="Clinical Research Insights"
        desc="Expert articles, study tips, industry trends, and career guidance."
      />

      <section style={{ background: "#fff", padding: "56px 24px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 22 }}>
          {POSTS.map((p, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div
                style={{
                  background: brand.off, borderRadius: 18, padding: 26,
                  border: `1px solid ${brand.gray100}`, height: "100%",
                  display: "flex", flexDirection: "column", cursor: "pointer",
                  transition: "all .3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(10,22,40,.07)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                onClick={() => toast(`Opening "${p.title}"...`, "info")}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontFamily: "var(--body)", fontSize: 10, fontWeight: 700, color: brand.teal, background: "rgba(0,137,123,.08)", borderRadius: 5, padding: "2px 9px" }}>{p.category}</span>
                  <span style={{ fontFamily: "var(--body)", fontSize: 11, color: brand.gray500 }}>{p.date}</span>
                </div>
                <h4 style={{ fontFamily: "var(--heading)", fontSize: 19, fontWeight: 700, color: brand.navy, marginBottom: 8, lineHeight: 1.25 }}>{p.title}</h4>
                <p style={{ fontFamily: "var(--body)", fontSize: 12, color: brand.gray500, lineHeight: 1.6, flex: 1 }}>{p.excerpt}</p>
                <span style={{ fontFamily: "var(--body)", fontSize: 12, fontWeight: 600, color: brand.teal, marginTop: 14 }}>Read More →</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
