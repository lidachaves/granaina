import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
        <h1 className="text-xl font-bold">Logo</h1>
        <nav className="flex items-center space-x-9">
          <ul className="flex space-x-9">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Categories</a></li>
            <li><a href="#" className="hover:text-gray-300">Promotions</a></li>
          </ul>
          <div className="flex items-center space-x-5">
            {/* Icono de usuario */}
            <FontAwesomeIcon icon={faUser} className="text-lg cursor-pointer hover:text-gray-300" onClick={toggleLogin} />
            {/* Icono de carrito */}
            <FontAwesomeIcon icon={faShoppingCart} className="text-lg cursor-pointer hover:text-gray-300" />
          </div>
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
