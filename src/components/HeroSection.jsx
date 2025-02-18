import React from 'react';
import { motion } from 'framer-motion';
import heroBackground from '../assets/cantabria.jpg'; // Importación de la imagen de fondo

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter brightness-50"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: 'center'
          }}
        />
        
        {/* Contenido del Hero */}
        <motion.div 
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Descubre el Norte de España
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Sumérgete en la mejor gastronomía, vinos, naturaleza y cultura de la costa atlántica
          </p>
          <motion.button
            className="bg-yellow-400 text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comienza tu aventura
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;