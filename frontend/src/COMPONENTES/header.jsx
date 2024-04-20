import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Header = ({ toggleLogin }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="flex items-center justify-between py-3 px-5 mx-auto max-w-7xl">
        {/* Logo pa la esquina superior izquierda */}
        <h1 className="text-xl font-bold">Logo</h1>
        {/*  centradado  */}
        <nav className="flex justify-center items-center">
  <ul className="flex space-x-9 justify-center">
    <li><a href="#" className="hover:text-gray-300">Productos</a></li>
    <li><a href="#" className="hover:text-gray-300">Nosotros</a></li>
    <li><a href="#" className="hover:text-gray-300">Contacto</a></li>
    <li><a href="#" className="hover:text-gray-300">Ayuda o pedidos</a></li>
  </ul>
</nav>

      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8">
            {/* Pasamos la función handleCloseModal al componente Login */}
            <Login onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
