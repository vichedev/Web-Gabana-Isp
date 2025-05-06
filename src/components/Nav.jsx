import React, { useState } from "react";
import { Link } from "react-router-dom"; // Para las otras páginas

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo que redirige a la página de inicio */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/"> {/* Agregamos el Link para redirigir a la página de inicio */}
              <img
                className="h-10 w-auto object-contain"
                src="/img/LOGO_GABANA_NET.png"
                alt="Gabana.NET Logo"
              />
            </Link>
          </div>

          {/* Menú a la derecha (desktop) */}
          <div className="hidden md:flex space-x-8">
            <Link to="/nosotros" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Nosotros
            </Link>

            <Link
              to="/documentos"  // Usamos Link para la página de documentos
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Documentos
            </Link>
            <Link
              to="/contacto"  // Usamos Link para la página de contacto
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Contacto
            </Link>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md rounded-b-lg shadow-md px-6 py-4 space-y-4 animate-slideDown">
          <Link to="/nosotros" className="block text-lg text-gray-800 hover:text-indigo-600 font-semibold transition-colors" onClick={() => setIsOpen(false)}>
            Nosotros
          </Link>

          <Link
            to="/documentos"
            className="block text-lg text-gray-800 hover:text-indigo-600 font-semibold transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Documentos
          </Link>
          <Link
            to="/contacto"
            className="block text-lg text-gray-800 hover:text-indigo-600 font-semibold transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
