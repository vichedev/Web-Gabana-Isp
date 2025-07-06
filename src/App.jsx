import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

// Componentes principales
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Documentos from "./components/Documentos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Planes from "./components/Planes";
import ParametrosCalidad from "./components/ParametrosCalidad";

// Componente para ir arriba al cambiar de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <Nosotros />
                <Planes />
              </motion.div>
            }
          />
          <Route
            path="/documentos"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Documentos />
              </motion.div>
            }
          />
          <Route
            path="/contacto"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Contacto />
              </motion.div>
            }
          />
          <Route
            path="/nosotros"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Nosotros />
              </motion.div>
            }
          />
          <Route
            path="/parametros-calidad"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ParametrosCalidad />
              </motion.div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
