import React from 'react';
import './App.css';
import Carousel from './Carrousel';
import coding from './Images/Coding2.png';
import capteurs from './Images/capteurs2.png';
import reseau from './Images/reseaux2.png';
import sécurité from './Images/securité2.png';
import BackgroundPoints from './Backgroundpoints';
import Navbar from './Navbar'; // Importe la Navbar

function App() {
  const cards = [
    {
      title: "Codage",
      image: coding,
      description: `Testez vos connaissances
en programmation IoT:
language, script ...`,
    },
    {
      title: "Capteurs",
      image: capteurs,
      description: `Quiz sur les composants
clés de l'IoT : résistances,
capteurs ...`,
    },
    {
      title: "Réseau",
      image: reseau,
      description: `Défis sur les communications IoT : protocoles, fréquences..`,
    },
    {
      title: "Sécurité",
      image: sécurité,
      description: `Testez vos réflexes en
cyber sécurité: cryptographie ..`,
    },
  ];

  return (
    <div className="App">
      <BackgroundPoints />
      <Navbar /> {/* Ajoute la Navbar ici */}
      <h1 className="section-title">Choisir une section</h1>
      <Carousel cards={cards} /> 
    </div>
  );
}

export default App;