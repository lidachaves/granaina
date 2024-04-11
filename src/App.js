import React from 'react';
import Header from './Cabecera'; // Importa el componente Cabecera, no el archivo CSS
import ProductCard from './tarjeta.js';

function App() {
  return (
    <div className="App">
      <Header /> 
      <ProductCard /> 
    </div>
  );
}

export default App;
