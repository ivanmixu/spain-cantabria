import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mountain, 
  Waves, 
  Trees, 
  Wind, 
  Compass, 
  MapPin, 
  Footprints 
} from 'lucide-react';

// Imagen imports
import beachImage from '../assets/playa-cantabrica.jpg';
import mountainsImage from '../assets/picos-europa.jpg';
import hikingImage from '../assets/senderismo.jpg';
import naturalParkImage from '../assets/parque-natural.jpg';
import outdoorImage from '../assets/actividades-aire-libre.jpg';

const tourismCategories = [
  {
    id: 'beaches',
    icon: <Waves className="w-8 h-8" />,
    title: 'Playas Vírgenes',
    subtitle: 'El Paraíso Atlántico',
    description: 'Descubre calas escondidas y playas vírgenes que desafían la imaginación. Acantilados escarpados se funden con aguas cristalinas, creando paisajes que parecen salidos de un sueño.',
    highlights: [
      'Más de 300 km de costa inexplorada',
      'Acantilados espectaculares',
      'Playas de arena dorada y agua turquesa'
    ],
    image: beachImage
  },
  {
    id: 'mountains',
    icon: <Mountain className="w-8 h-8" />,
    title: 'Picos de Europa',
    subtitle: 'Cumbres Legendarias',
    description: 'Un macizo montañoso que desafía los límites de la naturaleza. Los Picos de Europa son un santuario de biodiversidad, con paisajes que cambian desde bosques verdes hasta cumbres nevadas.',
    highlights: [
      'Segundo macizo montañoso más alto de Europa',
      'Ecosistemas únicos',
      'Rutas de montaña para todos los niveles'
    ],
    image: mountainsImage
  },
  {
    id: 'hiking',
    icon: <Footprints className="w-8 h-8" />,
    title: 'Rutas de Senderismo',
    subtitle: 'Senderos que Narran Historias',
    description: 'Caminos ancestrales que traversan paisajes de incomparable belleza. Cada ruta es un viaje a través de la historia, la cultura y la naturaleza más pura del norte de España.',
    highlights: [
      'Más de 500 km de rutas señalizadas',
      'Caminos de Santiago alternativos',
      'Paisajes que cambian con cada paso'
    ],
    image: hikingImage
  },
  {
    id: 'naturalParks',
    icon: <Trees className="w-8 h-8" />,
    title: 'Parques Naturales',
    subtitle: 'Santuarios de Biodiversidad',
    description: 'Espacios protegidos que guardan los secretos de la naturaleza más pura. Cada parque es un mundo en miniatura, donde la vida silvestre y los paisajes más espectaculares se dan la mano.',
    highlights: [
      'Más de 10 parques naturales',
      'Fauna y flora únicas',
      'Conservación medioambiental'
    ],
    image: naturalParkImage
  },
  {
    id: 'outdoorActivities',
    icon: <Wind className="w-8 h-8" />,
    title: 'Aventura al Aire Libre',
    subtitle: 'Experiencias sin Límites',
    description: 'Un paraíso para los amantes de la aventura. Desde el surf en aguas bravas hasta el parapente sobre acantilados, aquí cada día es una invitación a vivir experiencias únicas.',
    highlights: [
      'Surf, kayak, escalada',
      'Rutas de BTT',
      'Parapente y deportes de aventura'
    ],
    image: outdoorImage
  }
];

const AtlanticTourismSection = () => {
  const [activeCategory, setActiveCategory] = useState(tourismCategories[0]);

  return (
    <section className="min-h-screen bg-[#0A2342] text-white font-['Urbanist'] relative overflow-hidden flex items-center">
      {/* Decorative Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ 
          backgroundImage: `url(${activeCategory.image})`,
          filter: 'blur(100px)'
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Navigation and Description */}
          <div className="space-y-8">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-blue-300 text-base tracking-wide uppercase block mb-3">
                Descubre el Norte
              </span>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light mb-5">
                Paraíso Atlántico
              </h1>
              <p className="text-lg text-blue-100 max-w-xl mb-8">
                Un territorio donde la naturaleza escribe sus propias historias, donde cada paisaje es una invitación a la aventura y cada rincón guarda un secreto por descubrir.
              </p>
            </motion.div>

            {/* Category Navigation */}
            <div className="space-y-4">
              {tourismCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    w-full text-left px-5 py-3 rounded-xl transition-all duration-300 
                    ${activeCategory.id === category.id 
                      ? 'bg-white/10 border border-white/20' 
                      : 'hover:bg-white/5'}
                    flex items-center gap-4 group
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`
                    p-2 rounded-full transition-colors duration-300
                    ${activeCategory.id === category.id 
                      ? 'bg-white/20' 
                      : 'group-hover:bg-white/10'}
                  `}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-1">{category.title}</h3>
                    <p className="text-xs text-blue-200 opacity-70">
                      {category.subtitle}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column - Active Category Details */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-xl"
            >
              {/* Image Container */}
              <div className="w-full aspect-video relative overflow-hidden">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className="text-white text-sm">Norte de España</span>
                </div>
              </div>

              {/* Category Content */}
              <div className="p-6 space-y-5">
                <div>
                  <h2 className="text-2xl font-light mb-3">{activeCategory.title}</h2>
                  <p className="text-blue-100 mb-4 text-sm">{activeCategory.description}</p>
                </div>
                
                {/* Highlights */}
                <div className="space-y-2">
                  {activeCategory.highlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 text-blue-200"
                    >
                      <Compass className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-xs">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-white/10 border border-white/20 rounded-full 
                  hover:bg-white/20 transition-all flex items-center justify-center gap-3 
                  text-white group mt-4"
                >
                  Explorar Experiencia
                  <span className="transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AtlanticTourismSection;