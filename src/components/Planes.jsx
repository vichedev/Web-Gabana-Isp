import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Plan Básico",
    description: [
      "Velocidad de 30 Mbps",
      "Ideal para hogares pequeños",
      "Streaming en HD",
      "Instalación gratuita"
    ],
    imgUrl: "https://images.unsplash.com/photo-1580910050775-7fd114d8b06f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Plan Familiar",
    description: [
      "Velocidad de 50 Mbps",
      "Conexión para toda la familia",
      "Gaming casual sin lag",
      "Router WiFi incluido"
    ],
    imgUrl: "https://images.unsplash.com/photo-1597764699150-7bdf70fb9f3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Plan Avanzado",
    description: [
      "Velocidad de 100 Mbps",
      "Para teletrabajo y streaming 4K",
      "Soporte técnico prioritario",
      "Protección antivirus incluida"
    ],
    imgUrl: "https://images.unsplash.com/photo-1571979272265-dc3c91361163?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Plan Empresarial",
    description: [
      "Velocidad de 200 Mbps",
      "Ideal para negocios",
      "IP Fija opcional",
      "Asistencia 24/7"
    ],
    imgUrl: "https://images.unsplash.com/photo-1601998065984-9a82e51abf96?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Plan Premium",
    description: [
      "Velocidad de 500 Mbps",
      "Máximo rendimiento",
      "Streaming, gaming y más sin límites",
      "Instalación VIP"
    ],
    imgUrl: "https://images.unsplash.com/photo-1591035897814-22d0950a7431?auto=format&fit=crop&w=800&q=80"
  }
];

const PlanCard = ({ title, description, imgUrl }) => {
  const whatsappLink = "https://wa.me/593994416519?text=Hola,%20quiero%20contratar%20el%20" + encodeURIComponent(title);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="pb-4"> {/* Padding abajo para separar del botón */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            {description.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-500 text-white text-center font-semibold py-2 rounded-lg transition hover:bg-purple-600"
        >
          Contratar Plan
        </a>
      </div>
    </motion.div>
  );
};

const Planes = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Elige el Plan Perfecto para Ti
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Descubre nuestras opciones de Internet pensadas para cada necesidad: desde navegación básica hasta máxima velocidad para empresas. ¡Conéctate con nosotros hoy mismo!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planes;
