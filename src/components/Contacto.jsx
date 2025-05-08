import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacto = () => {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    emailjs
      .sendForm('service_97dbsfc', 'template_jhb74rf', form.current, {
        publicKey: 'fm5Z86rRBfVdoKf1y',
      })
      .then(
        () => {
          setLoading(false);
          setSuccessMessage('¡Tu mensaje ha sido enviado correctamente!');
        },
        (error) => {
          setLoading(false);
          setErrorMessage('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-gray-800 flex flex-col items-center py-20">

      <img
        src="/img/banner.jpg"
        alt="Imagen de Contacto"
        className="w-full h-78 object-cover mb-12 hidden sm:block" 
      />


      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <a href="https://wa.me/593989821801" target="_blank" rel="noopener noreferrer">
              <img
                src="/img/icons/whatsapp.png"
                alt="WhatsApp"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">WhatsApp</h3>
              <p className="text-gray-600">¡Escríbenos y te responderemos rápidamente!</p>
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/img/icons/instagram.png"
                alt="Instagram"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Instagram</h3>
              <p className="text-gray-600">Síguenos en Instagram y mantente al tanto de nuestras novedades.</p>
            </a>
          </div>

          {/* Facebook */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/img/icons/facebook.png"
                alt="Facebook"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Facebook</h3>
              <p className="text-gray-600">Conéctate con nosotros a través de Facebook.</p>
            </a>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Envíanos un Mensaje
          </h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="user_name" className="block text-gray-700 font-semibold">Nombre</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                placeholder="Tu nombre"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="user_email" className="block text-gray-700 font-semibold">Correo Electrónico</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                placeholder="Tu correo electrónico"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading ? 'bg-gray-400' : 'bg-purple-600'
                } text-white py-2 px-6 rounded-lg hover:bg-purple-700`}
              >
                {loading ? (
                  <div className="animate-spin border-4 border-t-4 border-white w-6 h-6 rounded-full"></div>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
            </div>
          </form>

          {/* Mensajes de éxito y error */}
          {successMessage && (
            <p className="mt-4 text-center text-green-600">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="mt-4 text-center text-red-600">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacto;