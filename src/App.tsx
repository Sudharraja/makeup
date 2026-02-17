import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
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
import AboutPage from "./pages/site/AboutPage";
import BookingPage from "./pages/site/BookingPage";
import DashboardPage from "./pages/site/DashboardPage";
import PortfolioPage from "./pages/site/PortfolioPage";
import ReviewsPage from "./pages/site/ReviewsPage";
import ServicesPage from "./pages/site/ServicesPage";
import WhyChooseUsPage from "./pages/site/WhyChooseUsPage";
import Seo from "./seo/Seo";
import { NAV_ITEMS } from "./site/content";

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
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route
              path="/booking"
              element={<BookingPage onWeddingDateChange={setWeddingDate} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>

        <Footer showBackToTop={showBackToTop} />
        <WhatsAppButton weddingDate={weddingDate} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
