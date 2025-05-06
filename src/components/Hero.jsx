import { motion } from "framer-motion";

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
            La conexión que impulsa tus sueños
          </h1>
          <p
            className="text-gray-600 mb-[5vh]"
            style={{ fontSize: subtextSize }}
          >
            Vive la velocidad, siente la estabilidad, conecta sin límites.
          </p>
          <motion.button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md"
            style={{
              padding: "clamp(0.75rem, 1.5vw, 1.25rem) clamp(1.5rem, 3vw, 2.5rem)",
              fontSize: subtextSize,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explora Planes
          </motion.button>
        </motion.div>

        {/* Bento Grid */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 max-w-5xl mx-auto">
          {/* Solo mostrar la tarjeta del logo de Gabana en mobile */}
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

          {/* Nueva tarjeta debajo del logo, solo visible en mobile */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={9}
            className="col-span-1 md:col-start-2 md:row-start-3 bg-white rounded-xl shadow-md p-4 flex flex-col justify-center items-center border border-gray-200 block md:hidden"
          >
            <h3 className="font-bold text-gray-900 text-lg text-center">
              Soluciones a medida
            </h3>
            <p className="text-gray-500 text-sm mt-1 text-center">
              Descubre cómo podemos adaptar nuestras soluciones a tus necesidades.
            </p>
          </motion.div>


          {/* Tarjetas que solo se verán en pantallas más grandes */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="col-span-1 md:col-start-1 md:row-start-1 hidden md:flex bg-white rounded-xl shadow-md p-4 flex-col justify-center items-center border border-gray-200"
          >
            <h3 className="font-bold text-gray-900 text-lg">+1Gbps</h3>
            <p className="text-gray-500 text-sm mt-1">Velocidad simétrica</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="col-span-1 md:col-start-2 md:row-start-1 hidden md:flex bg-white rounded-xl shadow-md p-4 flex-col justify-center items-center border border-gray-200"
          >
            <h3 className="font-bold text-gray-900 text-lg">24/7</h3>
            <p className="text-gray-500 text-sm mt-1">Soporte premium</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={4}
            className="col-span-1 md:col-start-1 md:row-start-2 hidden md:flex bg-white rounded-xl shadow-md p-4 flex-col justify-center items-center border border-gray-200"
          >
            <h3 className="font-bold text-gray-900 text-lg">IoT</h3>
            <p className="text-gray-500 text-sm mt-1">Soluciones integradas</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={6}
            className="col-span-1 md:col-start-3 md:row-start-2 hidden md:flex bg-white rounded-xl shadow-md p-4 flex-col justify-center items-center border border-gray-200"
          >
            <h3 className="font-bold text-gray-900 text-lg">Tier III</h3>
            <p className="text-gray-500 text-sm mt-1">Data Center</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={7}
            className="col-span-1 md:col-start-2 md:row-start-3 hidden md:flex bg-white rounded-xl shadow-md p-4 flex-col justify-center items-center border border-gray-200"
          >
            <h3 className="font-bold text-gray-900 text-lg text-center">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-gray-500 text-sm mt-1 text-center">
              Nuestros expertos pueden diseñar una red a tu medida.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={8}
            className="col-span-1 md:col-start-3 md:row-start-3 hidden md:flex bg-white rounded-xl shadow-md p-4 flex-col justify-center items-center border border-gray-200"
          >
            <h3 className="font-bold text-gray-900 text-lg text-center">
              Conectividad empresarial
            </h3>
            <p className="text-gray-500 text-sm mt-1 text-center">
              Soluciones robustas para tu negocio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
