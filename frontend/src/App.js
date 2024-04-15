import React, { useState } from 'react';
import Header from './Cabecera'; 
import ProductCard from './COMPONENTES/tarjeta.js'; 
import Login from './COMPONENTES/LOGIN.js'; 
import 'tailwindcss/tailwind.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false); // Esta funcion es  para controlar la visibilidad del modal de inicio de sesión :)

  return (
    <div className="App">
      <Header setShowLoginModal={setShowLoginModal} /> {/* Esta funcion que meti es para controlar el modal como una prop */}
      <div className="flex flex-wrap justify-around mt-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {showLoginModal && <Login setShowLoginModal={setShowLoginModal} />} 
    </div>
  );
}

export default App;
