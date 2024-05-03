import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout'

const Header = ({ toggleLogin }) => {
  const { user } = useAuthContext();
  const { logout } = useLogout()

  const handleLogout = () => {
    logout();
  }

  return (
    <header className="bg-gray-800 text-white flex py-3 justify-center">
      <div className="max-w-7xl w-full flex justify-between gap-5 items-center h-10 px-5">
        <div className="flex gap-5">
          <h1 className="text-xl font-bold">Logo</h1>
          <nav className="flex items-center space-x-9">
            <ul className="flex gap-5">
              <li><Link href="#" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="#" className="hover:text-gray-300">About</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Categories</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Promotions</Link></li>
            </ul>
          </nav>
        </div>
        {user ? (
          <div className="flex gap-4 items-center">
            <p>Sesión iniciada</p>
            <button onClick={handleLogout} className="py-2 px-3 rounded-sm bg-red-600 hover:bg-red-500 active:bg-red-400">Cerrar sesión</button>
          </div>
        ) : (
          <div className="flex items-center space-x-5">
            {/* Icono de usuario */}
            <Link to="/login"><FontAwesomeIcon icon={faUser} className="text-lg cursor-pointer hover:text-gray-300" /></Link>
            {/* Icono de carrito */}
            <FontAwesomeIcon icon={faShoppingCart} className="text-lg cursor-pointer hover:text-gray-300" />
          </div>
        )}
      </div>

    </header>
  );
};

export default Header;
