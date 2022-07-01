import { Routes, Route } from "react-router-dom";

import Inicio from "./components/Inicio";
import Busqueda from "./components/Busqueda";
import Detalle from "./components/Detalle";
import Footer from "./components/Footer";
import Resultados from "./components/Resultados";

import "./css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/busqueda" element={<Busqueda />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route element={<Resultados />} path="/resultados" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
