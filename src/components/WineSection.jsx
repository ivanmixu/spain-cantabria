import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importación de imágenes
import imgRioja from '../assets/rioja.jpg';
import imgRibera from '../assets/ribera.jpg';
import imgtxakoli from '../assets/txakoli.jpg';

// Componente para los botones de navegación
const NavigationButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:border-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
  >
    {direction === 'prev' ? '←' : '→'}
  </button>
);

const locations = [
  {
    id: "rioja",
    title: "Rioja Alavesa",
    subtitle: "Un viaje al corazón del vino español",
    mainDescription: "La región vinícola más prestigiosa de España, donde la tradición y la innovación se unen para crear vinos excepcionales que cautivan al mundo. Un territorio donde cada bodega cuenta una historia y cada vino es una obra de arte.",
    experience: "Sumérgete en un paisaje de viñedos infinitos, donde el tiempo parece detenerse entre bodegas centenarias y pueblos medievales. Cada rincón de la Rioja Alavesa es una invitación a descubrir los secretos de una tradición vinícola milenaria.",
    highlights: "Degusta vinos premiados internacionalmente, aprende de maestros bodegueros y déjate cautivar por una gastronomía que combina tradición e innovación. Una experiencia que despertará todos tus sentidos.",
    image: imgRioja,
    characteristics: ["Bodegas Centenarias", "Viñedos Históricos", "Alta Gastronomía", "Enoturismo Premium", "Tradición Viva"]
  },
  {
    id: "ribera",
    title: "Ribera del Duero",
    subtitle: "La excelencia del tinto español",
    mainDescription: "Un paisaje de viñedos antiguos que se extiende hasta donde alcanza la vista, creando algunos de los tintos más prestigiosos de España. La altitud y el clima extremo dan carácter a unos vinos únicos en el mundo.",
    experience: "Recorre castillos medievales y bodegas subterráneas, descubre el arte de la vinificación en altura y vive la pasión de una tierra dedicada al cultivo de la uva tempranillo.",
    highlights: "Experimenta catas exclusivas en bodegas históricas, conoce a los artesanos del vino y disfruta de puestas de sol inolvidables sobre los viñedos castellanos.",
    image: imgRibera,
    characteristics: ["Vinos Tintos", "Castillos", "Historia", "Paisajes", "Cultura"]
  },
  {
    id: "txakoli",
    title: "Ruta del Txakoli",
    subtitle: "El tesoro blanco del País Vasco",
    mainDescription: "Entre el mar Cantábrico y los verdes montes vascos, se cultiva este vino único, fresco y atlántico. Una experiencia que combina la tradición marinera con la cultura del vino.",
    experience: "Visita pequeñas bodegas familiares con vistas al mar, conoce el método tradicional de escanciado y maravíllate con la perfecta armonía entre el txakoli y la gastronomía vasca.",
    highlights: "Participa en catas junto al mar, descubre el maridaje perfecto con pintxos tradicionales y conecta con una cultura milenaria que ha sabido preservar su esencia.",
    image: imgtxakoli,
    characteristics: ["Costa", "Tradición", "Frescura", "Pintxos", "Mar"]
  }
];

const WineSection = () => {
  const [currentLocation, setCurrentLocation] = useState(locations[0]);

  return (
    <section className="min-h-screen bg-black text-white font-['Urbanist'] relative overflow-hidden">
      {/* Navegación Superior */}
      <nav className="absolute top-0 left-0 w-full px-4 md:px-12 py-6 md:py-8 z-20 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="text-sm font-light">NORTE DE ESPAÑA</div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {['REGIONES', 'EXPERIENCIAS', 'BODEGAS', 'INFORMACIÓN'].map(item => (
            <button
              key={item}
              className="px-3 md:px-4 py-2 rounded-full text-xs md:text-sm tracking-wide transition-all hover:bg-white/10 border border-transparent hover:border-white/20"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="text-sm font-light md:block hidden">2025</div>
      </nav>

      {/* Contenido Principal */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentLocation.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="relative min-h-screen"
        >
          {/* Imagen de Fondo */}
          <div className="absolute inset-0 z-0">
            <motion.img
              src={currentLocation.image}
              alt={currentLocation.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
          </div>

          {/* Contenido */}
          <div className="relative z-10 h-screen flex justify-end">
            <div className="w-full md:w-[60%] px-4 md:pr-20 md:pl-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="backdrop-blur-sm bg-black/30 p-6 md:p-12 rounded-lg"
              >
                <span className="text-white/70 text-base md:text-lg tracking-wide">
                  {currentLocation.subtitle}
                </span>
                
                <h1 className="text-4xl md:text-7xl font-light mt-4 mb-6 md:mb-8">
                  {currentLocation.title}
                </h1>

                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    {currentLocation.mainDescription}
                  </p>

                  <p className="text-base md:text-lg text-white/80 leading-relaxed">
                    {currentLocation.experience}
                  </p>

                  <p className="text-base md:text-lg text-white/80 leading-relaxed">
                    {currentLocation.highlights}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8">
                  {currentLocation.characteristics.map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-white/20 text-xs md:text-sm hover:border-white/40 transition-colors"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 mt-6 md:mt-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm md:text-base"
                >
                  <span>Descubrir la experiencia</span>
                  <span>→</span>
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Botones de navegación */}
          <div className="absolute bottom-6 md:bottom-12 left-4 md:left-20 flex gap-3 md:gap-4 z-20">
            <NavigationButton 
              direction="prev" 
              onClick={() => setCurrentLocation(
                locations[Math.max(0, locations.indexOf(currentLocation) - 1)]
              )}
              disabled={locations.indexOf(currentLocation) === 0}
            />
            <NavigationButton 
              direction="next" 
              onClick={() => setCurrentLocation(
                locations[Math.min(locations.length - 1, locations.indexOf(currentLocation) + 1)]
              )}
              disabled={locations.indexOf(currentLocation) === locations.length - 1}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default WineSection;