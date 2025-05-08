import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Importamos Link de react-scroll para el scroll suave

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  const textSize = "clamp(2rem, 5vw, 4rem)";
  const subtextSize = "clamp(1rem, 2.5vw, 1.5rem)";

  return (
    <section
      className="
        relative min-h-screen flex items-center justify-center pt-[5vh]
        bg-gradient-to-t from-blue-500 via-blue-200 to-white
        md:bg-[url('/img/fondo.png')] md:bg-cover md:bg-center md:bg-no-repeat
      "
      id="inicio" // Añadimos un ID para navegación
    >
      <div className="w-[90vw] max-w-[1800px] mx-auto px-[5vw] grid md:grid-cols-2 gap-[5vw] items-center relative z-10">
        {/* Texto Izquierdo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left ml-0 md:ml-[7vw] mt-16 md:mt-0"
        >
          <h1
            className="font-bold text-gray-900 mb-[3vh] leading-tight"
            style={{ fontSize: textSize }}
          >
            Internet de Fibra Óptica <span className="text-blue-600">Ultra Rápido</span>
          </h1>
          <p
            className="text-gray-600 mb-[5vh]"
            style={{ fontSize: subtextSize }}
          >
            Conectamos tu mundo con velocidades de hasta <strong>1 Gbps</strong>, 
            latencia mínima para gaming y estabilidad garantizada para tu trabajo remoto.
          </p>
          
          {/* Botón que redirige a la sección de Planes */}
          <Link
            to="planes" // Esto debe coincidir con el ID de tu sección Planes
            smooth={true}
            duration={500}
            offset={-80} // Ajuste para el header si es necesario
          >
            <motion.button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md"
              style={{
                padding: "clamp(0.75rem, 1.5vw, 1.25rem) clamp(1.5rem, 3vw, 2.5rem)",
                fontSize: subtextSize,
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Planes y Precios
            </motion.button>
          </Link>
        </motion.div>

        {/* Contenedor del lado derecho */}
        <div className="relative w-full">
          {/* Versión mobile - mantiene el bento grid */}
          <div className="md:hidden relative w-full grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 max-w-5xl mx-auto">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={5}
              className="col-span-1 md:col-start-2 md:row-start-2 bg-gradient-to-br from-white to-blue-200 rounded-2xl shadow-xl flex items-center justify-center p-4"
            >
              <img
                src="/img/LOGO_GABANA_NET.png"
                alt="GABANA NET"
                className="w-full max-w-[150px] object-contain"
              />
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={9}
              className="col-span-1 md:col-start-2 md:row-start-3 bg-white rounded-xl shadow-md p-4 flex flex-col justify-center items-center border border-gray-200"
            >
              <h3 className="font-bold text-gray-900 text-lg text-center">
                Tecnología de Vanguardia
              </h3>
              <p className="text-gray-500 text-sm mt-1 text-center">
                Fibra óptica directa a tu hogar o empresa
              </p>
            </motion.div>
          </div>

          {/* Versión desktop - solo el logo grande */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex items-center justify-center"
          >
            <img
              src="/img/LOGO_GABANA_NET.png"
              alt="GABANA NET"
              className="w-full max-w-[400px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;