import { useState } from "react";
import brand from "../styles/brand";
import { useToast } from "../context/ToastContext";
import { Link } from "../components/Router";
import { FadeIn, Btn, Input, PageHero } from "../components/UI";

const PROGRAM_OPTIONS = [
  { value: "CRA", label: "Clinical Research Associate (CRA)", price: "$2,495", duration: "12 Weeks" },
  { value: "CDM", label: "Clinical Data Management (CDM)", price: "$2,195", duration: "10 Weeks" },
  { value: "CRC", label: "Clinical Research Coordinator (CRC)", price: "$1,895", duration: "8 Weeks" },
];

const STEP_LABELS = ["Your Info", "Program", "Complete"];

export default function EnrollPage() {
  const toast = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", education: "", experience: "" });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleNext = () => {
    if (step === 1) {
      if (!form.name || !form.email) {
        toast("Please fill in your name and email.", "error");
        return;
      }
      if (!form.email.includes("@")) {
        toast("Invalid email.", "error");
        return;
      }
      setStep(2);
      toast("Step 1 complete!", "info");
    } else {
      if (!form.program) {
        toast("Please select a program.", "error");
        return;
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        if (Math.random() > 0.2) {
          toast("Enrollment submitted! Check your email for next steps.");
          setStep(3);
        } else {
          toast("Enrollment failed — payment gateway timeout. Please try again.", "error");
        }
      }, 2000);
    }
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <PageHero
        label="ENROLLMENT"
        title="Start Your Journey"
        desc="Complete your enrollment in two simple steps. Payment plans available."
      />

      <section style={{ background: "#fff", padding: "56px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>

          {/* Step indicator */}
          <FadeIn>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 44 }}>
              {[1, 2, 3].map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 34, height: 34, borderRadius: 9,
                      background: step >= s ? `linear-gradient(135deg,${brand.teal},${brand.tealLight})` : brand.gray100,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--body)", fontSize: 13, fontWeight: 700,
                      color: step >= s ? "#fff" : brand.gray500, transition: "all .3s",
                    }}
                  >
                    {step > s ? "✓" : s}
                  </div>
                  <span style={{ fontFamily: "var(--body)", fontSize: 12, fontWeight: 600, color: step >= s ? brand.navy : brand.gray500 }}>
                    {STEP_LABELS[s - 1]}
                  </span>
                  {s < 3 && (
                    <div style={{ width: 36, height: 2, background: step > s ? brand.teal : brand.gray100, borderRadius: 2, transition: "background .3s" }} />
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* ── Step 3: Success ── */}
          {step === 3 ? (
            <FadeIn>
              <div style={{ textAlign: "center", padding: "36px 0" }}>
                <div
                  style={{
                    width: 72, height: 72, borderRadius: 18,
                    background: `linear-gradient(135deg,${brand.green},#66BB6A)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px", fontSize: 34, color: "#fff",
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontFamily: "var(--heading)", fontSize: 28, fontWeight: 700, color: brand.navy, marginBottom: 10 }}>
                  Enrollment Submitted!
                </h3>
                <p style={{ fontFamily: "var(--body)", fontSize: 14, color: brand.gray500, lineHeight: 1.65, maxWidth: 380, margin: "0 auto 24px" }}>
                  Thank you, {form.name}! Confirmation sent to {form.email} with next steps and payment details.
                </p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                  <Link to="/"><Btn>Back to Home</Btn></Link>
                  <Link to="/programs"><Btn variant="outline">View Programs</Btn></Link>
                </div>
              </div>
            </FadeIn>
          ) : (
            /* ── Steps 1 & 2: Form ── */
            <FadeIn>
              <div style={{ background: brand.off, borderRadius: 22, padding: 32, border: `1px solid ${brand.gray100}` }}>
                {step === 1 ? (
                  <>
                    <h3 style={{ fontFamily: "var(--heading)", fontSize: 20, fontWeight: 700, color: brand.navy, marginBottom: 22 }}>
                      Personal Information
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                      <Input label="Full Name" value={form.name} onChange={update("name")} placeholder="Your full name" required />
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                        <Input label="Email" type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" required />
                        <Input label="Phone" value={form.phone} onChange={update("phone")} placeholder="+1 (555) 000-0000" />
                      </div>
                      <Input label="Highest Education" value={form.education} onChange={update("education")} placeholder="e.g., Bachelor's in Biology" />
                    </div>
                  </>
                ) : (
                  <>
                    <h3 style={{ fontFamily: "var(--heading)", fontSize: 20, fontWeight: 700, color: brand.navy, marginBottom: 22 }}>
                      Select Your Program
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {PROGRAM_OPTIONS.map((p) => (
                        <div
                          key={p.value}
                          onClick={() => setForm({ ...form, program: p.value })}
                          style={{
                            padding: "16px 20px", borderRadius: 12, cursor: "pointer", transition: "all .2s",
                            background: form.program === p.value ? "rgba(0,137,123,.05)" : "#fff",
                            border: `2px solid ${form.program === p.value ? brand.teal : brand.gray100}`,
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                          }}
                        >
                          <div>
                            <div style={{ fontFamily: "var(--body)", fontSize: 14, fontWeight: 700, color: brand.navy }}>{p.label}</div>
                            <div style={{ fontFamily: "var(--body)", fontSize: 11, color: brand.gray500 }}>{p.duration} • Online</div>
                          </div>
                          <span style={{ fontFamily: "var(--heading)", fontSize: 20, fontWeight: 700, color: brand.teal }}>{p.price}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 14 }}>
                      <Input label="Prior Experience" textarea value={form.experience} onChange={update("experience")} placeholder="Describe any relevant experience (optional)" />
                    </div>
                  </>
                )}

                {/* Navigation buttons */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, gap: 10 }}>
                  {step > 1 && <Btn variant="outline" onClick={() => setStep(1)}>← Back</Btn>}
                  <Btn onClick={handleNext} disabled={loading} style={{ marginLeft: "auto" }}>
                    {loading ? "Processing..." : step === 1 ? "Continue →" : "Submit Enrollment →"}
                  </Btn>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
}
