import React, { useState } from 'react';
import Header from './COMPONENTES/header.jsx';
import 'tailwindcss/tailwind.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="App">
      <Header setShowLoginModal={setShowLoginModal} /> {/* Renderiza el componente de header */}
      {showLoginModal && <Login />} {/* Muestra el componente de login solo si showLoginModal es true */}
    </div> 
  );
}

export default App;
