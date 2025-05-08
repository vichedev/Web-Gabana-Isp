import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-100 via-blue-100 to-orange-100 text-gray-800 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo y descripción */}
        <div className="lg:col-span-2 flex flex-col items-start space-y-4">
          <img
            src="/img/logo_footer.png"
            alt="Logo Empresa"
            className="h-16"
          />
          <p className="text-sm text-gray-700 leading-relaxed">
            Conectando a nuestra ciudad con la mejor tecnología y servicio de calidad.
            Innovación y compromiso para un futuro digital.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-purple-200 p-3 rounded-full transition-all duration-300 shadow-md">
              <FaFacebookF size={18} className="text-purple-600" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-pink-200 p-3 rounded-full transition-all duration-300 shadow-md">
              <FaInstagram size={18} className="text-pink-600" />
            </a>
          </div>
        </div>

        {/* Enlaces Gubernamentales */}
        <div>
          <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-orange-300 inline-block text-gray-800">Enlaces Gubernamentales</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="https://www.speedtest.net/es" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>Speedtest</a></li>
            <li><a href="https://www.arcotel.gob.ec/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>ARCOTEL</a></li>
            <li><a href="https://www.telecomunicaciones.gob.ec/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>Ministerio TIC</a></li>
            <li><a href="https://www.gob.ec/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>Gobierno Ecuador</a></li>
            <li><a href="#" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>Parámetros de calidad</a></li>
            <li><a href="#" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>Tarifario y promociones</a></li>
          </ul>
        </div>

        {/* Enlaces de Interés */}
        <div>
          <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-orange-300 inline-block text-gray-800">Enlaces de Interés</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>Inicio</Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>Nosotros</Link>
            </li>
            <li>
              <Link to="/documentos" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>Documentos</Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-orange-300 inline-block text-gray-800">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <HiOutlineMail className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700">gabananetsolutions@gmail.com</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-700">+593 98 982 1801</span>
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700">Vinces - Los Ríos.<br />Calle Córdova y Weinza</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white/70 py-6 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-600 mb-2 md:mb-0">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Desarrollado por <span className="text-orange-500 font-semibold">InigualitySoft</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;