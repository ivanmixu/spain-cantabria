import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Image imports
import santillanaImage from '../assets/cantabria.jpg';
import comillasImage from '../assets/cantabria1.jpg';
import artesaniaImage from '../assets/cantabria2.jpg';
import festivalesImage from '../assets/cantabria3.jpg';

const experiences = [
  {
    id: 'medieval',
    title: 'Pueblos Medievales',
    subtitle: 'HISTORIA EN PIEDRA',
    description: 'Santillana del Mar y Comillas, donde cada calle es un museo viviente. Palacios centenarios y plazas que susurran historias de hidalgos y artesanos.',
    image: santillanaImage,
  },
  {
    id: 'artesania',
    title: 'Artesanía Viva',
    subtitle: 'TRADICIÓN ANCESTRAL',
    description: 'Las manos sabias de nuestros artesanos transforman la madera, el cuero y el metal en obras que capturan el espíritu de Cantabria.',
    image: artesaniaImage
  },
  {
    id: 'festivales',
    title: 'Festivales y Tradiciones',
    subtitle: 'CULTURA VIVA',
    description: 'Danza, música y color se funden en celebraciones centenarias. Festivales que mantienen vivo el espíritu festivo de nuestra tierra.',
    image: festivalesImage
  }
];

const CantabriaGlassExperience = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  return (
    <div className="h-screen bg-gradient-to-br from-stone-900 to-stone-800 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full 
                      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      <div className="relative h-full flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm tracking-[0.3em] text-white/60 block"
            >
              CULTURA Y TRADICIÓN
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-extralight"
            >
              Herencia Cántabra
            </motion.h1>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer
                         backdrop-blur-md bg-white/5 border border-white/10
                         ${activeExperience.id === exp.id ? 'md:col-span-2' : ''}`}
                onClick={() => setActiveExperience(exp)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 
                           transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${exp.image})` }}
                />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-between min-h-[400px]">
                  <div>
                    <span className="text-sm tracking-[0.2em] text-white/60 block mb-4">
                      {exp.subtitle}
                    </span>
                    <h3 className="text-2xl font-light mb-4">
                      {exp.title}
                    </h3>
                    <AnimatePresence>
                      {activeExperience.id === exp.id && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-white/70 leading-relaxed"
                        >
                          {exp.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-4 mt-6"
                  >
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent" />
                    <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white 
                                       transform group-hover:translate-x-1 transition-all" />
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CantabriaGlassExperience;