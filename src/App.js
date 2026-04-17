import { ToastProvider } from "./context/ToastContext";
import { useRoute } from "./components/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Pages */
import HomePage from "./pages/HomePage";
import ProgramsPage from "./pages/ProgramsPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import EnrollPage from "./pages/EnrollPage";
import NotFoundPage from "./pages/NotFoundPage";

/* Route map */
const ROUTES = {
  "/": HomePage,
  "/programs": ProgramsPage,
  "/about": AboutPage,
  "/careers": CareersPage,
  "/blog": BlogPage,
  "/contact": ContactPage,
  "/enroll": EnrollPage,
};

function AppRouter() {
  const path = useRoute();
  const Page = ROUTES[path] || NotFoundPage;
  return <Page />;
}

export default function App() {
  return (
    <ToastProvider>
      <div
        style={{
          fontFamily: "var(--body)",
          overflowX: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </ToastProvider>
  );
}
