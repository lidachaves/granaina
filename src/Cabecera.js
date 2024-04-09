import React from 'react';
import './style.css'; 
import CarritoCompras from './carrito.svg'; 

function Header() {
  return (
    <div className="header">
      <h1>La Granaina</h1>
      <nav className="navbar"> 
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
          <li className="login-link"><a href="#">Login</a></li>
          <li className="carrito">
            <a href="#">
              <img src={CarritoCompras} alt="Carrito de compras" style={{ width: '20px', height: '20px' }} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
