import React from 'react'
import Hero from '../components/HeroSection';
import Tours from '../components/Tours';
import Articles from '../components/ArticlesSection';
import BenefitsSection from '../components/BenefitsSection';
import WineSection from '../components/WineSection';
import GastronomySection from '../components/GastronomySection';
import AtlanticTourismSection from '../components/AtlanticTourismSection';
import CantabrianParadiseSection from '../components/CantabrianParadiseSection';

function Home() {
  return (
    <div>
      <Hero />
      <Tours/>
      <Articles/>
      <BenefitsSection/>
      <WineSection/>
      <GastronomySection/>
      <AtlanticTourismSection/>
      <CantabrianParadiseSection/>
      {/* Aquí puedes agregar más secciones de tu página de inicio */}
    </div>
  )
}

export default Home