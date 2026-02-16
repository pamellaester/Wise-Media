import { useLocation } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/InteractiveBackground";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>

      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Background interativo */}
      <InteractiveBackground />

      {/* Conteúdo principal */}
      <Navbar />
      <main id="main-content" className="flex-grow relative z-10 page-enter" key={location.pathname}>
        <AppRoutes />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
