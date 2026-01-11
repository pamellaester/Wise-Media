import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Servicos from "../pages/Servicos";
import Contato from "../pages/Contato";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}
