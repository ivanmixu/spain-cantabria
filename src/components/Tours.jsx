import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';

// Importación de imágenes
import tour1Image1 from '../assets/tour-cantabria-1.jpg';
import tour1Image2 from '../assets/tour-cantabria-2.jpg';
import tour2Image1 from '../assets/tour-galicia-1.jpg';
import tour2Image2 from '../assets/tour-galicia-2.jpg';
import backgroundImage from '../assets/mountain-background.jpg';

const tours = [
  {
    id: 1,
    location: 'Cantabria',
    title: 'Aventura en la Costa Verde',
    price: '1,299€',
    duration: '7 días',
    description: 'Un recorrido único por los paisajes más impresionantes del norte, combinando la majestuosidad de los Picos de Europa con el encanto de pueblos medievales y playas vírgenes.',
    highlights: ['Picos de Europa', 'Santillana del Mar', 'Costa Quebrada', 'Gastronomía local'],
    images: [tour1Image1, tour1Image2]
  },
  {
    id: 2,
    location: 'País Vasco',
    title: 'Ruta Gastronómica',
    price: '1,499€',
    duration: '6 días',
    description: 'Descubre la rica cultura gastronómica vasca, desde pintxos en San Sebastián hasta los mejores vinos de Rioja Alavesa, mientras exploras ciudades llenas de historia.',
    highlights: ['San Sebastián', 'Bilbao', 'Rioja Alavesa', 'Pintxos Tour'],
    images: [tour2Image1, tour2Image2]
  }
];

const ToursSection = () => {
  const [currentTour, setCurrentTour] = useState(0);
  const tour = tours[currentTour];

  return (
    <section 
      className="relative min-h-screen py-24 font-['Urbanist'] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.95)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-medium text-neutral-800 mb-6">
              Experiencias Únicas en el Norte
            </h1>
            <p className="text-xl text-neutral-600">
              Descubre los tesoros ocultos del norte de España a través de nuestros tours exclusivos
            </p>
          </motion.div>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Galería de imágenes */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={tour.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative h-[600px]"
              >
                {/* Primera imagen */}
                <div className="absolute top-0 left-0 w-3/4 h-[400px] rounded-3xl overflow-hidden shadow-2xl z-10">
                  <div className="w-full h-full overflow-hidden">
                    <img 
                      src={tour.images[0]}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Segunda imagen */}
                <div className="absolute bottom-0 right-0 w-3/4 h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full overflow-hidden">
                    <img 
                      src={tour.images[1]}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controles de navegación */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
              <button
                onClick={() => setCurrentTour(prev => (prev - 1 + tours.length) % tours.length)}
                className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all group"
              >
                <ChevronLeft className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900" />
              </button>
              <button
                onClick={() => setCurrentTour(prev => (prev + 1) % tours.length)}
                className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all group"
              >
                <ChevronRight className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900" />
              </button>
            </div>
          </div>

          {/* Información del tour */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <div className="flex items-center gap-2 text-neutral-500 mb-4">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">{tour.location}</span>
                  </div>
                  <h2 className="text-4xl font-medium text-neutral-800 mb-2">
                    {tour.title}
                  </h2>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-neutral-500" />
                      <span className="text-lg text-neutral-500">{tour.duration}</span>
                    </div>
                    <span className="text-2xl font-medium text-neutral-800">{tour.price}</span>
                  </div>
                </div>

                <p className="text-lg text-neutral-600 leading-relaxed">
                  {tour.description}
                </p>

                <div>
                  <h3 className="text-lg font-medium text-neutral-800 mb-4">Destacados del tour:</h3>
                  <div className="flex flex-wrap gap-3">
                    {tour.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-neutral-700 shadow-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6 pt-4">
                  <button className="px-8 py-4 bg-neutral-900 text-white rounded-full text-lg hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl">
                    Reservar ahora
                  </button>
                  <button className="px-8 py-4 border border-neutral-300 rounded-full text-lg text-neutral-700 hover:border-neutral-900 transition-colors">
                    Más información
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Chat button */}
    </section>
  );
};

export default ToursSection;