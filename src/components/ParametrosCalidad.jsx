import { useState } from "react";

export default function ParametrosCalidad() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-16 pt-28 px-6">
      {/* Título */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Parámetros de Calidad
      </h1>
      {/* Contenido */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          Optar por contratar Internet en MegatNet tiene ventajas importantes en
          relación con los otros tipos de conexiones entre las principales
          tenemos:
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Servicio profesional</strong>
            <p className="text-gray-600">
              Se brinda un servicio profesional con personal capacitado,
              organizado y responsable para todos nuestros clientes.
            </p>
          </li>
          <li>
            <strong>Atención técnica especializada</strong>
            <p className="text-gray-600">
              El soporte de atención es hecho por técnicos especializados,
              capaces de ayudar a resolver cualquier tipo de problema que pueda
              surgir.
            </p>
          </li>
          <li>
            <strong>Gestión permanente</strong>
            <p className="text-gray-600">
              Recibe monitoreo constante, lo que disminuye y, en algunos casos,
              hasta evita errores y caídas de servicio.
            </p>
          </li>
          <li>
            <strong>Seguridad en el acceso</strong>
            <p className="text-gray-600">
              Además de proporcionar estabilidad en la conexión, también
              ofrecemos más seguridad en tu navegación, requisito fundamental.
            </p>
          </li>
        </ul>
        {/* Imagen */}
        <div className="mt-8 flex justify-center">
          <img
            src="/img/parametros/calidad.png"
            alt="Parámetros de Calidad"
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
            src="/img/parametros/calidad.png"
            alt="Parámetros de Calidad"
            className="max-w-3xl w-full md:max-h-[80vh] rounded-xl shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()} // Evita cerrar si das click sobre la imagen
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.35)" }}
          />
        </div>
      )}
    </div>
  );
}
