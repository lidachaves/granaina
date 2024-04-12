import React from 'react';
import Header from './Cabecera'; 
import ProductCard from './COMPONENTES/tarjeta.js';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="App">
      <Header /> 
      <ProductCard /> 
    </div>
  );
}

export default App;
