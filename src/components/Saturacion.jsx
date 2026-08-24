import { useState } from "react";

export default function Saturacion() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-16 pt-28 px-6">
      {/* Título */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Saturación
      </h1>
      {/* Contenido */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          En cumplimiento de la normativa de la ARCOTEL, publicamos el nivel de
          saturación de nuestros enlaces. El porcentaje de saturación se obtiene
          de la relación entre el promedio de megas utilizados mensualmente y la
          capacidad total de megas contratados a nuestro proveedor de
          transmisión de datos.
        </p>
        {/* Imagen */}
        <div className="mt-8 flex justify-center">
          <img
            src="/img/parametros/saturacion.png"
            alt="Saturación"
            className="w-full max-w-2xl h-auto rounded-lg shadow cursor-zoom-in transition-transform hover:scale-105"
            onClick={() => setShowModal(true)}
            style={{ transition: "transform 0.2s" }}
            title="Haz clic para ampliar"
          />
        </div>
      </div>

      {/* Modal de la imagen ampliada */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 cursor-zoom-out"
          onClick={() => setShowModal(false)}
        >
          <img
            src="/img/parametros/saturacion.png"
            alt="Saturación"
            className="max-w-3xl w-full md:max-h-[80vh] rounded-xl shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()} // Evita cerrar si das click sobre la imagen
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.35)" }}
          />
        </div>
      )}
    </div>
  );
}
