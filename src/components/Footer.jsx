import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-400 text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img
            src="/img/logo_footer.png" // Ajusta esta ruta a tu logo real
            alt="Logo Empresa"
            className="h-16 mb-4"
          />
          <p className="text-sm">
            Conectando a nuestra ciudad con la mejor tecnología.
          </p>
        </div>

        {/* Enlaces Gubernamentales */}
        <div>
          <h3 className="text-lg font-bold mb-4">Enlaces Gubernamentales</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.arcotel.gob.ec/" target="_blank" rel="noopener noreferrer" className="hover:underline">ARCOTEL</a></li>
            <li><a href="https://www.telecomunicaciones.gob.ec/" target="_blank" rel="noopener noreferrer" className="hover:underline">Ministerio TIC</a></li>
            <li><a href="https://www.gob.ec/" target="_blank" rel="noopener noreferrer" className="hover:underline">Gobierno Ecuador</a></li>
          </ul>
        </div>

        {/* Enlaces de Interés */}
        <div>
          <h3 className="text-lg font-bold mb-4">Enlaces de Interés</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
            <li><a href="#" className="hover:underline">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:underline">Atención al Usuario</a></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-bold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-700 p-2 rounded-full hover:bg-purple-200">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-500 p-2 rounded-full hover:bg-pink-200">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisora */}
      <div className="border-t border-white/30 py-4">
        <p className="text-center text-xs">
          © {new Date().getFullYear()} Desarrollado por <span className="font-semibold">IonigualitySoft</span>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
