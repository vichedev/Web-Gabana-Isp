import React, { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Plan Básico",
    price: "$15/mes",
    description: [
      "Velocidad de 30 Mbps",
      "Ideal para hogares pequeños",
      "Streaming en HD",
      "Instalación gratuita"
    ],
    imgUrl: "/img/Planes/basico.png"
  },
  {
    title: "Plan Familiar",
    price: "$20/mes",
    description: [
      "Velocidad de 50 Mbps",
      "Conexión para toda la familia",
      "Gaming casual sin lag",
      "Router WiFi incluido"
    ],
    imgUrl: "/img/Planes/familiar.png"
  },
  {
    title: "Plan Avanzado",
    price: "$30/mes",
    description: [
      "Velocidad de 100 Mbps",
      "Para teletrabajo y streaming 4K",
      "Soporte técnico prioritario",
      "Protección antivirus incluida"
    ],
    imgUrl: "/img/Planes/avanzado.png"
  },
  {
    title: "Plan Empresarial",
    price: "$50/mes",
    description: [
      "Velocidad de 200 Mbps",
      "Ideal para negocios",
      "IP Fija opcional",
      "Asistencia 24/7"
    ],
    imgUrl: "/img/Planes/empresarial.png"
  },
  {
    title: "Plan Premium",
    price: "$65/mes",
    description: [
      "Velocidad de 500 Mbps",
      "Máximo rendimiento",
      "Streaming, gaming y más sin límites",
      "Instalación VIP"
    ],
    imgUrl: "/img/Planes/premium.png"
  }
];

const PlanCard = ({ title, price, description, imgUrl, onImageClick }) => {
  const whatsappLink = "https://wa.me/593989821801?text=Hola,%20quiero%20contratar%20el%20" + encodeURIComponent(title);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div 
        className="cursor-pointer" 
        onClick={() => onImageClick(imgUrl)}
      >
        <img 
          src={imgUrl} 
          alt={title} 
          className="w-full h-48 object-cover hover:opacity-90 transition-opacity" 
        />
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="pb-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-xl font-semibold text-purple-600 mb-4">{price}</p>
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
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 px-4 bg-gray-100" id="planes">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Elige el Plan Perfecto para Ti
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Descubre nuestras opciones de Internet pensadas para cada necesidad: desde navegación básica hasta máxima velocidad para empresas. ¡Conéctate con nosotros hoy mismo!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard 
              key={index} 
              {...plan} 
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      </div>

      {/* Modal para mostrar la imagen en grande */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
              onClick={closeModal}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Imagen ampliada" 
              className="w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Planes;