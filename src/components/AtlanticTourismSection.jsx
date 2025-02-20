import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import playa from '../assets/playa-cantabrica.jpg';
import restaurantes from '../assets/restaurantes.jpg';
import montañas from '../assets/picos-europa.jpg';
import vinos from '../assets/ribera.jpg';

const CantabriaExperience = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const experiences = [
    {
      id: 'costa',
      title: 'Playas Vírgenes',
      subtitle: 'MAR CANTÁBRICO',
      description: 'Donde el mar escribe poemas en la arena y los acantilados guardan secretos milenarios. Descubre calas inexploradas que parecen sacadas de un sueño.',
      image: playa
    },
    {
      id: 'gastronomia',
      title: 'Alta Gastronomía',
      subtitle: 'ESTRELLAS DEL NORTE',
      description: 'Un festín para los sentidos donde cada plato es una obra maestra. Desde estrellas Michelin hasta tabernas centenarias, el norte es el destino gastronómico por excelencia.',
      image: restaurantes
    },
    {
      id: 'montana',
      title: 'Picos de Europa',
      subtitle: 'CUMBRES LEGENDARIAS',
      description: 'Donde las montañas tocan el cielo y cada sendero cuenta una historia. Una aventura que desafía los límites de lo posible.',
      image: montañas
    },
    {
      id: 'vinos',
      title: 'Vinos Exclusivos',
      subtitle: 'TESOROS LÍQUIDOS',
      description: 'Bodegas que son templos del tiempo, donde cada copa cuenta historias de pasión y tradición. Una experiencia que despierta todos los sentidos.',
      image: vinos
    }
  ];

  return (
    <div className="h-screen bg-stone-100 font-light overflow-hidden">
      <div className="h-full flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-12 flex flex-col justify-between relative">
          {/* Top Content */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm tracking-[0.3em] text-stone-500 block"
            >
              BIENVENIDO AL NORTE
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl lg:text-7xl tracking-tight font-extralight"
            >
              CANTABRIA
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl leading-relaxed text-stone-600 pl-6 border-l border-stone-300"
            >
              Imagina un lugar donde el tiempo se detiene entre montañas majestuosas 
              y playas vírgenes. Donde cada comida es una experiencia sublime, 
              cada copa de vino cuenta una historia centenaria, y cada amanecer 
              promete una nueva aventura. Bienvenido al norte, donde los sueños 
              no solo se cumplen, se superan.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group flex items-center gap-4 text-lg hover:gap-6 transition-all duration-300 relative pl-6"
            >
              <span className="absolute left-0 top-1/2 w-4 h-[1px] bg-black transform -translate-y-1/2" />
              Descubre el Norte
              <ArrowRight className="transition-transform group-hover:translate-x-2" />
            </motion.button>
          </div>

          {/* Bottom Content - Hover Information */}
          <motion.div 
            className="max-w-xl hidden lg:block"
            animate={{ 
              opacity: hoveredImage ? 1 : 0,
              y: hoveredImage ? 0 : 20 
            }}
            transition={{ duration: 0.3 }}
          >
            {hoveredImage && (
              <div className="space-y-4 pl-6 border-l border-stone-300">
                <span className="text-sm tracking-[0.2em] text-stone-500 block">
                  {hoveredImage.subtitle}
                </span>
                <h2 className="text-3xl font-light">
                  {hoveredImage.title}
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  {hoveredImage.description}
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Content - Image Grid */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full p-2 md:p-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 h-full">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                className="relative rounded-lg overflow-hidden cursor-pointer group"
                onMouseEnter={() => setHoveredImage(exp)}
                onMouseLeave={() => setHoveredImage(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${exp.image})` }}
                />
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Title Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6 
                              bg-gradient-to-t from-black/60 to-transparent">
                  <div>
                    <span className="text-sm tracking-[0.2em] text-white/80 block mb-2">
                      {exp.subtitle}
                    </span>
                    <h3 className="text-base md:text-lg lg:text-xl font-light tracking-wide text-white">
                      {exp.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CantabriaExperience;