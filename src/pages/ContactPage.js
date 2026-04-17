import { useState } from "react";
import brand from "../styles/brand";
import { useToast } from "../context/ToastContext";
import { FadeIn, Btn, Input, PageHero } from "../components/UI";

const CONTACT_INFO = [
  { icon: "📧", label: "Email", value: "info@paragonglobalnetwork.com" },
  { icon: "📞", label: "Phone", value: "+1 (800) 555-0142" },
  { icon: "📍", label: "Address", value: "1200 Research Blvd, Suite 300\nRaleigh, NC 27606, USA" },
  { icon: "🕐", label: "Hours", value: "Mon–Fri: 9AM–6PM EST" },
];

export default function ContactPage() {
  const toast = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) {
      toast("Please fill in all required fields.", "error");
      return;
    }
    if (!form.email.includes("@")) {
      toast("Invalid email address.", "error");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (Math.random() > 0.3) {
        toast("Message sent! We'll reply within 24 hours.");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast("Failed to send. Server is experiencing high load — please try again.", "error");
      }
    }, 1500);
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <PageHero
        label="GET IN TOUCH"
        title="Contact Us"
        desc="Have questions about our programs? Ready to enroll? We're here to help."
      />

      <section style={{ background: "#fff", padding: "56px 24px" }}>
        <div
          className="contact-grid"
          style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 44 }}
        >
          {/* Sidebar */}
          <FadeIn>
            <div>
              <h3 style={{ fontFamily: "var(--heading)", fontSize: 22, fontWeight: 700, color: brand.navy, marginBottom: 18 }}>
                Contact Information
              </h3>
              {CONTACT_INFO.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 22 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: brand.off, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: "var(--body)", fontSize: 11, fontWeight: 700, color: brand.gray500, textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 1 }}>{c.label}</div>
                    <div style={{ fontFamily: "var(--body)", fontSize: 13, color: brand.navy, whiteSpace: "pre-line" }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15}>
            <div style={{ background: brand.off, borderRadius: 22, padding: 32, border: `1px solid ${brand.gray100}` }}>
              <h3 style={{ fontFamily: "var(--heading)", fontSize: 20, fontWeight: 700, color: brand.navy, marginBottom: 22 }}>
                Send Us a Message
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Input label="Full Name" value={form.name} onChange={update("name")} placeholder="John Doe" required />
                <Input label="Email" type="email" value={form.email} onChange={update("email")} placeholder="john@example.com" required />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
                <Input label="Phone" value={form.phone} onChange={update("phone")} placeholder="+1 (555) 000-0000" />
                <Input label="Subject" value={form.subject} onChange={update("subject")} placeholder="Course Inquiry" />
              </div>

              <div style={{ marginTop: 14 }}>
                <Input label="Message" textarea value={form.message} onChange={update("message")} placeholder="How can we help?" required />
              </div>

              <div style={{ marginTop: 18 }}>
                <Btn onClick={handleSend} disabled={loading} style={{ width: "100%" }}>
                  {loading ? "Sending..." : "Send Message →"}
                </Btn>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
