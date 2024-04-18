import React, { useState } from 'react';
import Header from './Cabecera'; 
import ProductCard from './COMPONENTES/tarjeta.js'; 
import Login from './COMPONENTES/LOGIN.js'; 
import 'tailwindcss/tailwind.css';
import Footer from './COMPONENTES/footer.js';
import Banner1 from './COMPONENTES/banner1.js';


function App() {
  const [showLoginModal, setShowLoginModal] = useState(false); // Esta funcion es  para controlar la visibilidad del modal de inicio de sesión :)

  return (
    <div className="App">
      <Header setShowLoginModal={setShowLoginModal} /> {/* Esta funcion que meti es para controlar el modal como una prop */}
      <Banner1 /> 
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
      <Footer />
    </div> 
    
  );
}

export default App;
