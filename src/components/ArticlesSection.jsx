import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Importación de imágenes
import articleIceland from '../assets/article-iceland.jpg';
import articleMadagascar from '../assets/article-madagascar.jpg';
import articleNamibia from '../assets/article-namibia.jpg';
import articleGayLife from '../assets/article-gay-life.jpg';

const articles = [
  {
    id: 1,
    title: 'Iceland Westfjords – Self-drive adventure',
    image: articleIceland,
    link: '/articles/iceland'
  },
  {
    id: 2,
    title: 'Strange Creatures of Madagascar & South Africa',
    image: articleMadagascar,
    link: '/articles/madagascar'
  },
  {
    id: 3,
    title: 'Enchanting Namibia',
    image: articleNamibia,
    link: '/articles/namibia'
  },
  {
    id: 4,
    title: 'Gay Life',
    image: articleGayLife,
    link: '/articles/gay-life'
  },
  {
    id: 5,
    title: 'Iceland Westfjords – Extended Version',
    image: articleIceland,
    link: '/articles/iceland-2'
  },
  {
    id: 6,
    title: 'Madagascar Wildlife Collection',
    image: articleMadagascar,
    link: '/articles/madagascar-2'
  }
];

const ArticlesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === 'next' && currentIndex < articles.length - 4) {
      setCurrentIndex(prev => prev + 1);
    } else if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section className="relative bg-white font-['Urbanist'] min-h-screen overflow-hidden py-12 lg:py-0">
      <div className="h-full flex flex-col lg:flex-row">
        {/* Contenido lateral */}
        <div className="w-full lg:w-[350px] p-8 lg:p-12 flex flex-col justify-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-800 mb-4 lg:mb-6 leading-tight">
              Lo más interesante del País Vasco
            </h2>
            <p className="text-base text-neutral-600 mb-6 lg:mb-8">
              Explora nuestros artículos más recientes sobre la cultura, gastronomía y tradiciones vascas.
            </p>
            
            <div className="flex items-center justify-between">
              <button className="group flex items-center gap-2 text-neutral-800">
                <span className="text-sm hover:underline">Ver todos los artículos</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              {/* Navegación - Oculta en móvil */}
              <div className="hidden lg:flex gap-3">
                <button
                  onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:border-neutral-900 transition-all"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentIndex(Math.min(articles.length - 4, currentIndex + 1))}
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:border-neutral-900 transition-all"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel de artículos */}
        <div className="flex-1 overflow-hidden relative">
          <motion.div 
            className="flex h-[75vh] lg:h-screen"
            animate={{ x: `${-currentIndex * 33.333}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {articles.map((article) => (
              <article 
                key={article.id} 
                className="w-full lg:w-1/3 flex-shrink-0 h-full"
              >
                <a href={article.link} className="block relative h-full">
                  <div className="relative w-full h-full">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradiente permanente pero que se intensifica en hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-colors duration-300 hover:from-black/70 hover:via-black/30" />
                    
                    {/* Títulos */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                      <span className="block text-white/80 text-lg mb-2 font-light">
                        {article.subTitle}
                      </span>
                      <h3 className="text-2xl lg:text-3xl text-white font-light leading-tight">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </motion.div>

          {/* Navegación móvil */}
          <div className="flex lg:hidden justify-center gap-3 mt-4 pb-4">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentIndex(Math.min(articles.length - 4, currentIndex + 1))}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;