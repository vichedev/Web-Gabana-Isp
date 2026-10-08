import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const STORAGE_KEY = "gabananet_cookie_consent";

const DEFAULT_PREFS = { necessary: true, analytics: false, marketing: false };

const readConsent = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const saveConsent = (prefs) => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...prefs, date: new Date().toISOString() })
    );
  } catch {
    // Almacenamiento no disponible: el aviso volverá a aparecer
  }
};

const OPTIONS = [
  {
    key: "necessary",
    title: "Necesarias",
    desc: "Imprescindibles para que el sitio funcione correctamente.",
    locked: true,
  },
  {
    key: "analytics",
    title: "Analíticas",
    desc: "Nos ayudan a entender cómo se usa la web para mejorarla.",
  },
  {
    key: "marketing",
    title: "Personalización",
    desc: "Permiten mostrarte contenido y ofertas acordes a tus intereses.",
  },
];

const Toggle = ({ checked, disabled, onChange, label }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    disabled={disabled}
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 ${
      checked ? "bg-gradient-to-r from-purple-500 to-sky-500" : "bg-gray-300"
    } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-300 ${
        checked ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </button>
);

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);

  useEffect(() => {
    if (!readConsent()) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const close = (finalPrefs) => {
    saveConsent(finalPrefs);
    setVisible(false);
  };

  const acceptAll = () =>
    close({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => close(DEFAULT_PREFS);
  const saveSelection = () => close(prefs);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-gray-900/40 backdrop-blur-sm p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-title"
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-sky-50 shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            {/* Franja decorativa */}
            <div className="h-1.5 w-full bg-gradient-to-r from-purple-500 via-sky-400 to-pink-400" />

            <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
              {/* Encabezado */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-sky-500 text-3xl shadow-lg">
                  <span role="img" aria-label="Cookie">
                    🍪
                  </span>
                </div>
                <div>
                  <h2
                    id="cookie-title"
                    className="text-xl font-bold text-gray-800"
                  >
                    Tu privacidad nos importa
                  </h2>
                  <p className="text-xs font-medium uppercase tracking-wide text-purple-600">
                    GabanaNet · Uso de cookies
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-gray-700">
                Utilizamos cookies propias y de terceros para que nuestro sitio
                funcione correctamente, analizar el tráfico y ofrecerte una
                mejor experiencia. Puedes aceptarlas todas, rechazarlas o
                elegir cuáles permitir.
              </p>

              {/* Preferencias */}
              <AnimatePresence initial={false}>
                {showSettings && (
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="mt-5 space-y-3">
                      {OPTIONS.map((opt) => (
                        <li
                          key={opt.key}
                          className="flex items-center justify-between gap-4 rounded-xl border border-purple-100 bg-white/80 p-4 shadow-sm"
                        >
                          <div>
                            <p className="text-sm font-semibold text-gray-800">
                              {opt.title}
                            </p>
                            <p className="text-xs text-gray-600">{opt.desc}</p>
                          </div>
                          <Toggle
                            label={opt.title}
                            checked={prefs[opt.key]}
                            disabled={opt.locked}
                            onChange={() =>
                              setPrefs((p) => ({ ...p, [opt.key]: !p[opt.key] }))
                            }
                          />
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Acciones */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                >
                  Aceptar todas
                </button>
                {showSettings ? (
                  <button
                    type="button"
                    onClick={saveSelection}
                    className="flex-1 rounded-full border border-purple-300 bg-white px-5 py-2.5 text-sm font-semibold text-purple-700 transition-colors hover:bg-purple-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                  >
                    Guardar selección
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={rejectAll}
                    className="flex-1 rounded-full border border-purple-300 bg-white px-5 py-2.5 text-sm font-semibold text-purple-700 transition-colors hover:bg-purple-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                  >
                    Solo necesarias
                  </button>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setShowSettings((s) => !s)}
                  className="font-medium text-sky-600 underline-offset-2 hover:text-sky-700 hover:underline"
                >
                  {showSettings ? "Ocultar preferencias" : "Personalizar"}
                </button>
                <Link
                  to="/documentos"
                  onClick={() => setVisible(false)}
                  className="text-gray-500 underline-offset-2 hover:text-purple-600 hover:underline"
                >
                  Más información
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
