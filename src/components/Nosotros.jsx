import React from "react";
import { motion } from "framer-motion";

const BentoCard = ({ title, description, imgUrl, spanCols = "lg:col-span-2", spanRows = "row-span-1" }) => {
  return (
    <motion.div
      className={`bg-white overflow-hidden rounded-2xl shadow-md flex flex-col transition-all duration-300 hover:scale-105 ${spanCols} ${spanRows}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="h-2/3 overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col justify-center bg-gray-50 h-1/3">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

const Nosotros = () => {
  return (
    <section id="nosotros" className="pt-28 pb-20 px-4 bg-white"> 
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Conectando Nuestra Ciudad
        </h2>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[300px] gap-8">
          <BentoCard
            title="Internet de Alta Velocidad"
            description="Navega sin interrupciones en toda tu casa."
            imgUrl="/img/Img_Nosotros/velocidad.jpg"
            spanCols="lg:col-span-4"
            spanRows="row-span-2"
          />
          <BentoCard
            title="Cobertura Local"
            description="Conectamos cada barrio de la ciudad."
            imgUrl="/img/Img_Nosotros/cobertura.jpg"
          />
          <BentoCard
            title="Atención Personalizada"
            description="Resolvemos tus consultas de manera cercana."
            imgUrl="/img/Img_Nosotros/atencion.jpg"
          />
          <BentoCard
            title="WiFi en Toda Tu Casa"
            description="Señal potente en cada habitación."
            imgUrl="/img/Img_Nosotros/casa.png"
            spanCols="lg:col-span-2"
            spanRows="row-span-2"
          />
          <BentoCard
            title="Soporte Técnico Rápido"
            description="Asistencia técnica en minutos, no en días."
            imgUrl="/img/Img_Nosotros/soporte.jpg"
          />
          <BentoCard
            title="Planes Accesibles"
            description="Precios para todos los bolsillos."
            imgUrl="/img/Img_Nosotros/plan.jpg"
          />
          <BentoCard
            title="Fibra Óptica en Tu Hogar"
            description="Instalación segura y rápida."
            imgUrl="/img/Img_Nosotros/fibra.jpg"
          />
          <BentoCard
            title="Zona Rural Conectada"
            description="No importa dónde vivas, te conectamos."
            imgUrl="/img/Img_Nosotros/rural.jpg"
          />
          <BentoCard
            title="Conexión Segura"
            description="Protección y privacidad para tu familia."
            imgUrl="/img/Img_Nosotros/seguro.png"
          />
          <BentoCard
            title="Instalación Sin Costo"
            description="Promoción por tiempo limitado."
            imgUrl="/img/Img_Nosotros/gratis.jpg"
          />
          <BentoCard
            title="Atención 24/7"
            description="Siempre listos para ayudarte."
            imgUrl="/img/Img_Nosotros/24.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
