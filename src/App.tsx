import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import Seo from "./seo/Seo";
import { NAV_ITEMS } from "./site/content";

const DashboardPage = lazy(() => import("./pages/site/DashboardPage"));
const AboutPage = lazy(() => import("./pages/site/AboutPage"));
const ServicesPage = lazy(() => import("./pages/site/ServicesPage"));
const WhyChooseUsPage = lazy(() => import("./pages/site/WhyChooseUsPage"));
const PortfolioPage = lazy(() => import("./pages/site/PortfolioPage"));
const ReviewsPage = lazy(() => import("./pages/site/ReviewsPage"));
const SocialPage = lazy(() => import("./pages/site/SocialPage"));
const FaqPage = lazy(() => import("./pages/site/FaqPage"));
const BookingPage = lazy(() => import("./pages/site/BookingPage"));

function AppShell() {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [weddingDate, setWeddingDate] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Seo />
      <div className="site-shell">
        <Header items={NAV_ITEMS} />

        <AnimatePresence mode="wait">
          <Suspense fallback={<RouteSkeleton />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/experience" element={<WhyChooseUsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/testimonials" element={<ReviewsPage />} />
              <Route path="/social" element={<SocialPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route
                path="/booking"
                element={<BookingPage onWeddingDateChange={setWeddingDate} />}
              />
              <Route path="/why-choose-us" element={<Navigate to="/experience" replace />} />
              <Route path="/reviews" element={<Navigate to="/testimonials" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </AnimatePresence>

        <Footer showBackToTop={showBackToTop} />
        <WhatsAppButton weddingDate={weddingDate} />
      </div>
    </>
  );
}

function RouteSkeleton() {
  return (
    <main className="route-page">
      <div className="page-container py-12 md:py-16">
        <div className="h-6 w-40 rounded-full bg-white/70" />
        <div className="mt-5 h-10 w-72 rounded-2xl bg-white/65" />
        <div className="mt-4 h-28 rounded-3xl bg-white/55" />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
