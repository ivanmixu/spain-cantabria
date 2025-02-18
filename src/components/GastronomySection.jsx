import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Star, Building2, Fish, MapPin } from 'lucide-react';

// Importación de imágenes
import imgPintxos from '../assets/pintxos.jpg';
import imgRestaurantes from '../assets/restaurantes.jpg';
import imgMercados from '../assets/mercados.jpg';
import imgProductos from '../assets/productos.jpg';

const categories = [
  {
    id: 'pintxos',
    icon: <Utensils className="w-8 h-8" />,
    title: 'Pintxos: Arte Culinario en Miniatura',
    subtitle: 'La esencia de la creatividad vasca',
    description: 'Los pintxos son mucho más que tapas; son pequeñas obras maestras que capturan la innovación, la tradición y el espíritu creativo del País Vasco. Cada bocado es una narrativa gastronómica que te transporta a las calles bulliciosas de San Sebastián.',
    experience: 'Imagina recorrer los bares del casco viejo, donde cada pintxo cuenta una historia. Es más que una comida: es una experiencia cultural que despierta todos tus sentidos y te conecta con la esencia de la vida vasca.',
    facts: [
      'Más de 200 variedades tradicionales reinventadas',
      'Experiencia gastronómica reconocida mundialmente',
      'Maridaje perfecto con txakoli local'
    ],
    image: imgPintxos,
    callToAction: 'Descubre el arte de los pintxos'
  },
  {
    id: 'michelin',
    icon: <Star className="w-8 h-8" />,
    title: 'Estrellas Michelin: Innovación Culinaria',
    subtitle: 'La frontera de la excelencia gastronómica',
    description: 'El País Vasco es el epicentro mundial de la innovación culinaria, con una concentración de estrellas Michelin sin precedentes. Nuestros chefs son verdaderos alquimistas que transforman ingredientes locales en experiencias gastronómicas únicas.',
    experience: 'Sumérgete en un viaje culinario donde la tradición se encuentra con la vanguardia. Cada plato es una sinfonía de sabores, texturas y emociones que desafía tu concepción de la cocina.',
    facts: [
      '11 restaurantes con estrella Michelin',
      'Chefs reconocidos internacionalmente',
      'Técnicas culinarias revolucionarias'
    ],
    image: imgRestaurantes,
    callToAction: 'Explora la alta cocina vasca'
  },
  {
    id: 'mercados',
    icon: <Building2 className="w-8 h-8" />,
    title: 'Mercados Tradicionales: El Pulso de la Gastronomía',
    subtitle: 'Donde late el corazón culinario',
    description: 'Nuestros mercados son más que simples espacios comerciales; son templos vivos de la tradición gastronómica. Aquí, cada producto cuenta una historia de pasión, tierra y mar, conectando generaciones de productores y cocineros.',
    experience: 'Sumérgete en un mundo de colores, aromas y sabores auténticos. Conoce a los productores locales, descubre ingredientes únicos y comprende por qué nuestra cocina es un patrimonio cultural.',
    facts: [
      'Productos frescos directos del productor',
      'Tradición centenaria de calidad',
      'Experiencias gastronómicas únicas'
    ],
    image: imgMercados,
    callToAction: 'Explora los mercados locales'
  },
  {
    id: 'productos',
    icon: <Fish className="w-8 h-8" />,
    title: 'Productos Locales: Del Mar a la Montaña',
    subtitle: 'La riqueza de un territorio privilegiado',
    description: 'Desde los mariscos del Cantábrico hasta los quesos de las montañas, nuestros productos son el resultado de un ecosistema único. Cada ingrediente captura la esencia de un territorio diverso y generoso.',
    experience: 'Embárcate en un viaje sensorial que te llevará desde las profundidades del mar hasta los verdes valles interiores. Descubre cómo la geografía y la tradición se funden en cada producto.',
    facts: [
      'Pescados y mariscos del Cantábrico premium',
      'Quesos con denominación de origen',
      'Verduras de temporada de cultivo sostenible'
    ],
    image: imgProductos,
    callToAction: 'Descubre nuestros productos'
  }
];

const MenuButton = ({ category, isActive, onClick }) => (
    <motion.button
      onClick={onClick}
      className={`relative group px-6 py-3 rounded-full transition-all duration-300 ${
        isActive 
          ? 'bg-neutral-900 text-white' 
          : 'bg-neutral-100 hover:bg-neutral-200'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-3">
        <span className={`transition-colors duration-300 ${
          isActive ? 'text-white' : 'text-neutral-600 group-hover:text-neutral-800'
        }`}>
          {category.icon}
        </span>
        <span className="text-xs tracking-wide font-light">
          {category.title.split(':')[0]}
        </span>
      </div>
    </motion.button>
  );
  
  const GastronomySection = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
  
    return (
      <section className="min-h-screen bg-white text-neutral-900 font-['Urbanist'] relative overflow-hidden py-16 lg:py-24">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-neutral-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-neutral-100 rounded-full blur-3xl opacity-50" />
        </div>
  
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="text-neutral-500 text-base tracking-wide mb-3 block uppercase">
              Un Viaje Sensorial
            </span>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light mb-5">
              Gastronomía del Norte de España
            </h1>
            <p className="text-lg lg:text-xl text-neutral-600 font-light max-w-3xl mx-auto">
              Un destino donde cada bocado cuenta una historia milenaria, cada ingrediente tiene un alma y cada experiencia gastronómica es un viaje que trasciende el paladar.
            </p>
          </motion.div>
  
          {/* Navigation Menu */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 lg:mb-24">
            {categories.map(category => (
              <MenuButton
                key={category.id}
                category={category}
                isActive={category.id === activeCategory.id}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
  
          {/* Active Category Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl group"
              >
                <img
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className="text-white text-sm">País Vasco, España</span>
                </div>
              </motion.div>
  
              {/* Content */}
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <span className="text-neutral-500 text-base tracking-wide block mb-2">
                    {activeCategory.subtitle}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-light mb-5">
                    {activeCategory.title}
                  </h2>
                  <p className="text-base lg:text-lg text-neutral-600 leading-relaxed mb-6">
                    {activeCategory.description}
                  </p>
                </div>
  
                <p className="text-neutral-500 leading-relaxed italic text-sm lg:text-base">
                  "{activeCategory.experience}"
                </p>
  
                <div className="space-y-3 pt-4">
                  {activeCategory.facts.map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-neutral-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 flex-shrink-0" />
                      <span className="font-light text-sm lg:text-base">{fact}</span>
                    </motion.div>
                  ))}
                </div>
  
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="px-6 lg:px-8 py-3 lg:py-4 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors font-light flex items-center gap-2 group text-sm lg:text-base"
                >
                  {activeCategory.callToAction}
                  <span className="transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    );
  };
  
  export default GastronomySection;
  