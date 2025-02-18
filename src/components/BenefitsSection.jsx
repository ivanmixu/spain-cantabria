import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import tour1Image1 from '../assets/tour-cantabria-1.jpg';
import tour1Image2 from '../assets/tour-cantabria-2.jpg';
import tour2Image1 from '../assets/tour-galicia-1.jpg';
import tour2Image2 from '../assets/tour-galicia-2.jpg';
import backgroundImage from '../assets/mountain-background.jpg';

const benefits = [
  {
    id: 1,
    title: 'Gastronomía Premium',
    description: 'La mejor cocina tradicional del país',
    image: tour1Image1
  },
  {
    id: 2,
    title: 'Entorno Natural',
    description: 'Entre montañas y mar Cantábrico',
    image: tour1Image2
  },
  {
    id: 3,
    title: 'Cultura Única',
    description: 'Tradiciones milenarias vivas',
    image: tour2Image1
  },
  {
    id: 4,
    title: 'Ciudades Históricas',
    description: 'Arquitectura y patrimonio únicos',
    image: tour2Image2
  },
  // Segunda línea
  {
    id: 5,
    title: 'Clima Agradable',
    description: 'Veranos suaves e inviernos moderados',
    image: backgroundImage
  },
  {
    id: 6,
    title: 'Conectividad',
    description: 'Excelentes conexiones de transporte',
    image: tour2Image2
  },
  {
    id: 7,
    title: 'Calidad de Vida',
    description: 'Alto nivel de bienestar social',
    image: tour1Image1
  },
  {
    id: 8,
    title: 'Vinos y Sidra',
    description: 'Región vinícola de prestigio',
    image: tour1Image2
  }
];

const BenefitsSection = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    // Animación primera fila
    const tl1 = gsap.to(row1.children, {
      xPercent: -100,
      ease: "none",
      duration: 20,
      repeat: -1,
      paused: true
    });

    // Animación segunda fila (dirección opuesta)
    const tl2 = gsap.to(row2.children, {
      xPercent: 100,
      ease: "none",
      duration: 20,
      repeat: -1,
      paused: true
    });

    // Iniciar animaciones
    tl1.play();
    tl2.play();

    // Funciones para pausar/reanudar en hover
    const handleMouseEnter = (timeline) => {
      timeline.pause();
    };

    const handleMouseLeave = (timeline) => {
      timeline.play();
    };

    row1.addEventListener('mouseenter', () => handleMouseEnter(tl1));
    row1.addEventListener('mouseleave', () => handleMouseLeave(tl1));
    row2.addEventListener('mouseenter', () => handleMouseEnter(tl2));
    row2.addEventListener('mouseleave', () => handleMouseLeave(tl2));

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  return (
    <section className="py-20 bg-white font-['Urbanist']">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título y descripción */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-6xl mb-6">
            <span className="text-[#A6C170] font-light">Un nuevo estándar</span>
            <br />
            <span className="text-neutral-800">de vida en el Norte</span>
          </h2>
          <p className="text-neutral-600 text-xl">
            El norte de España combina la modernidad con la tradición, ofreciendo una calidad de vida excepcional en un entorno único.
          </p>
        </div>

        {/* Carrusel de beneficios */}
        <div className="overflow-hidden">
          {/* Primera fila */}
          <div 
            ref={row1Ref}
            className="flex gap-6 mb-6 items-center"
          >
            {[...benefits.slice(0, 4), ...benefits.slice(0, 4)].map((benefit, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 bg-neutral-50 rounded-xl p-4 flex items-center gap-4 w-[300px] group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-800 group-hover:text-[#A6C170] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Segunda fila */}
          <div 
            ref={row2Ref}
            className="flex gap-6 items-center"
          >
            {[...benefits.slice(4, 8), ...benefits.slice(4, 8)].map((benefit, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 bg-neutral-50 rounded-xl p-4 flex items-center gap-4 w-[300px] group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-800 group-hover:text-[#A6C170] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;