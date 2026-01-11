import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/InteractiveBackground"; // <- importa o Canvas

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background interativo */}
      <InteractiveBackground />

      {/* Conteúdo principal */}
      <Navbar />
      <main className="flex-grow relative z-10">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
