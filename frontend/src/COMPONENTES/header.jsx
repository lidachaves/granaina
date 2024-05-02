import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const Header = ({ toggleLogin }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header className="bg-gray-800 text-white flex px-5 py-3 justify-center">
      <div className="max-w-7xl w-full flex justify-between gap-5">
        <h1 className="text-xl font-bold">Logo</h1>
        <nav className="flex items-center space-x-9">
          <ul className="flex space-x-9">
            <li><Link href="#" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="#" className="hover:text-gray-300">About</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Categories</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Promotions</Link></li>
          </ul>
          <div className="flex items-center space-x-5">
            {/* Icono de usuario */}
            <Link to="/login"><FontAwesomeIcon icon={faUser} className="text-lg cursor-pointer hover:text-gray-300" /></Link>
            {/* Icono de carrito */}
            <FontAwesomeIcon icon={faShoppingCart} className="text-lg cursor-pointer hover:text-gray-300" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
