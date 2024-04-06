import React from 'react';
import './style.css'; 

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
            <li className="login-link"><a href="#">Login </a></li> {/* Agrega la clase login-link */}
          </ul>
        </nav>
      </div>
    );
  }

export default Header;
