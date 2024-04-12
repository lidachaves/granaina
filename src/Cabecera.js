import React from 'react';
import CarritoCompras from './carrito.svg'; 
import 'tailwindcss/tailwind.css';

function Header() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">La Granaina</h1>
        <nav>
          <ul className="flex text-white">
            <li className="mr-4"><a href="#">Inicio</a></li>
            <li className="mr-4"><a href="#">Acerca de</a></li>
            <li className="mr-4"><a href="#">Productos</a></li>
            <li className="mr-4"><a href="#">Contacto</a></li>
            <li className="mr-4"><a href="#">Login</a></li>
            <li><a href="#"><img src={CarritoCompras} alt="Carrito de compras" className="w-6 h-6"/></a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
