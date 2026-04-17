import brand from "../styles/brand";
import { Link } from "../components/Router";
import { Btn } from "../components/UI";

export default function NotFoundPage() {
  return (
    <div
      style={{
        paddingTop: 72,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      <div style={{ textAlign: "center", padding: "60px 24px" }}>
        <div
          style={{
            fontFamily: "var(--heading)",
            fontSize: 96,
            fontWeight: 700,
            background: `linear-gradient(135deg,${brand.teal},${brand.gold})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1,
          }}
        >
          404
        </div>
        <h2
          style={{
            fontFamily: "var(--heading)",
            fontSize: 26,
            fontWeight: 700,
            color: brand.navy,
            margin: "14px 0 10px",
          }}
        >
          Page Not Found
        </h2>
        <p
          style={{
            fontFamily: "var(--body)",
            fontSize: 14,
            color: brand.gray500,
            marginBottom: 24,
          }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Btn>Go Home →</Btn>
        </Link>
      </div>
    </div>
  );
}
